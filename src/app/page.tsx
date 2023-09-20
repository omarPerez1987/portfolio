"use client";
import React, { useState, useEffect } from "react";

import Logos_back from "next/image";
import Face_back from "next/image";
import Face_front from "next/image";
import Logo_front from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline">el turambao</h1>
      </header>

      <section 
        className="grid grid-cols-2 grid-rows-2 justify-items-center"
        style={{margin: '2rem 5% ', width: 'auto', border: '2px solid blue'}}
        >
        <div>
          <h1>backend</h1>
        </div>
        <div>
          <h1>backend</h1>
        </div>
      </section>

      <main>
        <section className="container">
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
            src={"/image/face_left_cut.png"}
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

        <section className="container">
          <Face_front
            src={"/image/face_right_cut.png"}
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
      </main>

      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0rem 5%;
          }

          .container {
            border: 2px solid red;
            display: flex;
            justify-content: center;
            align-items: end;
            width: 50%;
            max-width: 100%;
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
        `}
      </style>
    </>
  );
}
