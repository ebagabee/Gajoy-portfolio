import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Code2, Palette } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Joyce Kepler",
      role: t("about.joyceRole"),
      description: t("about.joyceDescription"),
      icon: Palette,
    },
    {
      name: "Gabriel Alves",
      role: t("about.gabrielRole"),
      description: t("about.gabrielDescription"),
      icon: Code2,
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 text-primary">
                    <member.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
