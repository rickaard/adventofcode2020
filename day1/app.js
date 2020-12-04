"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputs = exports.multiply = exports.findNumberThatSumTo2020 = void 0;
const fs_1 = __importDefault(require("fs"));
const fsPromises = fs_1.default.promises;
exports.findNumberThatSumTo2020 = (arr) => {
    let sumArray = [];
    let isFound = false;
    for (let firstItem of arr) {
        if (isFound)
            break;
        for (let secondItem of arr) {
            if (+firstItem + +secondItem === 2020) {
                sumArray = [+firstItem, +secondItem];
                isFound = true;
                break;
            }
        }
    }
    return sumArray;
};
exports.multiply = (arr) => {
    const num = arr[0] * arr[1];
    console.log(num);
    return num;
};
exports.getInputs = () => __awaiter(void 0, void 0, void 0, function* () {
    const inputBuffer = yield fsPromises.readFile('input.txt', 'utf8');
    const input = inputBuffer.toString().split("\n");
    const numbersThatSumTo2020 = exports.findNumberThatSumTo2020(input);
    const correctValue = exports.multiply(numbersThatSumTo2020);
    console.log(correctValue);
});
exports.getInputs();
// const myInputs = getInputs();
// console.log(myInputs); 
