function checkNum(num) {
    if (num > 0) {
        return num +" is Positive";
    } else if (num < 0) {
        return num + " is Negative";
    } else {
        return num + " is Zero";
    }}

    console.log(checkNum(5));
    console.log(checkNum(-3));
    console.log(checkNum(0));
