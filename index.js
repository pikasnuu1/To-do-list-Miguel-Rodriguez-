const submitButton = document.getElementById('submitButton');

/*
block of code from: https://stackoverflow.com/questions/69839977/how-to-take-text-value-and-add-it-to-list-by-clicking-submit-button-using-dom
 */

function addToDo() {
  //select container so we can insert our todo items in it
  let container = document.querySelector('u1');
  //get the value from the input
  let input = document.querySelector('#toDoText').value;
  //create an element for each gotten input value
  const todo = document.createElement("li");
  //set the text(value) of the todo item(li)
  const txt = document.createTextNode(input);
  //append the text(value) to do created element(li)
  todo.appendChild(txt);
  //Finally we insert the last result(todo with value) inside the container(div)
  document.body.insertBefore(todo,container);
};

//running the function
submitButton.addEventListener('click', addToDo);

//prevent the form submit so we don't get any errors or blank page
document.querySelector("form").addEventListener('submit', e => e.preventDefault());


