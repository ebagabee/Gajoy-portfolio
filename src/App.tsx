import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";

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
        <div className="min-h-screen bg-background text-foreground">
          <Header
            toggleLanguage={toggleLanguage}
            currentLanguage={currentLanguage}
          />
          <main>
            <About />
            <Projects />
            <Services />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
