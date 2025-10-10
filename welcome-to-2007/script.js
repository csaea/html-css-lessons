document.addEventListener("DOMContentLoaded", function() {

    //getItem scans index.html for the id visitCount
    let visits = localStorage.getItem("visitCount");

    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem("visitCount", visits);

    const visitDisplay = document.getElementById("visitCount");
    if (visitDisplay) {
        visitDisplay.textContent = visits;
    }
});
