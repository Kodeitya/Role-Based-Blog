
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import Landing from './pages/Landing'; 
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/MiddlewareRoute';
import Layout from './components/Layout';

function App() {
  return (
    <>
      
    <BrowserRouter>
     
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
         
        </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute adminOnly>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
