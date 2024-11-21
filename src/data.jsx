import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaLaravel, FaReact } from 'react-icons/fa';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'experience' }
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
  id: nanoid(),
    title: 'Laravel',
    icon: <FaLaravel className='h-16 w-16 text-emerald-500' />,
    text: 'Decent proficiency in Laravel, have a project for creating Business Analysis applications for internal use.',
  }

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzb5xwgga/image/upload/v1732089197/Punya%20Arya/PTKita.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Karsa Inti Tuju Askara',
    text: 'Working as Technical IT support For GoApotik System. Creating IT ticket for it support need, and also troubleshooting problem.',
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzb5xwgga/image/upload/v1732089293/Punya%20Arya/Balitower.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Bali Towerindo Sentra',
    text: 'Working as Back-End Developer for billing and analytics section. Using CI3 then migrate it Into Laravel.',
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzb5xwgga/image/upload/v1732089405/Punya%20Arya/Tsuzumi.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'tsuzumi japan technology',
    text: 'Working as Full Stack Developer using React JS and TailwindCSS.',
  },
];
