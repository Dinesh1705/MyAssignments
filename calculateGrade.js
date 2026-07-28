function calculateGrade(score) {
    let studentScore = score;

    switch (true) {
        case (studentScore >= 90 && studentScore <= 100):
            return ' Grade A'; 
            break;
        case (studentScore >= 80 && studentScore < 90):
            return ' Grade B';     
            break;
        case (studentScore >= 70 && studentScore < 80):
            return ' Grade C';     
            break;
        case (studentScore >= 60 && studentScore < 70):
            return ' Grade D';
            break;
        case (studentScore >= 0 && studentScore < 60):
            return ' Grade F';
            break;
        default:
            return 'Invalid score';

}}
console.log(calculateGrade(85));
