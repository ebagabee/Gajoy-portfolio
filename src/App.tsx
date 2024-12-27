import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Services from "./components/Services";
import Footer from "./components/Footer";

// Import the custom Swiper styles
import './styles/swiper-custom.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Header
                  toggleLanguage={toggleLanguage}
                  currentLanguage={currentLanguage}
              />
              <main>
                <Routes>
                  <Route path="/" element={
                    <>
                      <About />
                      <Projects />
                      <Services />
                    </>
                  } />
                  <Route path="/project/:id" element={<ProjectPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </I18nextProvider>
  );
}

export default App;

