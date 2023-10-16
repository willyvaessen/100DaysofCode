const messages_container = document.querySelector('.messages');
const sendBtn = document.querySelector('.input button');
const input = document.querySelector('.input input');

sendBtn.addEventListener('click', addMessage);

const user_info = {
    name: 'Willy Vaessen',
    avatar: 'avatar.jpg'
}


function addMessage() {
    if (input.value === '') {

    } else {
        messages_container.innerHTML += `
        <div class="single">
                <div class="img">
                    <img src="${user_info.avatar}" alt="Avatar">
                </div>
                <div class="user_info">
                    <h4>${user_info.name}</h4>
                    <p>${input.value}</p>
                </div>
            </div>`
        //  p element will contain the message.
        input.value = ''; //    Clearing the value of the inpout textbox.
        input.focus();
        const lastMsg = document.querySelector('.single:last-of-type');
        lastMsg.scrollIntoView(true);
    }
}