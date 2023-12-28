let username = "";

const btn = document.getElementById('join-chat');
const usernameInput = document.getElementById("username-input");
const form = document.getElementById("form");
const chatroomContainer =document.querySelector(".chatroom-container");


btn.addEventListener('click', (event)=>{
  event.preventDefault();
  username = usernameInput.value;
  console.log(username);

  if(username){
    // i need to redirect to chat page
    //   i need to show my chat room
    // and hide form
    
    form.style.display = "none";
    chatroomContainer.style.display = "block";

  }
})