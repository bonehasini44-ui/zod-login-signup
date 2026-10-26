function pattern (str){
let str = "abcd";
if (!str) {
        return "String is not there";

        }
        let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
         for (let j = 0; i <str.length; j++) {
        result += str[j].toLowerCase().repeat(i);
    }
}    

    return result;
}

console.log(pattern("abcd"));
