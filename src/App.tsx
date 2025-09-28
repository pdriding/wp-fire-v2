// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="wpfire-app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* Catch-all to avoid blanks */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* Developer Bar */}
      <div className="bg-red-600 w-full h-20 flex items-center justify-center">
        <p className="text-white text-base text-sm">© 2025 Dennis Devs</p>
      </div>
    </div>
  );
}
