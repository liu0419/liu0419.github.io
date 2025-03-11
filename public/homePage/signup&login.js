document.addEventListener("DOMContentLoaded", function () {
    const navPerson = document.getElementById("navPersonIcon");
    const modal = document.getElementById("authModal");
    const closeBtn = document.querySelector(".close");

    // 點擊 navPerson 顯示 Modal
    navPerson.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // 點擊關閉按鈕隱藏 Modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 點擊 Modal 外部隱藏 Modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleLink = document.getElementById("signupLink"); // "Signup" 按鈕
    const authTitle = document.querySelector(".modal-content h2"); // h2 標題
    const loginSubmit = document.querySelector('.inputBox input[type="submit"]'); // 按鈕
    const inputFields = document.querySelectorAll(".inputBox input[type='text']"); // Username & Password 欄位

    let isSignup = false; // 狀態變數，預設是 "登入" 模式

    toggleLink.addEventListener("click", function (event) {
        event.preventDefault(); // 防止頁面跳轉
        isSignup = !isSignup; // 切換狀態 (true <-> false)

        if (isSignup) {
            // 切換到註冊模式
            authTitle.textContent = "SIGN UP";
            loginSubmit.value = "Signup";
            inputFields[0].placeholder = "Enter Email";
            inputFields[1].placeholder = "Create Password";
            toggleLink.textContent = "Login"; // 變回 "Login"
        } else {
            // 切換回登入模式
            authTitle.textContent = "LOG IN";
            loginSubmit.value = "Login";
            inputFields[0].placeholder = "Username";
            inputFields[1].placeholder = "Password";
            toggleLink.textContent = "Signup"; // 變回 "Signup"
        }
    });

     // 當點擊 "Login" / "Signup" 按鈕時，顯示錯誤訊息
     loginSubmit.addEventListener("click", function (event) {
        event.preventDefault(); // 防止表單提交

        if (isSignup) {
            alert("註冊失敗！");
        } else {
            alert("登入失敗！");
        }
    });

});

