async function run() {
    // fetch localhost:8088/queue-empty
    // result body is a bool
    try {
        // if window has focus
        if (document.hasFocus()) {
            let result = await fetch('https://insagenda.fr/queue-empty');
            let body = await result.text();
            console.log("Queue empty: " + body);
            if (body == 'false') {
                window.open('https://app.insaplace.me/login/email', '_blank');
                window.setTimeout(run, 10000);
            } else {
                window.setTimeout(run, 500);
            }
        } else {
            window.setTimeout(run, 100);
        }
    } catch (e) {
        console.error(e);
        window.setTimeout(run, 1000);
    }
}
run();
