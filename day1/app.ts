import fs from 'fs';
const fsPromises = fs.promises;

export const findNumberThatSumTo2020 = (arr: string[]) => {
    let sumArray: number[] = [];
    let isFound = false;

    for (let firstItem of arr) {
        if (isFound) break;
        
        for (let secondItem of arr) {
            if (+firstItem + +secondItem === 2020) {
                sumArray = [+firstItem, +secondItem];
                isFound = true;
                break;
            }
        }
    }
    return sumArray;
}

export const multiply = (arr: number[]) => {
    const num = arr[0] * arr[1];
    console.log(num);
    return num;
}


export const getInputs = async () => {
    const inputBuffer = await fsPromises.readFile('input.txt', 'utf8');
    const input = inputBuffer.toString().split("\n");
    
    const numbersThatSumTo2020 = findNumberThatSumTo2020(input);
    const correctValue = multiply(numbersThatSumTo2020);
    console.log(correctValue);
    return correctValue;
}

getInputs()