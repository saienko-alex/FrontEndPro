import { API_URL } from '../config';

export function getAlbumsList() {
    return fetch(API_URL).then(res => res.json())};