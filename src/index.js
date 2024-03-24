function displayPoem (response){
  console.log ("Poem generated");
  new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});

}


function generatePoem (event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "bb0741b0aa475cabbe3bbdftd8oa9bfa";
    let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br /> show only the poem and nothing else. Make sure to follow the user instructions. Do not include a title to the poem.";
    let prompt = `User instructions: Generate a German poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 

    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating a German poem about ${instructionsInput.value} <span class = "generating">. . .⏳</span>`;

    
    console.log("Generating poem");
    axios.get(apiURL).then(displayPoem);


}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);