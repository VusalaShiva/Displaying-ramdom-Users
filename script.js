let URL = "https://randomuser.me/api/?results=6";

fetch(URL)
    .then((res) => {
        if(res.ok){
            return res.json()
        }
    })
    .then((data) => {
        let users = data.results;
        displayUsers(users);
    })
    .catch((err)=>{
        console.error("Error:", err);
    });

function displayUsers(users){
    let container = document.getElementById("user-container");
    users.forEach(user => {
        let div = document.createElement("div");
        div.classList.add("user-card");
        div.innerHTML = `
            <img src="${user.picture.medium}" alt="User Image"><br/>
            <strong>Name:</strong> ${user.name.first} ${user.name.last}<br/>
            <strong>Email:</strong> ${user.email}<br/>
            <strong>Country:</strong> ${user.location.country}
        `;
        container.appendChild(div);
    });
}