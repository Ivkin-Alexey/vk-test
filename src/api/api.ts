export function fetchQuote(): Promise<string> {
    return fetch("https://catfact.ninja/fact")
        .then(r => r.json())
        .then(data => data.fact)
}

export function fetchAge(name: string): Promise<string> {
    return fetch(`https://api.agify.io/?name=${name}`)
        .then(r => r.json())
        .then(data => data.age)
        .catch(e => console.log(e));
}