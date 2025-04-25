const calculator = {
    lastResult: null,
    operationsCount: 0,

    add(a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return this.lastResult;
    },

    subtract(a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        return this.lastResult;
    },

    multiply(a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        return this.lastResult;
    },

    divide(a, b) {
        if (b === 0) {
            return "Помилка: ділення на нуль";
        }
        this.lastResult = a / b;
        this.operationsCount++;
        return this.lastResult;
    },

    reset() {
        this.lastResult = null;
        this.operationsCount = 0;
    }
};

console.log("Add:", calculator.add(7, 8));       
console.log("Multiply:", calculator.multiply(2, 4)); 
console.log("Divide:", calculator.divide(167, 2));    
console.log("Last Result:", calculator.lastResult);  
console.log("Operations Count:", calculator.operationsCount);

calculator.reset();
console.log("After reset:", "Last Result =", calculator.lastResult, ", Operations Count =", calculator.operationsCount);