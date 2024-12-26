import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  toggleLanguage: () => void;
  currentLanguage: string;
}

const Header = ({ toggleLanguage, currentLanguage }: HeaderProps) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text"
          >
            Gajoy
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {["about", "projects", "services"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium"
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="icon"
                className="text-xl"
              >
                {currentLanguage === "en" ? "🇺🇸" : "🇧🇷"}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ModeToggle />
            </motion.div>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            {["about", "projects", "services"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-foreground/80 hover:text-primary transition-colors px-4 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
