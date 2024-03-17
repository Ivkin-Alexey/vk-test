import {ICash} from "../types/types";

export function memoize(fn: (name: string, ) => Promise<string>) {
    let cache: ICash | any = {};

    return async (...args: string[]): Promise<string> => {
        let n: string = args[0];
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = await fn(n);
            cache[n] = result;
            return result;
        }
    }
};

export function validate(name: string) {
    const result = {isValid: true, msg: ""};
    if(name === "") {
        result.isValid = false;
        result.msg = "Введите значение";
    } else if (name.replace(/[a-z]/gi, "") !== "") {
        result.isValid = false;
        result.msg = "Допустима только латиница";
    }
    return result;
}