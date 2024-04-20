if (document.readyState !== "loading") {
    loadedCode("visible");
} else {
    
    document.addEventListener("DOMContentLoaded", function () {
        loadedCode("visible");
    });
}

function loadedCode(state) {
    console.log(state)
    var floatDiv = document.getElementById("floatIn");
    floatDiv.classList.add(state);
}
