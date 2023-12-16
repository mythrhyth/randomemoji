const emojis = ["🥲", "😘", "😚", "😏", "🥹", "🫢", "🤭","🤗", "😵‍💫", "🥱", "😴", "🫶"];
const emoji = document.querySelector("div"); 
const change = ()=>{
    emoji.innerHTML= emojis[Math.floor(Math.random()*emojis.length)];
    
}
emoji.addEventListener("click", change); 
emoji.addEventListener("mouseover", change); 
emoji.addEventListener("mousedown", change); 


