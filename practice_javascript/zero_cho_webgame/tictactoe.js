
let turn = 'O';

//함수 분리
const callback = (event) => {
    if(event.target.textContent) return;
        event.target.textContent = turn;
        if (turn == 'O') {
            turn = 'X';
        } else if (turn == 'X') {
            turn = 'O';
        }
};
// event.target = 이벤트 발생한 애
// event.current.target = EventListener 붙인 애


const data = [];
for (let i = 0; i < 3; i++) {
    data.push([]);
}  //테이블 형성

//table > tr > td
const $table = document.createElement('table');
const $result = document.createElement('div')

const rows = [];
for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td');

        cells.push($td);
        $tr.append($td);
    }
    rows.push(cells);
    $table.append($tr);
}

$table.addEventListener('click', callback);  

document.body.append($table);
document.body.append($result);





