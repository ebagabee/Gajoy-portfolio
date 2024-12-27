import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// @ts-expect-error - Module declaration issue
import "swiper/css";
// @ts-expect-error - Module declaration issue
import "swiper/css/navigation";
// @ts-expect-error - Module declaration issue
import "swiper/css/pagination";

// Define an interface for the project structure
interface Project {
  title: string;
  images: string[];
  description: string;
  features: string[];
  stack: string[];
  techDetails: string;
}

const ProjectPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const project = location.state as Project;

  if (!project) {
    return <div>Project not found</div>;
  }

  const getImagePath = (imagePath: string) => {
    if (imagePath.startsWith("/")) {
      return imagePath;
    }
    return `/${imagePath}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {project.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">{t("projects.gallery")}</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg shadow-md max-w-3xl mx-auto"
        >
          {project.images.map((image: string, index: number) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={getImagePath(image)}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {t("projects.description")}
            </h2>
            <p className="text-lg mb-4">{project.description}</p>
            <h3 className="text-xl font-semibold mb-2">
              {t("projects.features")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {t("projects.techStack")}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-lg py-1 px-3"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t("projects.techDetails")}
            </h3>
            <p className="text-lg">{project.techDetails}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
