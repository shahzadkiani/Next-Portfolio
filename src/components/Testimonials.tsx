import React from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    companyName: "Techub",
    desc: `"As a Instructor  in GIAIC, Shahzad has demonstrated a strong passion for learning and self-improvement. ."`,
    img: "/user-1.png",
    name: "Ali",
    designation: "Web3 developer",
  },
  {
    companyName: "OTS",
    desc: `""Partnering with shahzad has been a game-changer for our project. frameworks like Next.js ensured a seamless and modern user interface, while their use of Tailwind CSS and commitment to meeting deadlines made the collaboration smooth and successful. We could not be happier with the results."`,
    img: "/user-2.png",
    name: "Atif",
    designation: "Senior Engineering Manager",
  },
  {
    companyName: "CODSOFT",
    desc: `"Collaborating with Shahzad on web development projects has been a pleasure. Their ability to deliver clean, maintainable code while staying updated with the latest technologies like Next.js and Tailwind CSS has made a real difference in our workflow.""`,
    img: "/user-3.png",
    name: "Hamza",
    designation: "Developer",
  },
];

const Testimonials = () => {
  return (
    <div className="container pt-32">
      <Heading title="Testimonials" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            companyName={item.companyName}
            desc={item.desc}
            img={item.img}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
