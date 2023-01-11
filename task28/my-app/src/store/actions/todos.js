export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(payload) {
    return { type: TOGGLE_TODO, payload };
}

export const CREATE_TODO = 'CREATE_TODO';
export function createTodo(payload) {
    return { type: CREATE_TODO, payload };
}