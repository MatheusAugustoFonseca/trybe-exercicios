function submit(event) {
  event.preventDefault()
}

window.onload = function() {
  const submitBtn = document.querySelector('#submit-btn');
   submitBtn.addEventListener('click', submit)
};


function resetButton(){
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1){
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea = '';
}
window.onload = function() {
  const resetBtn = document.querySelector('#reset');
  resetBtn.addEventListener(click, resetButton);
  // const submitBtn = document.querySelector('#submit-btn');
  //  submitBtn.addEventListener('click', submit);
} ;