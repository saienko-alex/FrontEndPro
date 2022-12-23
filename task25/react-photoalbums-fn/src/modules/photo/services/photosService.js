import { API_URL } from '../config';

export function getPhotoList() {
    return fetch(API_URL).then(res => res.json())};