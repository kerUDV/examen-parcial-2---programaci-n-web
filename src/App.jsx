import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <Provider store={store}>
      <main style={{ maxWidth: 520, margin: '40px auto', padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
        <h1 style={{ marginTop: 0 }}>TaskBoard</h1>
        <TaskForm />
        <TaskList />
      </main>
    </Provider>
  );
}
