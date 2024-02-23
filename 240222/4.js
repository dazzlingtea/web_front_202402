//convertScoreToGrade
// - (100 - 90) --> 'A'
// - (89 - 80) --> 'B'
// - (79 - 70) --> 'C'
// - (69 - 60) --> 'D'
// - (59 - 0) --> 'F'
let score = 0

  function convertScoreToGrade(score) {
    if (score < 0 || score > 100) {
        console.log('INVALID SCORE');
    } else if(score >= 90) {
        console.log('A');
    } else if(score >= 80) {
        console.log('B');
    } else if(score >= 70) {
        console.log('C');
    } else if(score >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
}

convertScoreToGrade(score);