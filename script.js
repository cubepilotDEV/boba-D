document.getElementById('moreInfoBtn').addEventListener('click', function() {
    var moreInfoText = document.getElementById('moreInfoText');
    if (moreInfoText.style.display === "none") {
        moreInfoText.style.display = "block";
    } else {
        moreInfoText.style.display = "none";
    }
});
