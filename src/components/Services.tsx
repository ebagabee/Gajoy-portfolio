import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ShoppingCart,
  Layout,
  Smartphone,
  Monitor,
  HeadphonesIcon,
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: ShoppingCart,
      title: t("services.ecommerce"),
      description: t("services.ecommerceDesc"),
    },
    {
      icon: Layout,
      title: t("services.landingPages"),
      description: t("services.landingPagesDesc"),
    },
    {
      icon: Smartphone,
      title: t("services.mobileApps"),
      description: t("services.mobileAppsDesc"),
    },
    {
      icon: Monitor,
      title: t("services.desktopApps"),
      description: t("services.desktopAppsDesc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("services.support"),
      description: t("services.supportDesc"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
