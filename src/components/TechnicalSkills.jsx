import React from "react";
import { motion } from "framer-motion";

const TechnicalSkills = () => {
  const skills = [
    {
      category: "Frontend Technologies",
      items: [
        "Next.js",
        "React.js",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Ionic Framework",
      ],
    },
    {
      category: "Styling & UI Frameworks",
      items: [
        "Tailwind",
        "shadcn",
        "Bootstrap",
        "Chakra UI",
        "Material UI",
        "Framer Motion",
      ],
    },
    {
      category: "Testing",
      items: ["Cypress"],
    },
    {
      category: "CMS & Builders",
      items: ["WordPress", "Shopify", "Framer Website Builder"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded bg-stone-900 px-2 text-sm font-medium text-stone-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechnicalSkills;
