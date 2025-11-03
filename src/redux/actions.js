// Tipos de acción
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action creators
export function addTask(titulo) {
  return {
    type: ADD_TASK,
    payload: { id: Date.now(), titulo, completada: false },
  };
}

export function toggleTask(id) {
  return { type: TOGGLE_TASK, payload: id };
}

export function deleteTask(id) {
  return { type: DELETE_TASK, payload: id };
}
