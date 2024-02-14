import Accordion from "./Accordion.tsx";
import IconStar from "../../assets/images/icon-star.svg";
import { useState } from "react";

const FAQ = () => {
  const [activeContent, setActiveContent] = useState(-1);
  return (
    <>
      <div className="absolute -z-10 w-full">
        <div
          className="bg-mobile md:bg-desktop"
          style={{ height: "33vh" }}
        ></div>
        <div className="bg-pink" style={{ height: "66vh" }}></div>
      </div>
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="w-full flex flex-col justify-center items-center text-purple-dark text-sm md:text-base"
      >
        <div
          className="flex flex-col gap-y-5 p-8 bg-white overflow-scroll"
          style={{
            maxHeight: "600px",
            maxWidth: "550px",
            width: "calc(100vw - 5em)",
          }}
        >
          <div className="flex items-center gap-x-5">
            <img className="h-7" src={IconStar} alt="icon-star" />
            <p className="font-bold text-xl">FAQs</p>
          </div>
          <Accordion
            question={"What is Frontend Mentor, and how will it help me?"}
            answer={
              <p>
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            }
            showBody={activeContent == 1}
            handleClick={() => setActiveContent(1)}
          />
          <Accordion
            question={"Is Frontend Mentor free?"}
            answer={
              <p>
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.{" "}
              </p>
            }
            showBody={activeContent == 2}
            handleClick={() => setActiveContent(2)}
          />
          <Accordion
            question={"Can I use Frontend Mentor projects in my portfolio?"}
            answer={
              <p>
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!{" "}
              </p>
            }
            showBody={activeContent == 3}
            handleClick={() => setActiveContent(3)}
          />
          <Accordion
            question={
              "How can I get help if I'm stuck on a Frontend Mentor challenge?"
            }
            answer={
              <p>
                The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.
              </p>
            }
            showBody={activeContent == 4}
            handleClick={() => setActiveContent(4)}
            showLineBreak={false}
          />
        </div>
        <div className="absolute bottom-0 mb-5 px-5 flex w-full justify-between">
          <span>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </span>
          <span>
            Coded by <a href="https://github.com/Annmayn/">Neema</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default FAQ;
