"use client";

import React, { useEffect, useState } from "react";
import Logos_back from "next/image";
import Face_back from "next/image";
import Face_front from "next/image";
import Logo_front from "next/image";

export default function Banner() {
  const [mouseOverFaceBack, setMouseOverFaceBack] = useState(false);
  const [mouseOverFaceFront, setMouseOverFaceFront] = useState(false);

  const [timeAnimationIntro, setTimeAnimationIntro] = useState(true);

  useEffect(() => {
    const animationIntroTimer = setTimeout(() => {
      setTimeAnimationIntro(false);
    }, 2000);

    return () => {
      clearTimeout(animationIntroTimer);
    };
  }, []);

  return (
    <>
      <main
        className="grid grid-cols-2 grid-rows-1 justify-items-center font-sans"
        style={{ margin: "2rem 5% ", width: "auto" }}
      >
        {/* ******** TITLE BANNER *************************************************************** */}

        <div
          className="mt-16 text-center w-6/12"
          style={{
            animation: timeAnimationIntro
              ? "watch 150ms 2.4s 1 linear"
              : "",
          }}
        >
          <h1
            className="font-black text-3xl"
            style={{
              opacity: mouseOverFaceFront || timeAnimationIntro ? 0 : 1,
            }}
          >
            / BACKEND /
          </h1>
          <p
            style={{
              opacity: mouseOverFaceFront || timeAnimationIntro ? 0 : 1,
            }}
          >
            Desarrollador backend que construye la infraestructura robusta,
            segura y optimizada
          </p>
        </div>

        <div
          className="mt-16 text-center w-6/12"
          style={{
            animation: timeAnimationIntro
              ? "watch 150ms 2.4s 1 linear "
              : "",
          }}
        >
          <h1
            className="font-black text-3xl"
            style={{ opacity: mouseOverFaceBack || timeAnimationIntro ? 0 : 1 }}
          >{`< FRONTEND />`}</h1>
          <p
            style={{ opacity: mouseOverFaceBack || timeAnimationIntro ? 0 : 1 }}
          >
            Desarrollador front-end que crea diseños elegantes, interactivos y
            responsivos
          </p>
        </div>

        {/* ******* PART LEFT BANNER ******************************************** */}

        {timeAnimationIntro ? (
          <section
            className={`container-back ${mouseOverFaceBack ? "hovered" : ""}`}
            onMouseEnter={() => {
              setMouseOverFaceBack(true);
              setMouseOverFaceFront(false);
            }}
            onMouseLeave={() => setMouseOverFaceBack(false)}
          >
            <Logos_back
              src={"/image/logos_back.png"}
              alt="letras codigo backend"
              width={850}
              height={800}
              style={{
                width: "60%",
                opacity: 0,
                animation:
                  "flash 150ms 0.5s 2 linear, watch 150ms 1.2s 1 linear forwards",
              }}
              priority={true}
              className="image-express"
            />
            <Face_back
              src={"/image/face_back_left.png"}
              alt="cara hombre con barba represenatada como arte"
              width={600}
              height={800}
              style={{
                width: "40%",
                opacity: 0,
                animation:
                  "flash 150ms 1.2s 2 linear, watch 150ms 1.7s 1 linear forwards",
              }}
              priority={true}
              className="image-back"
            />
          </section>
        ) : (
          <section
            className={`container-back ${mouseOverFaceBack ? "hovered" : ""}`}
            onMouseEnter={() => {
              setMouseOverFaceBack(true);
              setMouseOverFaceFront(false);
            }}
            onMouseLeave={() => setMouseOverFaceBack(false)}
            style={{
              animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
            }}
          >
            <Logos_back
              src={"/image/logos_back.png"}
              alt="letras codigo backend"
              width={850}
              height={800}
              style={{
                width: "60%",
                opacity: mouseOverFaceFront ? 0 : 1,
                animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
              }}
              priority={true}
              className=""
            />

            <Face_back
              src={
                mouseOverFaceFront
                  ? "/image/face_front_left.png"
                  : "/image/face_back_left.png"
              }
              alt="cara hombre con barba represenatada como arte"
              width={600}
              height={800}
              style={{
                width: "40%",
                animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
              }}
              priority={true}
              className=""
            />
          </section>
        )}

        {/* *** PART RIGHT BANNER ****************************************************** */}

        {timeAnimationIntro ? (
          <section
            className={`container-front ${mouseOverFaceFront ? "hovered" : ""}`}
            onMouseEnter={() => {
              setMouseOverFaceBack(false);
              setMouseOverFaceFront(true);
            }}
            onMouseLeave={() => setMouseOverFaceFront(false)}
          >
            <Face_front
              src={"/image/face_front_right.png"}
              alt="cara hombre con barba"
              width={600}
              height={800}
              style={{
                width: "40%",
                opacity: 0,
                animation:
                  "flash 150ms 1s 2 linear, watch 150ms 1.5s 1 linear forwards",
              }}
              priority={true}
              className="image-front"
            />
            <Logo_front
              src={"/image/logos_front.png"}
              alt="fragmento codigo frontend"
              width={850}
              height={800}
              style={{
                width: "60%",
                opacity: 0,
                animation:
                  "flash 150ms 2 linear, watch 150ms 0.8s 1 linear forwards",
              }}
              priority={true}
              className="image-react"
            />
          </section>
        ) : (
          <section
            className={`container-front  ${
              mouseOverFaceFront ? "hovered" : ""
            }`}
            onMouseEnter={() => {
              setMouseOverFaceBack(false);
              setMouseOverFaceFront(true);
            }}
            onMouseLeave={() => setMouseOverFaceFront(false)}
            style={{
              animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
            }}
          >
            <Face_front
              src={
                mouseOverFaceBack
                  ? "/image/face_back_right.png"
                  : "/image/face_front_right.png"
              }
              alt="cara hombre con barba"
              width={600}
              height={800}
              style={{
                width: "40%",
                animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
              }}
              priority={true}
            />
            <Logo_front
              src={"/image/logos_front.png"}
              alt="fragmento codigo frontend"
              width={850}
              height={800}
              style={{
                animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
                width: "60%",
                opacity: mouseOverFaceBack ? 0 : 1,
              }}
              priority={true}
            />
          </section>
        )}
      </main>

      {/* ************************************************************************** */}
      <style jsx>
        {`
          .container-back {
            cursor: pointer;
            margin-top: -8rem;
            display: flex;
            justify-content: center;
            align-items: end;
            width: 100%;
          }
          .container-front {
            cursor: pointer;
            margin-top: -8rem;
            display: flex;
            justify-content: center;
            align-items: end;
            width: 100%;
          }

          // ANIMATIONS

          @keyframes flash {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes watch {
            to {
              opacity: 1;
            }
          }

          @keyframes smoke {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
