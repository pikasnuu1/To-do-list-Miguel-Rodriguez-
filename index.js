
/*
block of code for addToDo() from: https://stackoverflow.com/questions/69839977/how-to-take-text-value-and-add-it-to-list-by-clicking-submit-button-using-dom

including checkbox after adding from chatGPT

 */
const submitButton = document.getElementById('submitButton');

function addToDo() {
  //select container so we can insert our todo items in it
  let container = document.querySelector('u1');
  //get the value from the input
  let input = document.querySelector('#toDoText').value;
  //create an element for each gotten input value
  const todo = document.createElement("li");
  todo.style = 'list-style-type: none'; //so there's not bullet points

  //create a checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task' + (container.childElementCount+1); //unique id for each checkbox

  //creating label for the to-do item
  const label = document.createElement('label');
  label.setAttribute('for', checkbox.id);
  label.textContent = input;

  //append the checkbox and label to the to-do item (li)
  todo.appendChild(checkbox);
  todo.appendChild(label);

  document.body.insertBefore(todo,container);
};

//running the function
submitButton.addEventListener('click', addToDo);

//prevent the form submit so we don't get any errors or blank page
document.querySelector("form").addEventListener('submit', e => e.preventDefault());


