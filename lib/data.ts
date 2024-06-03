import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hash from "@/public/hash.jpg";
import editor from "@/public/infostar-editor.png";
import plan from "@/public/infogate-plan.png";
import payment from "@/public/infogate-payment.png";
import dshelta from "@/public/dshelta.png";
import { StaticImageData } from "next/image";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Information Technology",
    location: "Accra, Ghana",
    description:
      "I am in my final year of pursuing a Bachelor's Degree in Information Technology at Accra Institute of Technology (AIT).I have a consistent 3.16 cumulative GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Accra, Ghana",
    description:
      "I worked as an intern front-end developer for Whitsun systems Limited. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Accra, Ghana",
    description:
      "I was assigned the position to work as a full-stack developer for InfoGate.Net. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities to further contribute and grow in the field.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  url: string;
}

export const projectsData: Project[] = [
  {
    title: "Hash Events",
    description:
      "Events platform for tickets buying and event management. Vibrant use of colors and user friendly design.",
    tags: ["React", "Typescript", "Tailwind", "NodeJS", "MongoDB", "Shadcn"],
    imageUrl: hash,
    url: "https://www.experiencehash.com/",
  },
  {
    title: "D'Shelta Estates",
    description:
      "Offers users a seamless and intuitive experience. Comprehensive property searches based on criteria such as location and property type.",
    tags: ["React", "Javascript", "Express.js", "Tailwind", "MongoDB", "Redux"],
    imageUrl: dshelta,
    url: "https://www.d'sheltaestates.com/",
  },
  {
    title: "InfoStarfone Project",
    description:
      "Mobile application builder using drag-and-drop interface within InfoStarfone's online editor. I am the front-end developer. It provides users with option to obtain short codes for IVR. (www.infogatenet.com)",
    tags: ["React", "TypeScript", "Next", "Tailwind", "Redux"],
    imageUrl: editor,
    url: "https://www.infogatenet.com/"
  },
  {
    title: "InfoGate.Net UI/UX",
    description:
      "I design user-friendly payment pages to ensure a seamless and efficient payment processing experience for customers on InfoGate.Net platforms.",
    tags: ["HTML", "CSS", "SQL"],
    imageUrl: plan,
    url: "https://www.infogatenet.com/"
  },
  {
    title: "API's and Backend for InfoGate.Net",
    description:
      "I establish vital connections for our services by interfacing with APIs (custom and payment gateways). I also manage the backend on Azure.",
    tags: ["HTML", "CSS", "SQL", "JavaScript", "Azure Services"],
    imageUrl: payment,
    url: "https://www.infogatenet.com/"
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
