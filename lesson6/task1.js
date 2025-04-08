function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}

handleNum(2, handleEven, handleOdd); 
handleNum(9, handleEven, handleOdd); 