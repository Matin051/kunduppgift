document.getElementById("logutDiv").style.visibility = "hidden";


function loginbtn() {


    if (document.getElementById("nameuser").value == "sara" && document.getElementById("pass").value == "qwe123") {

        console.log("Matin");
        window.confirm("Välkommen, du är nu inloggad")

        document.getElementById("nameuser").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("loginDiv").style.visibility = "hidden"
        document.getElementById("logutDiv").style.visibility = "visible";

    }else{
        window.confirm("Du har skrivit fel Username eller Password, vill du testa igen?")
    }



}

function logutbtn() {

    location.reload();

}