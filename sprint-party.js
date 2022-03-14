



let startButton = null;

const confettiNum = 20;
const confettiColors = [
    "#7FFFD4",
    "#8A2BE2",
    "#ADFF2F",
    "#FF69B4"
];

// Callback function to execute when mutations are observed
const portalCallback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.removedNodes.length > 0 && mutation.removedNodes[0].className == "atlaskit-portal") {
            startButton = null;
            console.log("start button removed!");
        }
        else if (mutation.type === 'attributes' && startButton == null) {
                startButton = Array.from(document.getElementsByClassName("css-19r5em7")).filter(e=> e.innerHTML=="Start")[0];
                if (startButton) {
                   startButton.addEventListener("click", partyAnimation);
                }


        }
    }
};


const addConfetti = (x, y) => {
    let angle = Math.floor(Math.random() * 360);
    let confetti = document.createElement("div");
    confetti.className = "confetti-particle";
    let color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.backgroundColor = color;
    confetti.style.width = "20px";
    confetti.style.height = "20px";
    confetti.style.position = "absolute";
    confetti.style.top = y + "px";
    confetti.style.left = x + "px";
    confetti.style.zIndex = "10000";
    confetti.animate([
        { // from
          transform: 'rotate(' + angle + 'deg) translateX(0px)',
          opacity: 1
        },
        { // to
          transform:  'rotate(' + angle + 'deg) translateX(300px)',
          opacity: 0
        }
      ], {
          duration: 2000,
          fill: "forwards"
      });
    document.body.appendChild(confetti);

}


const partyAnimation = (event) => {
    console.log("Let's Party!");
    console.log(event);
    for (let i = 0; i < confettiNum; i++){
        addConfetti(event.x, event.y);
    }
}


window.addEventListener('load', (event) => {
    console.log("Ready to party!");
    // Begin listening
    var portalContainer = document.getElementsByClassName("atlaskit-portal-container")[0];
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(portalCallback);
    observer.observe(portalContainer, config);

});

