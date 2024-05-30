function solution(myString, pat) {
    var replaceString = "";
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "A") {
            replaceString += "B";
        } else {
            replaceString += "A";
        }
    }
    return replaceString.includes(pat) ? 1 : 0;
}