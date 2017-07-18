// 1. First, find our UL Container
let ul = document.querySelector("ul");


// 2. Create our Ajax Request

const promise = fetch("http://swapi.co/api/people/")
.then(response => response.json())
.then(data => {
  for (var i = 0; i < data.results.length; i++) {
     let character = data.results[i].name;

     let li = document.createElement("li");

     li.textContent = character;
     ul.appendChild(li)

      // *******BIRTH**********
    let birth = data.results[i].birth_year

    let type = document.createElement("p")
    type.textContent =`This character was born in ${birth}`;
    li.appendChild(type);

  }

})
