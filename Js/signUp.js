window.addEventListener('DOMContentLoaded', (e) => {
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

    const alertSuccess = () => {
        document.querySelector(".alertSuccess").classList.remove("hide");
        document.querySelector(".alertSuccess").classList.add("show");
        setTimeout(() => {
            document.querySelector(".alertSuccess").classList.remove("show");
            document.querySelector(".alertSuccess").classList.add("hide");
        }, 5000);
        document
            .querySelector(".alertSuccess .close-btn")
            .addEventListener("click", (e) => {
                document.querySelector(".alertSuccess").classList.remove("show");
                document.querySelector(".alertSuccess").classList.add("hide");
            });
    };

    const warningAlert = (msg) => {
        document.querySelector(".alertWarning").classList.remove("hide");
        document.querySelector(".alertWarning").classList.add("show");
        document.querySelector(".alertWarning .msg").innerHTML = msg;
        setTimeout(() => {
            document.querySelector(".alertWarning").classList.remove("show");
            document.querySelector(".alertWarning").classList.add("hide");
        }, 5000);
        document
            .querySelector(".alertWarning .close-btn")
            .addEventListener("click", (e) => {
                document.querySelector(".alertWarning").classList.remove("show");
                document.querySelector(".alertWarning").classList.add("hide");
            });
    };

    const isDuplicate = (admins, username, password) => {
        return admins.some(admin => admin.username === username && admin.password === password);
    };

    if(window.location.pathname != '/Admin.html') {
        window.localStorage.removeItem("success");
    }

    document.querySelector('.login__register a:first-child').addEventListener('click', (e) => {
        const firstName = document.querySelector('input[placeholder="Enter First Name"]').value.trim(),
            inpPas = document.querySelector('input[placeholder="Enter your Password"]').value.trim(),
            userName = document.querySelector('input[placeholder="Enter User Name"]').value.trim(),
            repeatPas = document.querySelector('input[placeholder="Repeat your password"]').value.trim();

        if (firstName && inpPas && userName && repeatPas) {
            if (inpPas === repeatPas) {
                const obj = {
                    username: userName,
                    password: inpPas
                };

                if (isDuplicate(admins, userName, inpPas)) {
                    warningAlert('This user already exists');
                    document.querySelector('input[placeholder="Enter First Name"]').value = "";
                    document.querySelector('input[placeholder="Enter your Password"]').value = "";
                    document.querySelector('input[placeholder="Enter User Name"]').value = "";
                    document.querySelector('input[placeholder="Repeat your password"]').value = "";
                    // window.location.href = "login.html";
                } else {
                    alertSuccess();
                    admins.push(obj);
                    window.localStorage.setItem('adminsKey', JSON.stringify(admins));
                    document.querySelector('input[placeholder="Enter First Name"]').value = "";
                    document.querySelector('input[placeholder="Enter your Password"]').value = "";
                    document.querySelector('input[placeholder="Enter User Name"]').value = "";
                    document.querySelector('input[placeholder="Repeat your password"]').value = "";
                    window.location.href = "login.html";
                }
            } else {
                dangerAlert('Passwords do not match');
            }
        } else {
            document.querySelector('input[placeholder="Enter First Name"]').value = "";
            document.querySelector('input[placeholder="Enter your Password"]').value = "";
            document.querySelector('input[placeholder="Enter User Name"]').value = "";
            document.querySelector('input[placeholder="Repeat your password"]').value = "";
            dangerAlert('Please fill all fields');
        }
    });
});
