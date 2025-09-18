"use client";
import React, { useEffect } from "react";
import SplitText  from "gsap/SplitText";
import gsap from "gsap";

const RevealPage = () => {
    useEffect(() => {
        gsap.registerPlugin(SplitText);
        var childSplit = new SplitText("h1", {
            type: "lines",
            linesClass: "split-child"
          });
          var parentSplit = new SplitText("h1", {
            type: "lines",
            linesClass: "split-parent"
          });
          
          gsap.from(childSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1
          });
      }, []);
  return (
    <>
      <style>{`
        @keyframes reveal {
          0% {
            transform: translate(0, 100%);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#bedcff",
          fontFamily: "Helvetica, sans-serif",
          fontWeight: "bold",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            padding: "100px 20px 0",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              margin: 0,
              textAlign: "center",
              fontSize: "200px",
              overflow: "hidden",
              lineHeight: 1,
            }}
          >
            <span 
              style={{
                display: "block",
                // animation:
                //   "reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s both",
              }}
            >
              reveal
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default RevealPage;