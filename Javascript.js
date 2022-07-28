const myforum = document.querySelector('#forum');
const messageInput = document.querySelector('#message');
const userMessage = document.querySelector('messages');

myforum.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(messageInput);
}