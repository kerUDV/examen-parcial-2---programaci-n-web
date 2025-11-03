import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  // Extensión 1: tareas completadas al final de la lista
  const sorted = [...tasks].sort((a, b) => Number(a.completada) - Number(b.completada));

  // Extensión 2: contador global de tareas completadas
  const completedCount = tasks.filter((t) => t.completada).length;

  return (
    <section>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <h2 style={{ margin: 0 }}>Tareas</h2>
        <div>
          Completadas: <strong>{completedCount}</strong> / {tasks.length}
        </div>
      </header>

      {sorted.length === 0 ? (
        <p style={{ color: '#666' }}>No hay tareas todavía.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sorted.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}
