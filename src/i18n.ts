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
        title: "Our Projects",
        project1: {
          title: "Road Traffic",
          description:
            "A fully-featured online store with user authentication, product management, and payment integration.",
        },
        project2: {
          title: "Listou",
          description:
            "Ditch the pen and paper once and for all when shopping. With Listou, even offline, you can guarantee your lists when purchasing.",
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
        title: "Nossos Projetos",
        project1: {
          title: "Road Traffic",
          description:
            "Landing Page of an application that brings you closer to people who can change the lives of your business",
        },
        project2: {
          title: "Listou",
          description:
            "Abandone de vez o papel e a caneta na hora de fazer compras. Com o Listou, mesmo offline, você garante suas listas na hora de comprar.",
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
