"use client";
import "../globals.css";
import Banner from "../components/homeBanner/Banner";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <aside className="grid-cols-1 grid grid-rows-2 grid-flow-col items-center justify-items-center bg-gray-50 border-4 border-gray-100">
        <h2>ALGUNOS DE MIS TRABAJOS</h2>
        <div className="grid-cols-3 grid grid-rows-1 grid-flow-col gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </aside>
    </>
  );
}
