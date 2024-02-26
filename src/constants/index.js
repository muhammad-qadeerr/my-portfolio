import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fiverr,
    upwork,
    dotnet,
    bootstrape,
    django,
    github2,
    famms,
    elaxi,
    interest,
    elite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "BootStrape",
      icon: bootstrape,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Asp Dotnet Core",
      icon: dotnet,
    },
    {
      name: "git",
      icon: git,
    },  
    {
      name: "github",
      icon: github2,
    },  
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Mar 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Sara Lee",
      company: "Fiverr",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Qadeer does.",
      name: "Alix",
      company: "Fiverr",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      company: "Upwork",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Student Interest System",
      description:
        "Interactive platform designed to enhance student engagement by visually representing their interests through graphical displays. Users can input their interests, hobbies, and academic preferences, and the system generates personalized graphs and charts to showcase these interests. This helps students explore potential career paths and academic pursuits in a dynamic and engaging manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: interest,
      source_code_link: "https://github.com/muhammad-qadeerr/Student-Interest-System.git",
    },
    {
      name: "Famms | Glamour E-Store",
      description:
        "An ecommerce platform built with Asp .Net MVC that allows users to browse through a wide range of products, make purchases securely, and manage their orders and account information with ease. The platform features a user-friendly interface, robust search functionality, and seamless checkout process to enhance the overall shopping experience for customers.",
      tags: [
        {
          name: "asp .net",
          color: "blue-text-gradient",
        },
        {
          name: "mvc",
          color: "green-text-gradient",
        },
        {
          name: "mssql",
          color: "pink-text-gradient",
        },
      ],
      image: famms,
      source_code_link: "https://github.com/muhammad-qadeerr/famms-glamour-estore.git",
    },
    {
      name: "Elaxi | A Ride Hailing App",
      description:
        "Web application revolutionizes the way users access transportation services. Connecting passengers with nearby drivers with user-friendly interface for effortless ride requests. With real-time tracking and estimated fares, users can plan their journeys with confidence. With Rating system allows users to provide valuable feedback, ensuring continuous improvement and customer satisfaction.",
      tags: [
        {
          name: "asp .net",
          color: "blue-text-gradient",
        },
        {
          name: "entityframework",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
      ],
      image: elaxi,
      source_code_link: "https://github.com/muhammad-qadeerr/elaxi-a-ride-hailing-app.git",
    },
    // {
    //   name: "Student Interest System",
    //   description:
    //     "Interactive platform designed to enhance student engagement by visually representing their interests through graphical displays. Users can input their interests, hobbies, and academic preferences, and the system generates personalized graphs and charts to showcase these interests. This helps students explore potential career paths and academic pursuits in a dynamic and engaging manner.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "django",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "typescript",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: interest,
    //   source_code_link: "https://github.com/muhammad-qadeerr/Student-Interest-System.git",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };