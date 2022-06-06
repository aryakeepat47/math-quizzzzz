function addUser(){
    player1name=document.getElementById("player1_name_input").value
    player2name=document.getElementById("player2_name_input").value

    localStorage.setItem("player1 name" ,player1name)
    localStorage.setItem("player2 name" ,player2name)

    window.location="page2.html"
}