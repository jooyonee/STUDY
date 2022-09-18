let rate = 1113.5;
function printRate() {
    setTimeout(() => console.log('현재 미달러 환율은 ${rate}원 입니다.', 1000));

}

printRate();

rate = 100;
printRate();
