import Link from "next/link";
import Logo from "next/image";
import Linkedin from "next/image";
import Github from "next/image";
import Twitter from "next/image";

export default function Navbar() {
  return (
    <>
      <section className="bg-black text-white">
        <nav className=" grid-cols-3 grid grid-rows-1 grid-flow-col gap-4 items-center">
          <div className="hover:animate-pulse">
            <Link href="/">
              <Logo
                src={"/image/header/logo.png"}
                alt="logo web"
                height={150}
                width={150}
              />
            </Link>
          </div>

          <ul className="grid grid-rows-1 grid-flow-col">
            <li className="hover:text-gray-400">
              <Link href="/about">about</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/blog">blog</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/portfolio">portfolio</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          <ul className="grid grid-rows-1 grid-flow-col gap-4 justify-center">
            <li className="hover:animate-pulse">
              <a href="https://www.linkedin.com/in/omar-perezr/" target="blank">
                <Linkedin 
                  src={"/image/header/linkedin-square-logo-24.png"}
                  alt="logo web"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className="hover:animate-pulse">
              <a href="https://github.com/omarPerez1987" target="blank">
              <Github 
                  src={"/image/header/github-logo-24.png"}
                  alt="logo web"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className="hover:animate-pulse">
              <a href="https://twitter.com/Alpha8333" target="blank">
              <Twitter 
                  src={"/image/header/twitter-logo-24.png"}
                  alt="logo web"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <style jsx>{`
        // div {
        //   display: flex;
        //   height: 6rem;
        //   background-color: black;
        // }

        // nav {
        //   display: flex;
        //   flex-direction: row;
        //   justify-content: center;
        //   justify-content: space-around;
        //   gap: 2rem;
        //   color: white;
        // }
      `}</style>
    </>
  );
}
