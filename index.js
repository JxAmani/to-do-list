document.addEventListener('DOMContentLoaded', () => {

    // Address Book 
    const nameInput = document.getElementById('name');       // Get the name input 
    const phoneInput = document.getElementById('phone');     // Get the phone number
    const emailInput = document.getElementById('email');       // Get the email input 
    const addContactButton = document.getElementById('add-contact');  // Get the Add Contact button

    addContactButton.addEventListener('click', () => {
                                        // This function runs when the Add Contact button is clicked.
        const name = nameInput.value.trim();       // Get the name, removing extra space by trim
        const phone = phoneInput.value.trim();     // Get the phone number
        const email = emailInput.value.trim();       // Get the email

        if (name && email) {  // Check if both name and email are filled in because && requires both to be there
            console.log('Adding contact:', { name, phone, email }); 
            alert(`Contact added:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`); // When all goes successfull

            nameInput.value = '';       // Clear the name input . '' is a empty string
            phoneInput.value = '';     // Clear the user phone input 
            emailInput.value = '';       // Clear the user email input 
        } else {
            alert('Name and Email are required.'); // either name or email have not been put
        }
    });
    //  Places You've Been 
    const placeInput = document.getElementById('place');         // Get the place input 
    const locationInput = document.getElementById('location');   // Get the location input 
    const dateInput = document.getElementById('date');           // Get the date input
    const addPlaceButton = document.getElementById('add-place-button');  // Get the Add Place button

    addPlaceButton.addEventListener('click', () => {
        // This function runs when the Add Place button is clicked.
        const placeName = placeInput.value.trim();       // Get the place name
        const location = locationInput.value.trim();     // Get the location
        const date = dateInput.value;                 // Get the date

        if (placeName && location && date) {  // Check if all fields are filled by user
            console.log('Adding place:', { placeName, location, date }); // Testing
            alert(`Place added:\nPlace: ${placeName}\nLocation: ${location}\nDate: ${date}`); // show alert

            placeInput.value = '';         // Clear the place input
            locationInput.value = '';       // Clear the location input
            dateInput.value = '';           // Clear the date input
        } else {
            alert('Place, Location and Date are required.'); // Show error
        }
    });

    //  To Do List 
    const newTaskInput = document.getElementById('new-task');    // Get the new task input
    const tasksList = document.getElementById('tasks');         // Get the task list (<ul>)
    const addTaskButton = document.getElementById('add-task-button');  // Get the Add Task button

    // Refactored addTask function.
    function addTask() {
        const taskText = newTaskInput.value.trim(); // Get the task text
        if (taskText !== '') {  // !== means not equal character so even if there is a single character it is reffered to as true
            const listItem = document.createElement('li');       // Create a new list item (<li>)
            const taskSpan = document.createElement('span');     // Create a span for the task text . span can be syled differently
            taskSpan.textContent = taskText;               // For span to display text
            listItem.appendChild(taskSpan);                 // Add the span to the list item

            const doneButton = document.createElement('button');      // Create a Done button
            doneButton.textContent = 'Done';                    // Set the button text
            doneButton.onclick = function () {
                listItem.classList.toggle('done');  // Toggle the 'done' class
            };
            listItem.appendChild(doneButton);               // Add the Done button to the list item

            const removeButton = document.createElement('button');    // Create a Remove button
            removeButton.textContent = 'Remove';                  // put the tex remove on the button
            removeButton.onclick = function () {
                listItem.remove();           // Remove the list item when clicked
            };
            listItem.appendChild(removeButton);             // put remove button in listItem

            tasksList.appendChild(listItem);         // put list Item in tasksLists 
            newTaskInput.value = '';             // Clear the new task.'' empty string
        }
    }

    // Event listener for the Add Task button.
    addTaskButton.addEventListener('click', addTask);// add a task on pressing add task button
    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();// to run the function
        }
    });
});
