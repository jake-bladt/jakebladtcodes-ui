window.onload = function() {
    let fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/2');
    fetchPromise
        .then(response => response.json())
        .then(data => document.getElementById('taskParagraph').innerHTML = data.title);
}
