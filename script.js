function Login(){
    var user = document.getElementById("entry1").value;
    var password = document.getElementById("entry2").value;

    if (user === "Destiny" && password === "1234"){
        alert("User: Destiny has successfully logged in.")
    }
}
