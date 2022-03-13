

let startButton = null;


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
                   startButton.addEventListener("mouseover", (e)=>{console.log("Let's get this party started")});
                }


        }
    }
};

window.addEventListener('load', (event) => {
    console.log("Ready to party!");
    // Begin listening
    var portalContainer = document.getElementsByClassName("atlaskit-portal-container")[0];
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(portalCallback);
    observer.observe(portalContainer, config);
});
