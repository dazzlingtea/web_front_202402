// convertScoreToGradeWithPlusAndMinus
// - 각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
// - 90 이상 --> 'A'
// - 80 이상 --> 'B'
// - 70 이상 --> 'C'
// - 60 이상 --> 'D'
// - 60 미만 --> 'F'
let score = 67;
let grade;

function convertScoreToGradeWithPlusAndMinus(score) {

    // 구간별 평점 계산
    if (score < 0 || score > 100) {
 
    } else if(score >= 90) {
        grade = 'A';
    } else if(score >= 80) {
        grade = 'B';
    } else if(score >= 70) {
        grade = 'C';
    } else if(score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    // console.log(`점수: ${score}, 평점: ${grade}`);
}
function convertScoreToGradePlMi(score) {
        // +, - 계산
        if (score < 0 || score > 100) {        
        } else if (score === 100) {
            grade = grade + '+';
        } else if (score <= 59) {    
        } else if (score % 10 >= 8) {
            grade = grade + '+';
        } else {
            grade = grade + '-';      
        }
}
function printGrade(score, grade) {
    if(score < 0 || score > 100) {
        console.log('INVALID SCORE');
    } else {
        console.log(`점수: ${score}, 평점: ${grade}`);
    }
}
convertScoreToGradeWithPlusAndMinus(score);
convertScoreToGradePlMi(score);
printGrade(score, grade);