import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";

const Projects = () => {
    const {t} = useTranslation();

    const projects = [
        {
            id: "project1",
            title: t("projects.project1.title"),
            description: t("projects.project1.description"),
            stack: ["React", "TailwindCSS"],
            techDetails: "React, Node.js, MongoDB, Express",
            image: "images/rood1.png",
            images: [
                "images/rood1.png",
                "images/rood1.png",
                "images/rood1.png",
            ],
            features: [
                t("projects.project1.feature1"),
            ],
        },
        {
            id: "project2",
            title: t("projects.project2.title"),
            description: t("projects.project2.description"),
            stack: ["PHP", "JavaScript", "Stripe"],
            techDetails: "PHP, JavaScript, Stripe",
            image: "images/atip1.png",
            images: [
                "images/atip1.png",
                "images/atip1.png",
                "images/atip1.png",
            ],
            features: [
                t("projects.project2.feature1"),
            ],
        },
        {
            id: "project3",
            title: t("projects.project3.title"),
            description: t("projects.project3.description"),
            stack: ["HTML", "CSS", "JavaScript"],
            techDetails: "HTML, JavaScript, CSS",
            image: "images/next1.png",
            images: [
                "images/next1.png",
                "images/next1.png",
                "images/next1.png",
            ],
            features: [
                t("projects.project3.feature1"),
            ],
        },
        {
            id: "project4",
            title: t("projects.project4.title"),
            description: t("projects.project4.description"),
            stack: ["React", "CSS", "TypeScript"],
            techDetails: "React, CSS, TypeScript",
            image: "images/food1.png",
            images: [
                "images/food2.png",
                "images/food3.png",
                "images/food3.png",
            ],
            features: [
                t("projects.project4.feature1"),
            ],
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
                        {t("projects.title")}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full"/>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                            viewport={{once: true}}
                        >
                            <Card
                                className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                                <CardHeader>
                                    <img src={project.image} alt={project.title}
                                         className="w-full h-48 object-cover rounded-t-lg mb-2"/>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors mt-10">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <CardDescription className="text-base -mt-4">
                                        {project.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-primary/10 hover:bg-primary/20"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/project/${project.id}`}
                                        state={project}
                                    >
                                        <Button variant="outline" className="w-full mt-4">
                                            {t("projects.viewDetails")}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

