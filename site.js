window.onload = function() {
    let fetchPromise = fetch('https://xpxhz7ljec7doxp5x66ejkemiu0glcaz.lambda-url.us-east-1.on.aws/');
    fetchPromise
        .then(response => response.json())
        .then(data => document.getElementById('timestampSpan').innerHTML = data.timestamp);
}
