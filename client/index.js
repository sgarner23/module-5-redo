let fortuneBtn = document.querySelector(".fortune-button");
let responseBox = document.querySelector(".res-container");
let zodiacBtn = document.querySelector(".zodiac-btn");
let inputForm = document.querySelector('form');
let howIResetBtn = document.getElementById('reset-input');
let myResetMethodsBtn = document.querySelector('.my-reset-methods-btn')

/////////////Fortune get request////////////////////////

function fortuneBtnFunc(e) {
  responseBox.innerHTML = "";

  axios.get("http://localhost:4000/api/fortune").then((res) => {
    console.log(res.data);
    responseBox.textContent = res.data;
  })
  .catch(err => console.log(err))
}

fortuneBtn.addEventListener("click", fortuneBtnFunc);

///////////////Zodiac Sign////////////////////////////

zodiacBtn.addEventListener('click', () => {
  responseBox.innerHTML = "";

  axios.get('http://localhost:4000/api/zodiac').then((res) => {
    console.log(res.data)

    //I just built this for my zodiac sign specifically
    if(res.data === "Aries"){
    const zodiacImg = document.createElement('img')
    zodiacImg.src = "https://media.istockphoto.com/vectors/zodiac-sign-aries-vector-id539240628?k=20&m=539240628&s=170667a&w=0&h=k_3avZYfg5NHPawCp2YrYkEjuc5nYDDS2U-xJr7b0t8="
    zodiacImg.classList = "zodiac-img";
    responseBox.appendChild(zodiacImg)
    }

  })
  .catch(err => console.log(err))

})

////////How I like to reset ///////////

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(howIResetBtn.value)
  const { value } = howIResetBtn


  axios.post('http://localhost:4000/api/reset', { value }).then((res) => {
    console.log(res.data)
    alert(res.data)

  })
  .catch(err => console.log(err))

})

myResetMethodsBtn.addEventListener('click', () => {
  responseBox.innerHTML = "";
  
  
  axios.get('http://localhost:4000/api/my-resets').then((res) => {
    console.log(res.data);
    const resetStrategiesFromServer = res.data
    const newLine = document.createElement('br')
    
    for (let i = 0; i < resetStrategiesFromServer.length; i++){
      
      responseBox.innerHTML += '<p>' + resetStrategiesFromServer[i] + '</p>'
    }
    
  })

})






