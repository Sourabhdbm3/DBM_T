import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Attendance from './Components/Attendance';

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
            </Route>
            {/* ------------------------------- Using loop proccess--------------------------- */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
