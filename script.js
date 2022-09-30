document.getElementById("logutDiv").style.visibility = "hidden";




function loginbtn() {


    if (document.getElementById("nameuser").value == "sara" && document.getElementById("pass").value == "qwe123") {

        
        window.confirm("Välkommen, du är nu inloggad")

        document.getElementById("nameuser").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("loginDiv").style.visibility = "hidden"
        document.getElementById("logutDiv").style.visibility = "visible";

        localStorage.setItem("username", "sara");
        localStorage.setItem("password", "qwe123");

        let nameuser = localStorage.getItem("username");
        let pass = localStorage.getItem("password");

    } else {
        window.confirm("Du har skrivit fel Username eller Password, vill du testa igen?")
    }



}

function logutbtn() {

    location.reload();

}