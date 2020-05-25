import glslangModule from './glsl.js';

async function hello() {
	let gl = await glslangModule();
	document.getElementById('hed').textContent = "module loaded";
	console.log(gl);
	const vertexShaderGLSL = `#version 450
	      const vec2 pos[3] = vec2[3](vec2(0.0f, 0.5f), vec2(-0.5f, -0.5f), vec2(0.5f, -0.5f));
	      void main() {
	          gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);
	      }
	    `;
	document.getElementById('hed').textContent = vertexShaderGLSL;
	const abc = gl.compileGLSL(vertexShaderGLSL, "vertex")
	document.getElementById('hedd').textContent = abc;
}

hello();