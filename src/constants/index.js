import {
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    git,
    upwork,
    dotnet,
    django,
    github2,
    famms,
    elaxi,
    interest,
    angular,
    azure,
    sqlserver,
    amaze
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
  
  const technologies = [
    {
      name: "Asp Dotnet Core",
      icon: dotnet,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "sql-server",
      icon: sqlserver,
    },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "Django",
      icon: django,
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
      title: "Software Engineer",
      company_name: "Amaze Health",
      icon: amaze,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
        "I am currently working at Amaze Health, a leading healthcare service provider in the USA. In my role, I specialize in developing and maintaining full stack applications using .NET technologies and developing and maintaining APIs with expertise in AngularJs for frontend and SQL for managing data. My work primarily involves building scalable, secure, and efficient solutions, fixing bugs and adding new features to enhance the performance of the applications.",
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
      name: "Dave",
      company: "Upwork",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Qadeer does.",
      name: "Nabeel",
      company: "Amaze",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Taylo H.",
      company: "Upwork",
    },
    {
      testimonial:
        "He delivered a complex feature set ahead of schedule and communicated clearly throughout.",
      name: "Sarah P.",
      company: "Product Manager",
    },
    {
      testimonial:
        "We migrated to a modern React + .NET stack with zero downtime. Highly recommend.",
      name: "Ahmed R.",
      company: "CTO, Fintech Startup",
    },
    {
      testimonial:
        "Clean code, reliable delivery, and a strong sense of UX—great partner for long‑term work.",
      name: "Julia V.",
      company: "Agency Owner",
    },
  ];
  
  const projects = [
    {
      slug: "student-interest-system",
      name: "Student Interest System",
      description:
        "Interactive platform designed to enhance student engagement by visually representing their interests through graphical displays. Users can input their interests, hobbies, and academic preferences, and the system generates personalized graphs and charts to showcase these interests accordingly. This helps students explore potential career paths and academic pursuits in a dynamic and engaging manner.",
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
      slug: "famms-glamour-e-store",
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
      slug: "elaxi-ride-hailing-app",
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
  ];
  
  export {technologies, experiences, testimonials, projects };