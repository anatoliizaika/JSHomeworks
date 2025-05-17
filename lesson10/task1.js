function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve({message,delay});
        }, delay);
    });
}


delayedLog("Привіт, світ!", 1500).then(({ delay }) => {
    console.log(`Повідомлення виведено через ${delay} мілісекунд.`);
});