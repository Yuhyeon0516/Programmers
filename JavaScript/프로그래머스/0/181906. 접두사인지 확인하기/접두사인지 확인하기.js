function solution(my_string, is_prefix) {
    for (let i =0; i < my_string.length; i++) {
        if(my_string.slice(0,i) === is_prefix) {
            return 1;
        }
    }
    return 0;
}