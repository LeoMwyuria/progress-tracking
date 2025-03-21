import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import TasksPage from './pages/TasksPage/TasksPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';
import TaskDetailsPage from './pages/TaskDetailsPage/TaskDetailsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <main className="content">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/create" element={<CreateTaskPage />} />
            <Route path="/tasks/:taskId" element={<TaskDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
