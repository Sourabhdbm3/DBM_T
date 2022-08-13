import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Attendance from './Components/Attendance';
import Help from './Components/Help';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            {/* ------------------------------- Using loop proccess--------------------------- */}
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
