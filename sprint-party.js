
console.log("I'm here");


window.addEventListener('load', (event) => {
    console.log("I'm there");
    var sprintButton = Array.from(document.getElementsByClassName("css-19r5em7")).filter(e=> e.innerHTML=="Start sprint")[0];
    console.log(sprintButton);
    sprintButton.addEventListener("mouseover", handleSprintButtonClick);
});


function handleSprintButtonClick(){
    console.log("Hello World");
}

