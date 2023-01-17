const button = document.getElementById('helloBtn');

  if (button) {
    button.addEventListener('click', () => {
        alert('Hello, What is your name?!!')
        window.location.replace("../customer-name.html");
    });
  }

  const inputName = document.querySelector('input')
  const getNameBtn = document.getElementById('getNameBtn')

  if (getNameBtn) {
    getNameBtn.addEventListener('click', () => {
        alert('Hello, ' + inputName?.value)
        window.location.replace("../author.html");
    });
  }

  const getAuthorBtn = document.getElementById('getAuthorBtn')

  if (getAuthorBtn) {
    getAuthorBtn.addEventListener('click', () => {
        alert('The Author Is Alireza Hashemi')
        window.location.replace("../index.html");
    });
  }


