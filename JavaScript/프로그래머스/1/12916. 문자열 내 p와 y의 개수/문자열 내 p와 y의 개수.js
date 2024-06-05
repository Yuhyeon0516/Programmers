function solution(s){
    const lowerS = [...s.toLowerCase()];

    return lowerS.filter((value) => value === "p").length === lowerS.filter((value) => value === "y").length;
}