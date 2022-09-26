 //Getting the button and input element from HTML using their class and/or ID names.

const btn = document.querySelector('.button');
const input = document.querySelector('#location');

// Adding event listner to my button so that it detects when a user clicks the button then calls the function displayData.

btn.addEventListener("click", displayData);

// Adding another event listner to my input box so that it detects when the user releases the Enter Key after pressing it on their keyboard then calls the function displayData.

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        displayData();
    }
});

//The function to fetch data from the API and populate the output field dynamically. The function will reqire the location as a parameter.

function fetchData(location){

    //Calling the fetch function with my API URL from the documentation. The location will depend on what the user types and use that as a query or "q" from the query string.

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=6becbc88a2a4222cbf067e0fcb5c9b9c")
    .then((res) => res.json()) //Converting the API response data from JSON to what JavaScript can read.
    .then((data) => { //We get the data back, now we can use it hoever we want.

        //Because the data returned was actually an object, here we are setting variables using ES6 desutructuring.

        let { name } = data;
        let { description } = data.weather[0];
        let { temp } = data.main;

        //The output variable is firstly declared and assigned an H2 tag with the variable "name", then we add onto that variable using a template string since it keeps code cleaner and it's easy to use. Here both methods were used to demonstrate the flexibility and usability of each method. 

       let output = "<h2>" + name + "</h2><br>";
       output += `
        <div>
            <p>Location: ${name}</p><br>
            <p>Temperature: ${temp}°C</p><br>
            <p>Description: ${description}</p><br>
        </div>
       `;

       //Finally we assign the results to our HTML output element's innerHTML

       document.querySelector(".output").innerHTML = output;
    })
}

//The function displayData is the one being called by the event handlers. What it does is, it collects the value of the location from the input box then it calls the fetchData function, assigns the value from the user as a parameter (since it's required). 

function displayData() {
    let location = document.querySelector("#location").value;
    fetchData(location);
}













// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const user = JSON.parse(xhr.responseText);

//         console.log(user);
//     }
// };

// xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&units=metric&appid=6becbc88a2a4222cbf067e0fcb5c9b9c", true);
// xhr.send();



// fetch("https://api.openweathermap.org/data/2.5/weather?q=Pretoria&units=metric&appid=6becbc88a2a4222cbf067e0fcb5c9b9c")
// .then((res) => res.json)
// .then((data) => console.log(data));

// $.ajax({
//     type: 'GET',
//     url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&units=metric&appid=6becbc88a2a4222cbf067e0fcb5c9b9c",
//     success: function(data){
//         console.log(data);
//     }
// })