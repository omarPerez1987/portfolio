"use client";
import React, { useState, useEffect } from "react";

import Express_back from "next/image";
import Face_back from "next/image";
import Face_front from "next/image";
import React_front from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1>el turambao</h1>
      </header>
      <main>
        <div className="container">
          <Express_back
            src={"/image/express_codec.png"}
            alt="letras codigo backend"
            width={850}
            height={800}
            style={{ width: "60%" }}
            priority={true}
            className="image-express"
          />
          <Face_back
            src={"/image/face_left_cut.png"}
            alt="cara hombre con barba represenatada como arte"
            width={600}
            height={800}
            style={{ width: "40%" }}
            priority={true}
            className="image-back"
          />
        </div>

        <div className="container">
          <Face_front
            src={"/image/face_right_cut.png"}
            alt="cara hombre con barba"
            width={600}
            height={800}
            style={{ width: "40%" }}
            priority={true}
            className="image-front"
          />
          <React_front
            src={"/image/react_codec.png"}
            alt="fragmento codigo frontend"
            width={850}
            height={800}
            style={{ width: "60%" }}
            priority={true}
            className="image-react"
            data-te-animation-init
            data-te-animation-reset="true"
            data-te-animation="[slide-right_1s_ease-in-out]"
          />
        </div>
      </main>

      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem 4rem;
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: end;
            width: 50%;
            max-width: 100%;
          }

          // .image-express {
          //   animation-name: flash-react;
          //   data-te-animation="[drop-in_0.5s]"
          // }
        `}
      </style>
    </>
  );
}
