document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const gmail = document.getElementById("email").value;
    const number = document.getElementById("Phonenumber").value;

    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Email:", gmail);
    console.log("Phone Number:",number);
});
