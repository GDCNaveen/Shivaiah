
import { useState, useEffect } from 'react';
import { LoginPage } from '../components/LoginPage';
import { MainApp } from '../components/MainApp';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const loginData = localStorage.getItem('algot_academy_login');
    if (loginData) {
      const { timestamp, expiryDate } = JSON.parse(loginData);
      const now = new Date();
      const expiry = new Date('2025-06-30T08:00:00');
      
      if (now < expiry) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('algot_academy_login');
      }
    }
    setIsLoading(false);
  }, []);

  // Check expiry every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const expiry = new Date('2025-06-30T08:00:00');
      
      if (now >= expiry) {
        localStorage.removeItem('algot_academy_login');
        setIsAuthenticated(false);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? (
    <MainApp onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <LoginPage onLogin={() => setIsAuthenticated(true)} />
  );
};

export default Index;
