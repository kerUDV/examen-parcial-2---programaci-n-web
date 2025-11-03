import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const titulo = form.titulo.value.trim();
    if (!titulo) return;
    dispatch(addTask(titulo));
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input name="titulo" placeholder="Nueva tarea" aria-label="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
}
