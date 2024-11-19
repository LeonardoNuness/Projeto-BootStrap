document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    event.stopPropagation();

    const form = event.target;
    if (form.checkValidity() === false) {
      // Se houver campos inválidos, exibe mensagens de erro
      form.classList.add('was-validated');
    } else {
      // Caso todos os campos sejam válidos
      alert('Formulário enviado com sucesso!');
      form.reset(); // Limpa os campos após o envio
      form.classList.remove('was-validated');
    }
  });