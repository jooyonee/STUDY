var participant = ["mislav", "stanko", "mislav", "ana", "steve", "ricky"];
var completion = ["stanko", "ana", "mislav", "steve", "ricky"];

var answer = '';

participant.sort();
completion.sort();


answer = participant[participant.length -1];

for (var i = 0; i < completion.length; i++) {
    if (participant[i] != completion[i]) {
        answer = participant[i];
        break;
    }
}

console.log(answer);