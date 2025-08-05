import React from "react";
import { motion } from "framer-motion";
import odinLogo from "../assets/projects/odin.png";
import consciousPlanetLogo from "../assets/projects/consious-planet.webp";
import innerEngineeringLogo from "../assets/projects/inner-engineering.jpg";
import koushicLogo from "../assets/projects/Koushic.jpeg";
import veripureLogo from "../assets/projects/veripure.png";
import marahLogo from "../assets/projects/marah.jpg";
import bokaLogo from "../assets/projects/boka.jpg";
import wisconsinLogo from "../assets/projects/WSCI-Logo.png";
import nateraLogo from "../assets/projects/natera.png";

const ProfessionalProjects = () => {
  const projects = [
    {
      title: "Odin AI",
      company: "ODIN",
      year: "Nov 2022 - Present",
      logo: odinLogo,
      description:
        "Played a key role in architecting and developing the UI/UX of the ODIN AI application. Built the frontend from scratch using modern frameworks and libraries, and led multiple successful migrations across tech stacks to improve performance and scalability. Customized reusable components based on a design system-driven theme configuration that supports both light and dark modes. Implemented dynamic theming setups tailored to different client requirements using the shadcn/ui component library and Tailwind CSS.",
    },
    {
      title: "Odin AI Landing Site",
      company: "ODIN",
      year: "Nov 2022 - Present",
      logo: odinLogo,
      description:
        "Collaborated with UI/UX designers, content writers, and the digital marketing team to design and develop the Odin AI landing website. Initially built with React and Chakra UI, then led the migration to Framer Website Builder for improved flexibility and faster content delivery. Integrated Framer CMS to manage and publish case studies efficiently. Implemented user interaction tracking with Hotjar, integrated Typeform for form submissions and lead capture, and optimized performance and accessibility. Also handled the migration of the site’s visual theme from dark to light, ensuring a modern and consistent user experience.",
    },
    {
      title: "Odin AI Blog Site",
      company: "ODIN",
      year: "Nov 2022 - Present",
      logo: odinLogo,
      description:
        "Collaborated with a senior WordPress developer to build and launch the Odin AI blog site using WordPress, PHP, JavaScript, and Elementor. Worked closely with content writers to manage and schedule daily blog publications. Contributed to plugin configurations and performed site performance optimization to ensure fast load times and smooth user experience.",
    },
    {
      title: "Odin LearnHub",
      company: "ODIN",
      year: "Nov 2022 - Present",
      logo: odinLogo,
      description:
        "Developed and maintained the Odin AI LearnHub site using a WordPress-based documentation tool. Regularly monitored changes in the application and updated documentation content accordingly to ensure accuracy and relevance. Provided ongoing documentation support to internal teams, ensuring developers and stakeholders had up-to-date references for features and workflows.",
    },
    {
      title: "Conscious Planet",
      company: "CodeGlo",
      year: "Oct 2021 - Sep 2022",
      logo: consciousPlanetLogo,
      description:
        "Contributed as a frontend developer by enhancing user experience, resolving UI issues, ensuring responsive design across devices, implementing internationalization, and leveraging SSR/SSG for improved performance and SEO. Also implemented a dynamic certificate download feature using Canvas, allowing users to generate and export personalized certificates.",
    },
    {
      title: "Inner Engineering",
      company: "CodeGlo",
      year: "2022",
      logo: innerEngineeringLogo,
      description:
        "Worked as a frontend developer on enhancing and maintaining the Inner Engineering website. Focused on improving UI consistency, fixing layout issues, ensuring responsive behavior across devices.",
    },
    {
      title: "Koushic Pressure Vessels",
      company: "CodeGlo",
      year: "2022",
      logo: koushicLogo,
      description:
        "Created a professional industrial website showcasing pressure vessel products, specifications, and contact information with technical documentation.",
    },
    {
      title: "Veripure",
      company: "CodeGlo",
      year: "2022",
      logo: veripureLogo,
      description:
        "Tailored Veripure Shopify theme, optimized layout and content, and implemented responsive design techniques.",
    },
    {
      title: "Marah Naturals",
      company: "CodeGlo",
      year: "2022",
      logo: marahLogo,
      description:
        "Customized Shopify theme, optimized for screen sizes, and implemented responsive design principles for natural products e-commerce.",
    },
    {
      title: "Boka",
      company: "CodeGlo",
      year: "2022",
      logo: bokaLogo,
      description:
        "Customized Shopify theme to reflect brand identity, fine-tuned CSS, and adjusted content/layout to enhance shopping experience and drive conversions.",
    },
    {
      title: "Wisconsin Hypnosis Center",
      company: "CodeGlo",
      year: "2025",
      logo: wisconsinLogo,
      description:
        "Developed a professional website for hypnosis services including appointment booking, service information, and client testimonials.",
    },
    {
      title: "Natera",
      company: "CodeGlo",
      year: "2025",
      logo: nateraLogo,
      description:
        "Created a modern website for Natera with product information, company details, and professional presentation of services.",
    },
  ];

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Professional Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-stone-700">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-stone-400 text-sm font-medium hidden">
                  {project.title.charAt(0)}
                </span>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{project.title}</h3>
                <span className="text-sm text-stone-500">
                  - {project.company}
                </span>
                <span className="text-sm text-stone-400">• {project.year}</span>
              </div>
              <p className="mb-4 text-stone-400">{project.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
