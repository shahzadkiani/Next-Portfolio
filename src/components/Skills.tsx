import React from "react";

const Skills = () => {
  return (
    <div className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-gray-500 pt-2">
            I specialize in building modern web applications using HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, 
            creating seamless user experiences with clean and efficient code.&quot;
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Figma</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
