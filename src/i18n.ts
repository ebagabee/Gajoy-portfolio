import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        services: "Services",
      },
      about: {
        title: "About Us",
        joyceRole: "UI/UX Designer and Frontend Developer",
        joyceDescription:
            "Joyce is a talented designer and developer with a passion for creating beautiful and intuitive user interfaces.",
        gabrielRole: "Full Stack Developer",
        gabrielDescription:
            "Gabriel is an experienced developer with expertise in web and mobile technologies, specializing in TypeScript.",
      },
      projects: {
        viewDetails: "See more details",
        title: "Our Projects",
        gallery: "Project Gallery",
        description: "Project Description",
        features: "Key Features",
        techStack: "Technology Stack",
        techDetails: "Technical Details",
        project1: {
          title: "Rood Traffic",
          description: "Landing page for an application that connects you with people who can change your business's life",
          feature1: "User-friendly interface",
        },
        project2: {
          title: "Atip Canada",
          description: "Platform that helps you with your denied visa for Canada",
          feature1: "You can submit your denied Canadian visa and receive support to succeed",
        },
        project3: {
          title: "Next Ambient",
          description: "Helping the environment will always be the best option.",
          feature1: "Pioneering and Excellence in Environmental Solutions",
        },
        project4: {
          title: "Food Jp",
          description: "Landing page for a Japanese restaurant. Simplicity and modern design.",
          feature1: "Focus on simplicity and call-to-action for new users to discover a good Japanese restaurant",
        },
      },
      services: {
        title: "Our Services",
        ecommerce: "E-commerce Solutions",
        ecommerceDesc: "Custom online stores tailored to your business needs.",
        landingPages: "Landing Pages",
        landingPagesDesc:
            "High-converting landing pages designed to boost your conversions.",
        mobileApps: "Mobile Applications",
        mobileAppsDesc: "Cross-platform mobile apps for iOS and Android.",
        desktopApps: "Desktop Applications",
        desktopAppsDesc:
            "Powerful desktop applications for Windows, macOS, and Linux.",
        support: "Free 2-Month Support",
        supportDesc:
            "We provide 2 months of free support after project completion.",
      },
      footer: {
        rights: "© 2023 Gajoy. All rights reserved.",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        projects: "Projetos",
        services: "Serviços",
      },
      about: {
        title: "Sobre Nós",
        joyceRole: "Designer de UI/UX e Desenvolvedora Frontend",
        joyceDescription:
            "Joyce é uma talentosa designer e desenvolvedora com paixão por criar interfaces de usuário bonitas e intuitivas.",
        gabrielRole: "Desenvolvedor Full Stack",
        gabrielDescription:
            "Gabriel é um desenvolvedor experiente com expertise em tecnologias web e mobile, especializado em TypeScript.",
      },
      projects: {
        viewDetails: "Ver mais sobre o projeto",
        title: "Nossos Projetos",
        gallery: "Galeria do Projeto",
        description: "Descrição do Projeto",
        features: "Principais Características",
        techStack: "Stack de Tecnologia",
        techDetails: "Detalhes Técnicos",
        project1: {
          title: "Rood Traffic",
          description: "Landing Page de um aplicativo que aproxima você de pessoas que podem mudar a vida do seu negócio",
          feature1: "Interface amigável",
        },
        project2: {
          title: "Atip Canadá",
          description: "Plataforma que te ajuda com seu visto negado para o Canadá",
          feature1: "Você pode enviar seu visto negado para o Canadá e receberá apoio para conseguir",
        },
        project3: {
          title: "Next Ambient",
          description: "Ajudar o ambiente sempre será a melhor opção.",
          feature1: "Pioneirismo e Excelência em Soluções Ambientais",
        },
        project4: {
          title: "Food Jp",
          description: "Landing Page de um restaurante japonês. Simplificade e design moderno.",
          feature1: "Foco em simplicidade e chamada para novos usuários conhecerem um bom restaurante japonês",
        },
      },
      services: {
        title: "Nossos Serviços",
        ecommerce: "Soluções de E-commerce",
        ecommerceDesc:
            "Lojas online personalizadas de acordo com as necessidades do seu negócio.",
        landingPages: "Landing Pages",
        landingPagesDesc:
            "Landing pages de alta conversão projetadas para aumentar suas conversões.",
        mobileApps: "Aplicativos Móveis",
        mobileAppsDesc:
            "Aplicativos móveis multiplataforma para iOS e Android.",
        desktopApps: "Aplicativos Desktop",
        desktopAppsDesc:
            "Aplicativos desktop poderosos para Windows, macOS e Linux.",
        support: "Suporte Gratuito por 2 Meses",
        supportDesc:
            "Fornecemos 2 meses de suporte gratuito após a conclusão do projeto.",
      },
      footer: {
        rights: "© 2024 Gajoy. Todos os direitos reservados.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

