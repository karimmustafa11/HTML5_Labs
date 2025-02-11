onload = function () {
    function setItem(key, value) {
        localStorage.setItem(key, value)
    }


    var register = document.getElementById("register")
    register.onclick = function () {
        var Name = document.getElementById("username").value
        var Age = document.getElementById("age").value
        var Gender = document.querySelector('input[name="gender"]:checked')?.value
        var Color = document.getElementById("color").value

        if (Name && Age && Gender && Color) {
            setItem("usrname", Name)
            setItem("age", Age)
            setItem("gender", Gender)
            setItem("color", Color)
            window.location.href = "index2.htm"
        }
    }
}
