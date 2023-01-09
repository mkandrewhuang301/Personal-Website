const name = document.getElementById("name");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");

const submit = document.getElementById("submit");

submit.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("clicked");
    let ebody = `
        <p><span style = "font-weight: bold">  From:</span> </p> ${document.getElementById("name").value}
        <br>
        <p><span style = "font-weight: bold">  Email: </span></p>  ${document.getElementById("mail").value}
        <p><span style = "font-weight: bold">Message: </span></p>${document.getElementById("subject").value}
    `;

    Email.send({
        SecureToken: "c9dcc1e8-2cd9-4fa3-8e26-a6b58c80582b",
        To : 'andyallenhuang@gmail.com',
        From : "andyallenhuang@gmail.com",
        Subject : "New Website Form Inquiry",
        Body : ebody,
    }).then(
    message => alert(message));
    
    console.log("email sent");
    
})