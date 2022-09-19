// 구구단

function printTimesTable(a){
    for( var i = 1 ; i <= 9 ; i++ ){
        console.log( a + " * " + i + " = " + a*i );
    }
}

for( var i = 2 ; i <= 9 ; i++ ){
    printTimesTable(i);
}

