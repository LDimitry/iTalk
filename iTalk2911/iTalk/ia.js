// Seleciona todos os botões na área de seleção de idioma
const languageButtons = document.querySelectorAll('.language-selector button');

// Adiciona um evento de clique a cada botão
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        languageButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    });
});
document.querySelectorAll('.language-selector button').forEach(button => {
  button.addEventListener('click', async (event) => {
      const selectedLanguage = event.target.id.replace('lang-', '');
      try {
          const response = await fetch('http://127.0.0.1:5000/api/set-language', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ language: selectedLanguage }),
          });
          const data = await response.json();
          if (response.ok) {
              alert(`Idioma configurado para: ${selectedLanguage}`);
          } else {
              alert(`Erro: ${data.error}`);
          }
      } catch (error) {
          console.error('Erro ao configurar o idioma:', error);
          alert('Erro ao configurar o idioma');
      }
  });
});
// Botão para iniciar o reconhecimento de fala
document.getElementById('mic-btn').addEventListener('click', async () => {
    const responseElement = document.querySelector('.circle'); // Feedback visual
    const selectedLanguage = document.querySelector('.language-selector button.active')?.id.replace('lang-', '') || 'en'; // Obtém o idioma selecionado pelo botão com a classe 'active'

    try {
      // Faz uma requisição ao endpoint de reconhecimento de fala
      const response = await fetch('http://127.0.0.1:5000/api/recognize-speech', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ language: selectedLanguage }),
      });

      const data = await response.json();
  
      if (data.recognized_text) {
        responseElement.style.background = 'linear-gradient(135deg, #34eb77, #32a852)'; // Feedback visual para sucesso
        alert(`Texto reconhecido: ${data.recognized_text}`);
  
        // Envia o texto reconhecido para o servidor
        sendTextToFlask(data.recognized_text);

      } else {
        responseElement.style.background = 'linear-gradient(135deg, #eb4034, #a83232)'; // Feedback visual para erro
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      responseElement.style.background = 'linear-gradient(135deg, #eb4034, #a83232)'; // Feedback visual para erro
      console.error('Erro ao se comunicar com o Flask:', error);
      alert('Erro ao se comunicar com o Flask');
    }
  });
  
  // Botão para cancelar (redefine o feedback visual)
  document.getElementById('cancel-btn').addEventListener('click', () => {
    const responseElement = document.querySelector('.circle');
    responseElement.style.background = 'linear-gradient(135deg, #6dd5ed, #2193b0)';
    alert('Operação cancelada.');
  });
  
  // Função para enviar texto ao Flask e obter resposta do Gemini
  async function sendTextToFlask(userText) {
    const responseElement = document.querySelector('.circle'); // Feedback visual
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/send-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userText }),
      });
      const data = await response.json();
  
      if (data.response) {
        responseElement.style.background = 'linear-gradient(135deg, #34eb77, #32a852)'; // Feedback visual para sucesso
        alert(`Resposta da IA: ${data.response}`);
      } else {
        responseElement.style.background = 'linear-gradient(135deg, #eb4034, #a83232)'; // Feedback visual para erro
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      responseElement.style.background = 'linear-gradient(135deg, #eb4034, #a83232)'; // Feedback visual para erro
      console.error('Erro ao se comunicar com o Flask:', error);
      alert('Erro ao se comunicar com o Flask');
    }
  }
  