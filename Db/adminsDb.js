let admins = [];

if (window.localStorage.getItem("adminsKey") == undefined) {
    admins = [
        {
            username: "admin",
            password: "123",
        },
    ];
} else {
    admins = JSON.parse(window.localStorage.getItem("adminsKey"));
}
