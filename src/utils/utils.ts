import {ICash} from "../types/types";

export function memoize(fn: (name: string) => Promise<string>) {
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