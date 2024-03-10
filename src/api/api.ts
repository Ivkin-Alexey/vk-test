export function fetchQuote() {
    return fetch("https://catfact.ninja/fact")
        .then(r => r.json());
}