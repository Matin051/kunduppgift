document.getElementById("logutDiv").style.visibility = "hidden";




function loginbtn() {


    if (document.getElementById("nameuser").value == "sara" && document.getElementById("pass").value == "qwe123") {

        
        window.confirm("Välkommen, du är nu inloggad")

        document.getElementById("nameuser").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("loginDiv").style.visibility = "hidden"
        document.getElementById("logutDiv").style.visibility = "visible";

        localStorage.setItem("nameuser", "sara");
        localStorage.setItem("pass", "qwe123");

        let nameuser = localStorage.getItem("nameuser");
        let pass = localStorage.getItem("pass");

    } else {
        window.confirm("Du har skrivit fel Username eller Password, vill du testa igen?")
    }



}

function logutbtn() {

    location.reload();

}