console.log("testhallohallo")
document.getElementById("reserveerBtn").onclick = function () {
    console.log("standaard kamer")
    document.getElementById("familie_kamer").style.display = "none"
    document.getElementById("suite").style.display = "none"
    document.getElementById("gereserveerd").style.display = "block"
}

document.getElementById("mooieKnop").onclick = function () {
    console.log("familie kamer")
    document.getElementById("standaard_kamer").style.display = "none"
    document.getElementById("suite").style.display = "none"
    document.getElementById("gereserveerd").style.display = "block"

}

document.getElementById("suiteImg").onclick = function () {
    console.log("suite")
    document.getElementById("standaard_kamer").style.display = "none"
    document.getElementById("familie_kamer").style.display = "none"
    document.getElementById("gereserveerd").style.display = "block"

}

document.getElementById("annulerenBtn").onclick = function () {
    console.log("gereserveerd")
    document.getElementById("standaard_kamer").style.display = "block"
    document.getElementById("familie_kamer").style.display = "block"
    document.getElementById("suite").style.display = "block"
    document.getElementById("gereserveerd").style.display = "none"
}