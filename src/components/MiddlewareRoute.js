import { Navigate } from 'react-router-dom';
import { getToken, getRole } from '../auth';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const token = getToken();
  const role = getRole();

  if (!token) return <Navigate to="/login" />;
  if (adminOnly && role !== "admin") return <Navigate to="/blogs" />;

  return children;
}
