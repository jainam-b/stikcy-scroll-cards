"use client";
import "./stickyCards.css";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const cards = [
    {
      index: "01",
      title: "Design",
      image: "/100.png",
      description:
        "Design is about clarity and delight. We focus on clean, functional, and aesthetically pleasing interfaces.",
    },
    {
      index: "02",
      title: "Function",
      image: "/200.png",
      description:
        "Functionality comes first. We ensure every interaction is intuitive, responsive, and meaningful.",
    },
    {
      index: "03",
      title: "Emotion",
      image: "/300.png",
      description:
        "Good interfaces evoke emotions. We create experiences that resonate and leave a lasting impression.",
    },
    {
      index: "04",
      title: "Character",
      image: "/400.png",
      description:
        "Interfaces should have personality. We embed small moments of play and irregularity to bring warmth, charm, and a human feel to the digital.",
    },
  ];
  const container = useRef(null);
  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
            // scrub: true,
          });
        }
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;
              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="sticky-cards">
        {cards.map((cards, index) => (
          <div className="sticky-card" ref={container} key={index}>
            <div className="sticky-card-index">
              <h1>{cards.index}</h1>
            </div>
            <div className="sticky-card-content">
              <div className="sticky-card-content-wrapper">
                <div className="sticky-card-header">
                  {" "}
                  <h1>{cards.title}</h1>
                </div>
                <div className="sticky-card-image">
                  <img src={cards.image} alt="" />
                </div>
                <div className="sticky-card-copy">
                  <div className="sticky-card-title">
                    <p>(About the state)</p>
                  </div>
                  <div className="sticky-card-description">
                    <p>{cards.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default StickyCards;
