import { API_URL } from '../config';

export function getContactList() {
    return fetch(API_URL).then(res => res.json());
}

export function deleteContactList (id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createContactList (newContact) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}