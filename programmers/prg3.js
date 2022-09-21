// 폰켓몬

function solution(nums){
    const answer = '';
    const len = nums.length;
    const type_count = [...new Set(nums)];

    if (len / 2 <= type_count) {
        answer = len / 2;
    }
    if (len / 2 > type_count) {
        answer = type_count;
    }
    return answer;
}