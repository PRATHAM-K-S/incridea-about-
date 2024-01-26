"use client"
import Image from "next/image";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "300",
  style: "normal"
})

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "600",
  style: "normal"
})

const viking = localFont({
  src: "./viking_hell/Viking Hell.otf"
})


export default function Home() {
  useEffect(() => {
    // Your GSAP animations go here
    gsap.fromTo("#welcome", { x: "-60vw" }, { x: 0, delay: 0.5, duration: 0.75 })
    gsap.fromTo("#NMAMIT", { x: "-60vw" }, { x: 0, delay: 1.25, duration: 0.75 })
    gsap.fromTo("#block", { x: "50vw" }, { x: 0, delay: 0.75, duration: 1 })
    gsap.fromTo("#nav", { y: "-20vh" }, { y: 0, delay: 0.25, duration: 1 })
    gsap.fromTo("#campusimg", { y: "30vh", opacity: 0 }, { y: 0, opacity: 1, delay: 1.25, duration: 0.75 })
    gsap.fromTo("#aboutpara1", { y: "50vh", opacity: 0 }, { y: 0, opacity: 1, delay: 1.50, duration: 0.75 })
  }, []);
  return (
    <div className="h-screen overflow-x-hidden w-screen bg-gradient-to-br from-[#08011C] to-[#17002D] to-50% px-8 pt-8">
      <div id="nav" className="flex justify-between items-center mb-16 ">
        <Image id="hamburger-icon" src={"/Hamburger.svg"} alt="hamburger" width={24} height={24} className="hamburger" />
        <Image src={"/incredialogo.svg"} alt="hamburger" width={81.33} height={32} />
        <Image src={"/Avatar.svg"} alt="hamburger" width={32} height={32} />
      </div>
      <div className="flex gap-8 items-center">
        <div>
          <h1 id="welcome" className={`text-white ${viking.className} text-[32px]`}>Welcome To</h1>
          <h1 id="NMAMIT" className={`${viking.className} text-[#ffcd38] text-[64px]`}>NMAMIT</h1>
        </div>
        <div>
          <Image id="block" src={"/Blocks.png"} alt="block" width={90} height={90} />
        </div>
      </div>
      <br />
      <div className="flex justify-center">
        <Image id="campusimg" src={"/nittecampus.png"} alt="block" width={450} height={100} />
      </div>
      <br />
      <br />
      <div id="aboutpara1">
        <h4 className={`inline text-[#9F9F9F] font-bold ${poppinsBold.className}`}>Nitte Mahalinga Adyantaya Memorial Institute of Technology</h4>
        <p className={`text-[#9F9F9F] inline ${poppinsLight.className} `}>(NMAMIT), Nitte, established in 1986 and recognized by the All India Council for Technical Education, New Delhi, has been a constituent college of Nitte (Deemed to be University), Mangaluru,since June 2022. Rank band 101-150 in the National Institutional Ranking Framework (NIRF) 2023 by Ministry of Education, Government of India, the College has been placed under ‘Platinum’ category for having high industry linkages by the AICTE-CII Survey of Industry-Linked Technical Institutes 2020. NMAMIT, the off-campus centre of Nitte DU located at Nitte village, has active collaborations with several international universities and organizations for faculty and student exchanges, research, internships and placements.</p>
      </div>
    </div>
  )
}
