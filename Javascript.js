const myforum = document.querySelector('#forum');
const messageInput = document.querySelector('#message.text');
const userMessage = document.querySelector('#messages');
const msg = document.querySelector('.msg');

myforum.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(messageInput.value === '') {
        msg.innerHTML = 'Please enter message';
    } else {
        console.log('success')
    }
}
