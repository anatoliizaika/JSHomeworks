function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomSymbol = Math.floor(Math.random() * chars.length);
        password += chars[randomSymbol];
    }
    return password;
}

console.log(generatePassword(8));