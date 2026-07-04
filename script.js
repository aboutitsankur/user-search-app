const users = [
    {
        name: "Ankur Chaubey",
        profession: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Rahul Sharma",
        profession: "Backend Developer",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Priya Singh",
        profession: "UI/UX Designer",
        image: "https://i.pravatar.cc/150?img=8"
    },
    {
        name: "Aman Verma",
        profession: "Java Developer",
        image: "https://i.pravatar.cc/150?img=10"
    },
    {
        name: "Sneha Gupta",
        profession: "Data Analyst",
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Rohit Kumar",
        profession: "Python Developer",
        image: "https://i.pravatar.cc/150?img=15"
    },
    {
        name: "Neha Mishra",
        profession: "Software Engineer",
        image: "https://i.pravatar.cc/150?img=18"
    },
    {
        name: "Vikas Yadav",
        profession: "Cloud Engineer",
        image: "https://i.pravatar.cc/150?img=20"
    },
    {
        name: "Rohit Sharma",
        profession: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=33"
    },
    {
        name: "Priya Verma",
        profession: "UI/UX Designer",
        image: "https://i.pravatar.cc/150?img=47"
    }
];

let cards = document.createElement("div");
cards.classList.add("cards");

function showUsers(user){
    user.forEach(function(item){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        img.setAttribute("src",item.image);
        h2.textContent = item.name;
        p.textContent = item.profession;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);

        div.classList.add("card");

        cards.appendChild(div);
    })
}


showUsers(users);

document.querySelector("body").append(cards);

let inp = document.querySelector("input");

let h1 = document.createElement("h1");
h1.textContent = "No Users found";
h1.style.color = "White";
document.querySelector("body").appendChild(h1);
h1.style.display = "none";

inp.addEventListener("input", function(){

    cards.innerHTML = "";
    let result = users.filter(function(user){
        return user.name.toLowerCase().includes(inp.value.toLowerCase());
    });

    if(result.length !== 0){
        h1.style.display = "none";
        showUsers(result);
    }
    else{
        h1.style.display = "block";
    }
});



