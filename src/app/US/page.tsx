"use client"
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import PageSection from "../Components/PageSection";
import { useRouter } from "next/navigation";
import SignUpForm from "../Components/SignUpForm";
import Image from 'next/image'
function page() {

  return (
    <div className="page__container">
      <PageSection>
        <div
          id="HERO-SECTION"
          className="h-screen w-full pt-10 sm:pl-[40px] sm:pr-[40px] lg:pl-[95px] lg:pr-[95px]"
        >
          <Header />
          <div id="HERO__CONTAINER" className="w-full h-[80%] CENTER flex-col">
            <h1 className="text-white font-bold text-[48px] mb-4">
              Unlimited movies, TV shows and more!
            </h1>

            <p className="text-white text-[25px] mb-8">
              Watch anywhere. Cancel anytime.
            </p>

            <p className="text-white text-[18px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

              <div>
                <SignUpForm/>
              </div>
          </div>
        </div>
      </PageSection>


      <PageSection>
        <div className="bg-black w-full h-[80vh] CENTER gap-14">
        

          <div className="flex-col CENTER  items-start pt[10px]">
            <h1 className="text-white font-extrabold text-[48px] pb-[10px]">Enjoy on your TV</h1>
            <p className="text-white text-[24px]">Watch on Smart TV's, Playstation, Xbox, Chromecast,<br/> Apple TV, Blue-ray players and more</p>
          </div>
   
          <div id="TV-WRAPPER" className="relative z-10" >
  
            <Image className="pointer-events-none z-20 "width={500} height={500}  src="/assets/tv-screen-3.svg" alt=" " />

            <video controls autoPlay loop className="w-[485px] h-[292px] absolute top-0 left-[9px] -z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>

          </div>

        </div>
      </PageSection>

      <PageSection>
        <div className="bg-black w-full h-[70vh] flex-row-reverse CENTER gap-14">
        

          <div className="flex-col items-start pl-[20px] pt[10px]">
            <h1 className="text-white font-extrabold text-[48px] pb-[10px]">Download your shows to watch offline</h1>
            <p className="text-white text-[24px]">Watch on a plane, train, or submarine...</p>
          </div>
   
          <div id="TV-WRAPPER" className="relative z-10" >
  
            <Image className="pointer-events-none z-20 h-[400px] w-[500px]"width={500} height={500}  src="/assets/mobile-0819.jpg" alt=" " />



            {/* <video controls autoPlay loop className="w-[485px] h-[292px] absolute top-0 left-[9px] -z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/> */}

          </div>

        </div>
      </PageSection>
    </div>
  );
}
export default page