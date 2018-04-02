// Retrieve the high-level elements on the page:
// - The new task input field
// - The add new task button
// - The to-do list iteslf
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

/****************************************
* The following loop adds event handlers
* to the already existing tasks
* DO NOT EDIT THIS CODE!!!
****************************************/
Array.from(todoList.children).forEach(function(listItem) {
	let checkBox = listItem.querySelector("input[type=checkbox]"); //
	let editButton = listItem.querySelector("button.edit"); //
	editButton.onclick = editTask; // Bind editTask to edit button
	checkBox.onchange = completeTask;
});

// Add a click handler to the addButton

  // Add handlers for the edit button and checkbox
  // editButton.onclick = ...
  //checkBox.onchange = completeTask;
  //connected the addTask() function as an onclick event handler for the addButton
  addButton.onclick = addTask;

  //editButton.onclick=editTask;  i dont have to write it here because i dont have access to it .


/*******************************************
* Create a new to-do item:
*
* Generates a new to-do list item along
* with all of its buttons and input fields
*
* createNewTask(itemString);
********************************************/
function createNewTask(taskString) {
	let listItem = document.createElement("li"); // Create List Item
	let checkBox = document.createElement("input"); // Input (checkbox)
	let label = document.createElement("label"); // Label
	let editInput = document.createElement("input"); // Input (text)
	let editButton = document.createElement("button"); // Button.edit

	checkBox.type = "checkbox"; // Make this input a checkboxn html (type="checkbox")
	editInput.type = "text"; // Make this input a text field in html (type="text")
	editButton.innerText = "Edit"; // Change the text on the button
	editButton.className = "edit"; // Give the button a .edit class
	label.innerText = taskString; // Change the label text to the new taskString

  // COMPLETE ME!
  // Add handlers for the edit button and checkbox
  // editButton.onclick = ...
  	editButton.onclick = editTask;
  	checkBox.onchange = completeTask;

  // checkBox.onchange = ...
  //checkBox.onchange =this.checkbox;
  // Append each element to the listItem " attacheing an item to a list of things checkbox,input,and edit button"
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);

	return listItem;
};


/*****************************************************
* Add a new task to the list:
* - Create a new task with the value from taskInput
* - If there is nothing in taskInput, the default is "New Task"
* - Append the new task to the todoList
* - Reset the value of taskInput
*****************************************************/

function addTask() {
	let listItem = createNewTask(taskInput.value);

	if (!taskInput ) {
		//console.log('New Task'); 
		//If the taskInput field was empty then the default text for the new task should be "New Task".
	listItem = createNewTask(" New Task");
		//taskInput = new taskInput;


	};
//Append the new task item as a child of the todoList element.
	todoList.appendChild(listItem)
 // go back and check 
 	taskInput.value= "";
 	

};


/*****************************************************************
* Edit a task:
* - Get the current list item
* - Get the label and the input field from the list item
* - Check if the list item is in edit mode:
*   - Edit Mode:
*       - set the label text to the value of the input field
*       - set the button text to 'Edit'
*   - !Edit Mode:
*       - set the input field value to the text of the label
*       - set the button text to 'Save'
* - Toggle edit mode
*****************************************************************/
function editTask() {
  // get the current list item which is the parent

  // node of the current button (`this`)
	let listItem = this.parentNode;
	let editItem=listItem.querySelector('input[type="text"]');
	let label =listItem.querySelector("label");
	//let editButton = document.createElement("button"); // Button.edit


	let containsClass =listItem.classList.contains("editMode");
	
	if (containsClass) {

		//set the label text to the value of the input field
		label.innerHTML =editItem.value;
		//Set the text in the button to 'Edit'
		//editButton.onclick =document.getElementsByClassName('edit');
		//editButton.innerText ="Edit";
		this.innerHTML ="Edit";


	} else {
		//Set the value of the input field to be the same as the text of the label
		editItem.value =label.innerHTML;
		//Set the text in the button to 'Save'
		//editButton.onclick =document.getElementsByClassName('edit').value('Save');
		this.innerHTML ="Save";
		console.log(this);



	}
  // Complete me!
  	listItem.classList.toggle("editMode");
};


/***********************************
* Mark a task as completed:
* - Get the current list item
* - Remove the item from todoList
let listItemComplete =this.parentNode;
let removeListItem=listItemComplete.parentNode;
	removeListItem.removeChild(listItemComplete);
***********************************/
function completeTask() {
	let currentTask=this.parentNode;
	console.log(currentTask);
	//this.parentNode.remove(); another way
	todoList.removeChild(currentTask);



};
