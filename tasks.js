document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        console.log(task);

        // Stop form from submitting
        return false;
    }
});