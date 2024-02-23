// findShortestOfThreeWords
// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.
// 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.


let word1 = 'apple pie';
let word2 = 'two men';
let word3 = 'three';

function findShortestOfThreeWords(word1, word2, word3) {

    let w1Length = word1.length;
    let w2Length = word2.length;
    let w3Length = word3.length;
    let minLengthWord;

    // 문자열 길이가 같은 경우
    if(w1Length === w2Length === w3Length) {
        minLengrhWord = word1;
    } else if (w1Length === w2Length && w2Length < w3Length) {
        minLengthWord = word1;
    } else if (w1Length === w3Length && w1Length < w2Length) {
        minLengthWord = word1;
    } else if (w2Length === w3Length && w2Length < w1Length) {
        minLengthWord = word2;
    } 
    // 문자열 길이가 서로 다른 경우
      else if (w1Length < w2Length && w1Length < w3Length) {
        minLengthWord = word1;
    } else if (w2Length < w1Length && w2Length < w3Length) {
        minLengthWord = word2;
    } else if (w3Length < w1Length && w3Length < w2Length) {
        minLengthWord = word3;
    }
    console.log(minLengthWord);
}

findShortestOfThreeWords(word1, word2, word3);
