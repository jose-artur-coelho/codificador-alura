const padraoResultado = `
<div class="padrao">
  <img src="./assets/messageNotFound.svg" alt="" />
  <span class="msg-nao-encontrada">Nenhuma mensagem encontrada</span>
  <span class="sub-msg-nao-encontrada">
    digite um texto que você deseja criptografar ou descriptografar.
  </span>
</div>
`;

const entrada = document.querySelector('.input-texto');
const botaoCriptografar = document.querySelector('.btn-criptografar');
const botaoDescriptografar = document.querySelector('.btn-decriptografar');
const resultado = document.querySelector('.container-resultado');
let botaoCopiar;

botaoCriptografar.addEventListener('click', () => {
  if (entrada.value) {
    const texto = entrada.value;
    const textoCriptografado = criptografar(texto);
    mostrarResultado(textoCriptografado);
    entrada.value = '';
  }
});

botaoDescriptografar.addEventListener('click', () => {
  if (entrada.value) {
    const texto = entrada.value;
    const textoDescriptografado = descriptografar(texto);
    mostrarResultado(textoDescriptografado);
    entrada.value = '';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (entrada.value) {
      const texto = entrada.value;
      const textoCriptografado = criptografar(texto);
      mostrarResultado(textoCriptografado);
      entrada.value = '';
    }
  }
});

function criptografar(texto) {
  return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
  return texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function mostrarResultado(texto) {
  resultado.innerHTML = `
    <div class="resultado">
      <textarea class="texto-criptografado" readonly>${texto}</textarea>
      <button class="btn-copy">Copiar</button>
    </div>
  `;
  botaoCopiar = document.querySelector('.btn-copy');
  botaoCopiar.addEventListener('click', copiarTexto);
}

function copiarTexto() {
  const textoCopiado = document.querySelector('.texto-criptografado');
  textoCopiado.select();
  document.execCommand('copy');
  if (botaoCopiar) {
    botaoCopiar.removeEventListener('click', copiarTexto);
    botaoCopiar = null;
  }
  resultado.innerHTML = padraoResultado;
  entrada.focus();
  entrada.value = '';
}
