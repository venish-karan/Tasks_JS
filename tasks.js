document.addEventListener('DOMContentLoaded', function() {

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        // if(document.querySelector('#task').value != '') {
            if(document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;   
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        
        // Taking the input field from keyboard and assiging it to task variable
        const task = document.querySelector('#task').value;
        
        // console.log(task);

        // Create list element
        const li = document.createElement('li');
        li.innerHTML = task;
        
        // Append an item to the list
        document.querySelector('#tasks').append(li);
        
        // Set the input field to empty after taking the input
        document.querySelector('#task').value = "";
       
        //Inactive submit button
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    }
});