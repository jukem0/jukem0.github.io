// declares var a - d to each segment 
var a = document.getElementById("infGf")
var b = document.getElementById("codeHTML")
var c = document.getElementById("prog")
var d = document.getElementById("server")


function openInf() {
    a.style.display="block"
    b.style.display="none"
    c.style.display="none"
    d.style.display="none"
}

function openCode() {
    a.style.display="none"
    b.style.display="block"
    c.style.display="none"
    d.style.display="none"
}

function openProg() {
    a.style.display="none"
    b.style.display="none"
    c.style.display="block"
    d.style.display="none"
}

function openServer() {
    a.style.display="none"
    b.style.display="none"
    c.style.display="none"
    d.style.display="block"
}
