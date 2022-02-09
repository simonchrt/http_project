
const list = document.querySelector("#results");
const inputMovie = document.getElementById("search-input");
const form = document.getElementById('search-form');

const formLogin = document.querySelector("#form")


const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"email": emailValue, "password": passwordValue})
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })

}


formLogin.addEventListener("submit", signUp)


const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const movieTag = `<li class="list-inline-item">
          <img src="${movie.Poster}" alt="">
          <p>${movie.Title}</p>
        </li>`
        list.insertAdjacentHTML("beforeend", movieTag)
      })
    })
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  list.innerHTML = "";
  searchMovies(inputMovie.value);
})


