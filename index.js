function userDetails(age, apiEndpoint){
    console.log("user age:",age);
    console.log("api endpoint:", apiEndpoint);
}
userDetails(22, "/api/user");

function convert(str) {
    if (!str) {
        return "String is not there";
    }

    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i].toUpperCase();
        result += str[i].toLowerCase().repeat(str.length - 1 - i);
    }

    return result;
}

// Input
let str = "abcd";

// Output
console.log(convert(str));
Output
text
DdddCccBbA
If the input is empty:

javascript
let str = "";
console.log(convert(str));
Output:

text
String is not there

ChatGPT is AI and can make mistakes.

