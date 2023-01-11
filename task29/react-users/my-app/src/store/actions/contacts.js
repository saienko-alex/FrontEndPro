export const DELETE_USER = 'DELETE_USER';
export function deleteUser(payload) {
    return { type: DELETE_USER, payload };
}


export const CREATE_TODO = 'CREATE_USER';
export function createUser(payload) {
    return { type: CREATE_USER, payload };
}