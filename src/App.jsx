import { useEffect, useRef } from "react";
import "./index.css";
import PYLink from "./components/Link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navbar from "./Pages/Navbar";
import Icon from "./components/Icon";
import React from "./assets/react.svg";
import ProjectRow from "./components/ProjectRow";
const PROJECT_LISTS = [
  {
    name: "REVOLUTIONISING EXPENSE REIMBURSMENTS",
    description: "Product Design",
    link: "https://www.notion.so/payalanil/Revolutionising-expense-reimbursements-An-automated-solution-for-streamlined-processes-and-enhanced-a3988c28be024fb29e34a312cb6c23fc?pvs=4",
    image:
      "https://raw.githubusercontent.com/Briyani-monster/PortfolioWebsitePayal/master/src/assets/images/myCapitalReimbursment.png",
  },
  {
    name: "STREAMLINING VENDOR MANAGEMENT AND BILL PROCESSING",
    description: "Product Design",
    link: " https://www.notion.so/payalanil/Streamlining-vendor-management-and-bill-processing-for-efficient-financial-operations-8acf74cfdb474a2a9668bf231139f3f3?pvs=4",
    image:
      "https://raw.githubusercontent.com/Briyani-monster/PortfolioWebsitePayal/master/src/assets/images/vendor.png",
  },
  {
    name: "EMPOWRING INDIAN ARTISIANS",
    description: "Product Design ",
    link: "https://www.behance.net/gallery/156103311/Maharha-UXUI-Case-Study",
    image:
      "https://raw.githubusercontent.com/Briyani-monster/PortfolioWebsitePayal/master/src/assets/images/empowringWomen.png",
  },
];
const RESUME_LINK =
  "https://drive.google.com/file/d/1yFYisiP5xvu6K0cDeVoFIt4wsYkHvzwg/view?usp=drivesdk";
const LINKS_CONFIG = [
  { url: "#about", label: "About" },
  {
    url: "#projects",
    label: "Projects",
  },
  {
    url: RESUME_LINK,
    isOpenNewPage: true,
    label: "Resume",
  },
];
const SOCIAL_LINKS = [
  {
    name: "Behance",
    url: "https://www.behance.net/payalanil1",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/payal-anil/",
  },
  {
    name: "Resume",
    url: RESUME_LINK,
  },
  {
    name: "Instagram",
    url: " https://www.instagram.com/_payalanil/?next=%2F",
  },
];
function App() {
  const ref = useRef();
  const heroRef = useRef();
  // animate on scroll initialization
  useEffect(() => {
    AOS.init();
    const interBubble = ref.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    if (interBubble) {
      const handleMouseMove = (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };
      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener("mousemove", handleMouseMove);

      move();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  console.log();
  const height = heroRef?.current?.getBoundingClientRect()?.height + 200;
  return (
    <>
      <header id="intro">
        <div class="text-container">
          <section className="flex flex-row items-center justify-between mx-2">
            <Navbar links={LINKS_CONFIG} />
            <a className="cta-btn" target="_blank" href={RESUME_LINK}>
              <span>Get in Touch</span>
              <Icon classes={"icon"} name="NorthEast" />
            </a>
          </section>
          <div
            ref={heroRef}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-row  items-end "
          >
            <div className="hero">
              <p className="hero-hello">HELLO.</p>
              <h1 className="font-leag-title">This is</h1>
              <h1 className="font-leag-title">Payal Anil</h1>
            </div>
            <p className="hero-p">
              <span>Product Designer at Volopay </span>
            </p>
          </div>
        </div>
        <div
          style={{
            height: `${height}px`,
          }}
          class="gradient-bg title-name interactive flex flex-row justify-between"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div class="gradients-container">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
            <div class="interactive" ref={ref}></div>
          </div>
        </div>
      </header>

      <section data-aos="fade-up" id="projects" className=" min-h-screen">
        <h1 className="font-leag-subtitle">PROJECTS</h1>
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
      <section data-aos="fade-up" id="about" className="min-h-screen pt-8">
        <h1 className="font-leag-subtitle  mt-4">ABOUT ME</h1>
        <div className="flex flex-row justify-between  relative mt-4 relative">
          <div className="about-image"></div>
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
        <div className="pt-8_5 px-6">
          <p className="font-man-small text-center">Have an idea?</p>
          <p className="footer-cta">CREATE MAGIC WITH ME</p>
        </div>
        <div className="footer-social flex flex-row justify-between px-5 ">
          <div className="">
            <p className="font-man-small text-light ">Shoot a message</p>
            <p className="mt-0_5">payalanil1411@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1 ">
            {SOCIAL_LINKS?.map((item) => (
              <PYLink url={item.url} isOpenNewPage={true} label={item.name} />
            ))}
          </div>
        </div>

        <div className="flex flex-row footer-last  text-light justify-between px-5 py-3">
          <p>Made with love ❤️</p>
          <p className="font-man-small text-center">© 2022 PAYAL ANIL</p>
        </div>
      </section>
    </>
  );
}

export default App;
