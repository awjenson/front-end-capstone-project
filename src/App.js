
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import ConfirmedBookingPage from './ConfirmedBookingPage';  
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBookingPage />} />
          <Route path="/order-online" element={<OrderOnlinePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
