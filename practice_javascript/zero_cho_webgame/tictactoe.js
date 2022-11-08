
let turn = 'O';

const data = [];
for (let i = 0; i < 3; i++) {
    data.push([]);
}  //테이블 형성

//table > tr > td
const { body, createElement } = document;
const $table = document.createElement('table');
const $result = document.createElement('div')

const rows = [];
for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td');

        $td.addEventListener('click', (event) => {

            if(event.target.textContent) return;
            event.target.textContent = turn;
            if (turn == 'O') {
                turn = 'X';
            } else if (turn == 'X') {
                turn = 'O';
            }

        });
        cells.push($td);
        $tr.append($td);
    }
    rows.push(cells);
    $table.append($tr);
}
document.body.append($table);
document.body.append($result);

console.log(rows);




