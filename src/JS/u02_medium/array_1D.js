
function sumGrade(g) {
    sum += g;
}

let grade = [20, 43, 56, 95, 77, 100, 34];
let sum = 0;

// grade.forEach((g) => sum += g);
grade.forEach(sumGrade);

let avg = Math.round(sum / grade.length, 2);
console.log("The average grade of " + grade.toString() + " is: " + avg);

