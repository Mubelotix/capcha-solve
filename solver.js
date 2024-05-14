
async function check_capcha() {
    if (typeof grecaptcha !== 'undefined') {
        let response = grecaptcha.getResponse();
        if (response.length > 0) {
            console.log("Captcha solved!");
            await fetch('https://insagenda.fr/push-capcha?capcha=' + response);
            window.close();
            return;
        }
    }
    window.setTimeout(check_capcha, 1000);
}
console.log("Solver loaded");
check_capcha();

function closeTimeout() {
    window.close();
}
window.setTimeout(closeTimeout, 60000);
