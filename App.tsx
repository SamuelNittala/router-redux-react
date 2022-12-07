import * as React from 'react';
import './style.css';
import { fetchUser } from './api';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Users } from './components/Users';
import HomeLayout from './Home';
import User from './components/User';
import UsersList from './components/UsersList';
export default function App() {
  return <AppRoutes />;
}
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="users" element={<Users />}>
          <Route index element={<UsersList />} />
        </Route>
      </Routes>
    </Router>
  );
}
