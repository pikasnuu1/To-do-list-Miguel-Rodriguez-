
/*
block of code for addToDo() from: https://stackoverflow.com/questions/69839977/how-to-take-text-value-and-add-it-to-list-by-clicking-submit-button-using-dom

Including checkbox after adding item in list from chatGPT

delete button https://stackoverflow.com/questions/71808591/how-to-delete-a-list-item-by-using-a-button-in-javascript



 */
const submitButton = document.getElementById('submitButton');
let taskCount = 0;

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
  checkbox.id = 'task' + taskCount; //unique id for each checkbox

  /*
  checkbox.addEventListener('change', function() {
    if(checkbox.clicked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration ='';
    }
  });
  */

  //creating label for the to-do item
  const label = document.createElement('label');
  label.setAttribute('for', checkbox.id);
  label.textContent = input;

  //create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  //adding event listener to delete button
  deleteButton.addEventListener('click', function() {
    todo.remove();
  });

  //append the checkbox and label to the to-do item (li)
  todo.appendChild(checkbox);
  todo.appendChild(label);
  todo.appendChild(deleteButton);

  //inserting the to-do item (li) inside the container (u1)
  document.body.insertBefore(todo,container);

  taskCount++;
};

//running the addToDo function
submitButton.addEventListener('click', addToDo);

//prevent the form submit so we don't get any errors or blank page
document.querySelector("form").addEventListener('submit', e => e.preventDefault());


