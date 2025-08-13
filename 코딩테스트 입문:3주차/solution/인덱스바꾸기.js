function solution(my_string, num1, num2) {
    const my_arr = [...my_string];
    [my_arr[num1], my_arr[num2]] = [my_arr[num2], my_arr[num1]]; // 구조분해 할당
    return my_arr.join('');
}