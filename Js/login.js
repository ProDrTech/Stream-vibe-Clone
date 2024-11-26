window.addEventListener("DOMContentLoaded", (e) => {
    let username = [],
        password = [];

    admins.forEach((item) => {
        username.push(item.username);
        password.push(item.password);
    });

    const dangerAlert = (msg) => {
        document.querySelector(".alert").classList.remove("hide");
        document.querySelector(".alert").classList.add("show");
        document.querySelector(".alert .msg").innerHTML = msg;
        setTimeout(() => {
            document.querySelector(".alert").classList.remove("show");
            document.querySelector(".alert").classList.add("hide");
        }, 5000);
        document
            .querySelector(".alert .close-btn")
            .addEventListener("click", (e) => {
                document.querySelector(".alert").classList.remove("show");
                document.querySelector(".alert").classList.add("hide");
            });
    };

    const successAlert = () => {
        document.querySelector(".alertSuccess").classList.remove("hide");
        document.querySelector(".alertSuccess").classList.add("show");
        setTimeout(() => {
            document.querySelector(".alertSuccess").classList.remove("show");
            document.querySelector(".alertSuccess").classList.add("hide");
        }, 5000);
        document
            .querySelector(".alertSuccess .close-btn")
            .addEventListener("click", (e) => {
                document
                    .querySelector(".alertSuccess")
                    .classList.remove("show");
                document.querySelector(".alertSuccess").classList.add("hide");
            });
    };

    if(window.location.pathname != '/Admin.html') {
        window.localStorage.removeItem("success");
    }

    document
        .querySelector(".login__register a:first-child")
        .addEventListener("click", (e) => {
            const inpUser = document
                    .querySelector('input[type="text"')
                    .value.trim(),
                inpPas = document
                    .querySelector('input[type="password"]')
                    .value.trim();

            if (inpUser && inpPas) {
                if (username.includes(inpUser) && password.includes(inpPas)) {
                    successAlert();
                    window.localStorage.setItem('success', 200)
                    window.location.href = "Admin.html";
                    document.querySelector('input[type="text"]').value = "";
                    document.querySelector('input[type="password"]').value = "";
                } else {
                    document.querySelector('input[type="text"]').value = "";
                    document.querySelector('input[type="password"]').value = "";
                    dangerAlert('Information not specified');
                }
            } else {
                dangerAlert('Fill in the fields.');
                document.querySelector('input[type="text"]').value = "";
                document.querySelector('input[type="password"]').value = "";
            }
        });
});
