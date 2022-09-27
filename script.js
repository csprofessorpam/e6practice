//alert("connected");

import {data} from './data.js';
//console.log(data);


document.getElementById("show-btn").addEventListener('click', showAll);
function showAll(){
    //console.log("click");
    showUsers(data);
}

document.getElementById("search-btn").addEventListener('click', searchUsers);
function searchUsers(){
    console.log("search");
    //get country from textbox
    let country = document.getElementById('country').value ;
    console.log(country);
    //filter the array
    const newusers = data.filter(item=>{ return item.country === country });
    console.log(newusers);
    showUsers(newusers);
}

const container = document.querySelector(".container");

//make function to display array data on page
const showUsers = (users)=>{
    //clear the container first
    container.innerHTML = "";
    //use map to iterate through the array
    users.map(item=>{
    console.log(item.username);
    console.log(item.description);

    //create a div for each user
    let persondiv = document.createElement("div");
    //add the data
    //persondiv.textContent = item.username;
    //to style must add a class
    persondiv.classList.add('person-card');
    //persondiv.setAttribute('class', 'person-card');
    //add the div to the container
    container.appendChild(persondiv);

    //now put data in the persondiv
    let image = document.createElement('img');
    //console.log(item.imageUrL);
    image.setAttribute('src', item.imageUrl);
    image.classList.add('user-img');
    persondiv.appendChild(image);

    let username = document.createElement('h2');
    username.innerText = item.username;
    persondiv.appendChild(username);

    //add country
    let country = document.createElement('p');
    country.textContent = item.country;
    persondiv.appendChild(country);

    //add description
    let desc = document.createElement('p');
    desc.textContent = item.description;
    persondiv.appendChild(desc);
 
    })
}

/*
//use map to iterate through the array
data.map(item=>{
    console.log(item.username);

    //create a div for each user
    let persondiv = document.createElement("div");
    //add the data
    //persondiv.textContent = item.username;
    //to style must add a class
    persondiv.classList.add('person-card');
    //persondiv.setAttribute('class', 'person-card');
    //add the div to the container
    container.appendChild(persondiv);

    let username = document.createElement('h2');
    username.innerText = item.username;
    persondiv.appendChild(username);

    //add country
    let country = document.createElement('p');
    country.textContent = item.country;
    persondiv.appendChild(country);

    
});
*/
