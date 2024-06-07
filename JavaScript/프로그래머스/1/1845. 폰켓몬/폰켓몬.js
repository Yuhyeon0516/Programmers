function solution(nums) {
  const numsToSet = [...new Set(nums)];
  return numsToSet.length > nums.length / 2
    ? nums.length / 2
    : numsToSet.length;
}