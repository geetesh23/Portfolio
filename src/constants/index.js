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
      title: "Shopify Developer",
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
      name: "Shopify",
      icon: shopify,
    },
    {
      name: "Artificial Intelligence",
      icon: ai,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Teachnook",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
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
        "I thought it was impossible to make a website as beautiful as our product, but Geetesh proved me wrong.",
      name: "Vansh Tanwani",
      designation: "Owner",
      company: "Tanwani Enterprices",
      image: "https://media.licdn.com/dms/image/D4D03AQGiGfR2m-CkTQ/profile-displayphoto-shrink_800_800/0/1684765215176?e=2147483647&v=beta&t=OPT8lbFTVbL2XrFu6wcBuv7hSQaVfdbdBlkHq38r-ZM",
    }
  ];
  
  const projects = [
    {
      name: "GameStudio",
      description:
        "Explore the world of gaming on our React-powered studio website. Dive into our portfolio, discover upcoming titles, and stay connected with our vibrant gaming community. Immerse yourself in the future of interactive entertainment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gamestudio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chat It",
      description:
        "Engage in real-time conversations effortlessly with our React-based chat web app. Connect with friends and colleagues, share messages, images, and more. A intuitive interface ensures seamless communication,and meaningful connections.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Infidio",
      description:
        "Experience music like never before with our React-based web app powered by the Spotify API. Seamlessly stream your favorite tracks, create playlists, and discover new tunes. Enjoy a user-friendly interface, personalized recommendations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: musicapp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };