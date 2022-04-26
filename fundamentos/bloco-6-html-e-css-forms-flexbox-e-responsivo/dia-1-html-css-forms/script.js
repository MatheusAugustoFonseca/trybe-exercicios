function submit(event) {
  event.preventDefault()
}

window.onload = function() {
  const submitBtn = document.querySelector('#submit-btn');
   submitBtn.addEventListener('click', submit)
};


function resetButton(){
  const formElements = document.querySelectorAll('input');
  const textArea =document.querySelector('textarea');
  for (let index of formElements) {
    const userInput = formElements
  }
  
}
addEventListener(click, resetButton);