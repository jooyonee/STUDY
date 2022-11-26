
let turn = 'O';

const $table = document.createElement('table');
const $result = document.createElement('div')

const rows = [];


// 함수 : 누른 칸(target)의 위치(행,열) 찾기 + 승부판단
const check_winner = (target) => {
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    

    let hasWinner = false;

    if (
        rows[rowIndex][0].textContent == turn &&
        rows[rowIndex][1].textContent == turn &&
        rows[rowIndex][2].textContent == turn
    ) {
        hasWinner = true;
    }
    
    if (
        rows[0][cellIndex].textContent == turn &&
        rows[1][cellIndex].textContent == turn &&
        rows[2][cellIndex].textContent == turn
    ) {
        hasWinner = true;
    }
    
    if (
        rows[0][0].textContent == turn &&
        rows[1][1].textContent == turn &&
        rows[2][2].textContent == turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][2].textContent == turn &&
        rows[1][1].textContent == turn &&
        rows[2][0].textContent == turn
    ) {
        hasWinner = true;
    }
    return hasWinner;
};


//함수 : 칸 채우기
const callback = (event) => {
    if(event.target.textContent) {
        return;
    }
        event.target.textContent = turn;
        
        if (check_winner(event.target)) {
            $result.textContent = `${turn}님의 승리`;
            $table.removeEventListener('click', callback);
            return;
        }

        //무승부 검사
        let draw = true;
        rows.forEach((row) => {
            row.forEach((cell) => {
                if(!cell.textContent) {
                    draw = false;
                }
            });
        });

        if (draw) {
            $result.textContent = '무승부!';
            return;
        }
            // if (turn == 'O') {
            //     turn = 'X';
            // } else if (turn == 'X') {
            //     turn = 'O';
            // }
        turn = turn === 'X' ? 'O' : 'X';
};

// 테이블 형성
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
