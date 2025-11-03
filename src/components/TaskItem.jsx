import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <input
        type="checkbox"
        checked={task.completada}
        onChange={() => dispatch(toggleTask(task.id))}
        aria-label={`Marcar ${task.titulo}`}
      />
      <span style={{ textDecoration: task.completada ? 'line-through' : 'none', flex: 1 }}>
        {task.titulo}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))} aria-label="Eliminar">
        Eliminar
      </button>
    </li>
  );
}
