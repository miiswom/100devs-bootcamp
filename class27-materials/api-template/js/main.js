//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=uG0bT4ZYNhhvJR6KKIprSU6ug0gJ0lLEyIv4Anrr&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector("img").src = data.hdurl;
        document.querySelector("h3").textContent = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//https://api.nasa.gov/planetary/apod?api_key=uG0bT4ZYNhhvJR6KKIprSU6ug0gJ0lLEyIv4Anrr
