import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/gajoytech",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/gajoy-tech",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:gajoycontato@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text mb-2">
              Gajoy
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.rights")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
