"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-20">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
  
    >
        <p className="mb-3">
        <span className="italic">The projects mentioned above, including managing InfoGate.Net's backend on Azure, 
        integrating APIs, and contributing to various initiatives, are just a glimpse into my extensive portfolio.</span> 
        These endeavors showcase my hands-on experience and expertise in diverse technologies and development practices.{" "}
        </p> 
        
        <p>
        <span className="font-medium">Moreover, my commitment to continuous learning and passion for innovation is reflected in 
        the personal projects I have undertaken during my spare time.</span> These personal projects, which are accessible through my GitHub profile
         (provided above), serve as a testament to my proactive engagement with emerging technologies, creative problem-solving, and dedication to refining 
         my skills outside of professional commitments.{" "}
        <span className="font-medium">By exploring my GitHub repository, you will gain insight into a collection of projects that demonstrate my versatility, 
        coding proficiency, and a keen interest in addressing real-world challenges. </span> I am actively involved in refining and expanding my skill set 
        through both professional engagements and personal initiatives, ensuring a well-rounded and up-to-date skill portfolio.
      </p>
        </motion.section>
      </div>
    </section>
  );
}
