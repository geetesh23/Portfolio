import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    tensorflow,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python,
    git,
    shopify,
    ai,
    meta,
    starbucks,
    tesla,
    gamestudio,
    chatapp,
    musicapp,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Data Structures",
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
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Artificial Intelligence",
      icon: ai,
    },
  ];
  
  const experiences = [
    {
      title: "OutSystems Developer Intern",
      company_name: "Do iT Lean-India",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2023-December 2023",
      points: [
        "Increased hotel booking efficiency by 25% through development of a custom web application featuring streamlined booking processes and intuitive user interface.",
        "Designed a user-friendly hotel booking interface, leading to a 15% increase in booking conversions, and developed a secure, maintainable application using OutSystems, achieving a 75% reduction in code through reusable components.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Geetesh proved me wrong.",
      name: "Vansh Tanwani",
      designation: "Owner",
      company: "Tanwani Enterprices",
      image: "https://media.licdn.com/dms/image/D4D03AQGiGfR2m-CkTQ/profile-displayphoto-shrink_800_800/0/1684765215176?e=2147483647&v=beta&t=OPT8lbFTVbL2XrFu6wcBuv7hSQaVfdbdBlkHq38r-ZM",
    }
  ];
  
  const projects = [
    {
      name: "Maven Analytics",
      description:
        "Conducted a comprehensive sales analysis of Maven Superstore using Power BI, identifying top-performing products and sub-categories, which contributed to strategic decision-making and enhanced sales by 15%.",
      tags: [
        {
          name: " Power BI",
          color: "blue-text-gradient",
        },
      ],
      image: gamestudio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Heart Disease Classifier",
      description:
        "Established a machine learning framework for heart disease prediction that analyzed 1,200+ patient observations from the dataset, achieving a 93% accuracy rate and optimizing patient management strategies for healthcare facilities.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Agrigo: Crop Optimization System",
      description:
        "Achieved 97.23% accuracy in crop recommendation using Random Forest, LSTM and Decision Tree algorithms, improving decision-making for farmers.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: musicapp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };