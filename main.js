function pow(num, degree) {
    return (degree == 1) ? num : num * pow(num, degree - 1)
}

let userNum = Number(prompt('Write a number:'));
let userDegree = Number(prompt('Write a degree:'));

document.write(pow(userNum, userDegree));