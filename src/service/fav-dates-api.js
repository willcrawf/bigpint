const BASE_URL = '/api/favDates/';

export function create(favDate) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' },
        body: JSON.stringify(favDate)
    }, { mode: "cors" })
        .then(res => res.json());
}