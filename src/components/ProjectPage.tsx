import { useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const location = useLocation();
    const project = location.state;

    if (!project) {
        return <div>Project not found</div>;
    }

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
                    className="rounded-lg shadow-md"
                >
                    {project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-[400px] object-cover"
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
                        <h2 className="text-2xl font-semibold mb-4">{t("projects.description")}</h2>
                        <p className="text-lg mb-4">{project.description}</p>
                        <h3 className="text-xl font-semibold mb-2">{t("projects.features")}</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">{t("projects.techStack")}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-lg py-1 px-3">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{t("projects.techDetails")}</h3>
                        <p className="text-lg">{project.techDetails}</p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default ProjectPage;

