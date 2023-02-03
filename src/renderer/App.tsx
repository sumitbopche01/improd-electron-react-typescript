import Theory from 'components/Theory/Theory';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return <div>Hello World!</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Theory />} />
        <Route path="/theory" element={<Theory />} />
      </Routes>
    </Router>
  );
}
