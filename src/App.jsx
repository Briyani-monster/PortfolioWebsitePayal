import { useEffect, useRef } from "react";
import "./index.css";
import PYLink from "./components/Link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navbar from "./Pages/Navbar";
import Icon from "./components/Icon";
// ..4
import React from "./assets/react.svg";
import { ProjectRow } from "./components/ProjectRow";

function App() {
  const LINKS_CONFIG = [
    { url: "#about", label: "About" },
    {
      url: "#projects",
      label: "Projects",
    },
    {
      url: "",
      label: "Resume",
    },
  ];

  const PROJECT_LISTS = [
    {
      name: "REVOLUTIONISING EXPENSE REIMBURSMENTS",
      description: "Product Design",
      image: "https://i.postimg.cc/9X7spPHc/pexels-pixabay-235986.jpg",
    },
    {
      name: "STREAMLINING VENDOR MANAGEMENT AND BILL PROCESSING",
      description: "Product Design",
      image:
        "https://images.creativemarket.com/0.1.0/ps/5708027/910/923/m2/fpnw/wm1/full_moon_screenshot-.jpg?1547590227&s=7fae338bfef014b8847cbf176fb48270",
    },
    {
      name: "EMPOWRING INDIAN ARTISIANS",
      description: "Product Design ",
      image:
        "https://assets.materialup.com/uploads/a5aa3151-8c04-4de7-bc71-b218344a537b/preview.png",
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: "Behance",
      url: "https://github.com/PayalAnil",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/payalanil/",
    },
    {
      name: "Resume",
      url: "https://twitter.com/PayalAnil",
    },
    {
      name: "Instagram",
      url: "https://twitter.com/PayalAnil",
    },
  ];
  // animate on scroll initialization
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="flex flex-row items-center justify-between mx-2">
        <Navbar links={LINKS_CONFIG} />
        <a className="cta-btn" target="_blank">
          <span>Get in Touch</span>
          <Icon classes={"icon"} name="NorthEast" />
        </a>
      </section>
      <section
        data-aos="fade-up"
        id="intro"
        className="px-5 mt-4 flex flex-row"
      >
        <div>
          <h1 className="font-leag-title">PAYAL</h1>
          <h1 className="font-leag-title pl-16">ANIL</h1>
        </div>
        <div className="flex flex-col items-end relative h-70vh">
          <div className="profile-circle-container">
            <div className="circle">
              <div className="logo">
                <div className="text">
                  <p>
                    {"Let’s work together • Let’s work together • Let’s work together • Let’s work together •"
                      .split("")
                      .map((item, index) => (
                        <span
                          style={{
                            transform: `rotate(${index * 4.1}deg)`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="sub-text-intro">
            On a mission to infuse every curve and line with meaning, creating
            digital experiences that simplify, uplift, and nurture human
            connection.
          </p>
        </div>
      </section>
      <section data-aos="fade-up" id="projects" className="min-h-screen">
        <h1 className="font-leag-subtitle px-5 mt-4">PROJECTS</h1>
        <div className="project-wrapper mt-4 ">
          {PROJECT_LISTS?.map((project, index) => (
            <div className="relative">
              <ProjectRow
                key={`key-for-project${index}`}
                index={index}
                isLast={index === PROJECT_LISTS?.length - 1}
                {...project}
              />
            </div>
          ))}
        </div>
      </section>
      <section data-aos="fade-up" id="about" className="h-screen">
        <h1 className="font-leag-subtitle px-5 mt-4">ABOUT ME</h1>
        <div className="flex flex-row justify-between px-5 mt-4">
          <div className="font-man-normal w-25per about-text-container">
            <p>
              As a dedicated product designer, I on a creative journey,
              transforming concepts into impactful designs. My passion lies in
              spreading joy through delightful experiences, deeply valuing
              intuitive design and the intersection of psychology and technology
              to craft cohesive user experiences. Every pixel I touch is infused
              with intention, striving to strike a harmonious balance between
              stakeholder and user needs. I continuously explore, iterate, and
              bridge the gap between design and development processes.
            </p>
            <p>
              I strive for efficiency, consistently meeting deadlines and
              staying within budget for every task. My ambition is clear: to
              utilize my creative skills to assist clients in reaching their
              corporate goals, one pixel at a time.
            </p>
          </div>
          <div className="font-man-normal w-25per about-text-container ">
            <p>
              When I’m not heads down at work, I can be found nestled in a
              corner with my iPad, sketching to the rhythm of techno music, or
              indulging in runs while pausing to admire beautiful architecture
              or embracing the challenge of learning a new sport.
            </p>
            <p>
              Join me in this journey to design greatness. Let's innovate,
              create, and shape the future of user experience together.
            </p>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" id="about" className="footer">
        <div className="flex flex-col item-center">
          <p className="font-man-small text-center">Have an idea?</p>
        </div>
        <p className="footer-cta">CREATE MAGIC WITH ME</p>
        <div className="footer-social flex flex-row justify-between px-5">
          <div className=" ">
            <p className="font-man-small text-light">Shoot a message</p>
            <p className="mt-0_5">payalanil1411@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1 ">
            {SOCIAL_LINKS?.map((item) => (
              <PYLink url={item.url} label={item.name} />
            ))}
          </div>
        </div>

        <div className="flex flex-row footer-last text-light justify-between px-5 py-3">
          <p>Made with love ❤️</p>
          <p className="font-man-small text-center">© 2022 PAYAL ANIL</p>
        </div>
      </section>
    </>
  );
}

export default App;
