var count = 0;
while (count <3) {
    var choice = parseInt(prompt("메뉴의 번호를 입력해주세요."));
    alert(choice + " 번 메뉴를 선택하셨습니다.");

    switch (choice) {
        case 1 :
            console.log("아이스 아메리카노");
            break;
        case 2 :
            console.log("카페라뗴");
            break;
        default :
            console.log("그런 메뉴는 없습니다.");
            break;        
    }
count++;
}
console.log("안녕히 가십시오.");