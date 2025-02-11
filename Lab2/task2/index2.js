
//^ control visitor count
var visitCount = parseInt(localStorage.getItem("visitCount")) || 0
visitCount += 1
localStorage.setItem("visitCount", visitCount)

//*....................................................



//^ get data from localstorge
function getItem(key) {
    return localStorage.getItem(key)
}

var userName = getItem("usrname")
var age = getItem("age")
var gender = getItem("gender")
var color = getItem("color")

//*....................................................


//^ show data on page
var image = (gender == "male") ? "1.jpg" : "2.jpg"
document.body.innerHTML = `
        <div style="display: flex; align-items: center;">
            <img src="${image}">
            <div>
                <p style="color: black; margin: 0;">
                    Welcome <span style="color: ${color};">${userName}</span> and your visit number is 
                    <span style="color: ${color};">${visitCount}</span>
                </p>
            </div>
        </div>`
