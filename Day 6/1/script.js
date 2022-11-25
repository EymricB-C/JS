// 1 cookies + display

if (document.cookie.indexOf("input=") < 0){
    input = prompt("aimez vous bien le site ?")
    document.cookie = "input="+input+"; SameSite=None; Secure"
}

const mark = document.getElementById("ok")

let x = document.cookie.split('=')[1]

mark.innerHTML = x

