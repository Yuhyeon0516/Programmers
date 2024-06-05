function solution(my_string) {
  const regex = new RegExp("[a|e|i|o|u]", "g");

  return my_string.replaceAll(regex, "");
}