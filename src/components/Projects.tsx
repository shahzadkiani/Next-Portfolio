import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Weather App",
    desc: "A React & Node Based website to help You See weather in your area",
    img: "/portfolio1.png",
    tags: ["Nextjs", "TailWind Css", "API", "React"],
  },
  {
    id: 1,
    title: "Spotify Clone",
    desc: "A Html, Css & JavaScript Based website to Clone the Spotify Website",
    img: "/portfolio2.png",
    tags: ["Html", "Css", "JavaScript"],
  },
  {
    id: 2,
    title: "Language Translater",
    desc: "A Html, Css & JavaScript  Help You Translate any language you want ",
    img: "/portfolio3.png",
    tags: ["Html", "Css", "JavaScript"],
  },
  {
    id: 3,
    title: "Resume Builder",
    desc: "A Html, Css & JavaScript Based website to help you build your resume",
    img: "/portfolio4.png",
    tags: ["Html", "Css", "JavaScript"],
  },
  {
    id: 4,
    title: "Food-Man Resturant app ",
    desc: "A Html, Css & JavaScript Based website to Showcase a Modern Resturant Web Design",
    img: "/portfolio5.png",
    tags: ["Html", "Css", "JavaScript"],
  },
  {
    id: 5,
    title: "Food-Tuck Resturant Website",
    desc: "A Next js & Tailwind css Based website to help you find what Food you love the most",
    img: "/portfolio6.png",
    tags: ["Next js", "Node", "JavaScript", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
