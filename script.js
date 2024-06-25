
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    var popup = document.getElementById("popup");

    if (username === "이다은" && password === "20234340") {
        popup.style.display = "block";
        setTimeout(function() {
            popup.style.display = "none";
            window.location.href = "index1.html";}, 1500);
        return false;
    } else {
        errorMessage.textContent = "이름 또는 학번이 잘못되었습니다.";
        return false;
    }
}

