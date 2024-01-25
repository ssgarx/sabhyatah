import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import ImageWrapper from "@/components/library/imageWrapper"
import Image from "next/image"

export default function PartnerPitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <LandingHeader>PARTNER UP WITH THE COMMUNITY</LandingHeader>
      {/* IMAGE */}
      {/* bg-gradient-to-b from-neutral-50  */}
      <div className="space-y-10">
        <div className="w-full h-auto p-4 md:p-6 lg:p-8 border-2 border-zinc-100 rounded-md ">
          <ImageWrapper
            src="/images/landing/partner_desktop.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={1232}
            height={70}
            blurDataURL="/images/landing/fallback_desktop.png"
            className=" hidden md:block"
          />
          <ImageWrapper
            src="/images/landing/partner_mobile.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={406}
            height={300}
            blurDataURL="/images/landing/fallback_mobile.png"
            className=" block md:hidden"
          />
        </div>
        <div className="md:flex space-y-10 md:space-y-0 md:space-x-10 ">
          <div className="p-4 md:p-6 lg:p-8 border-2 border-zinc-100 rounded-md w-full ">
          <ImageWrapper
            src="/images/landing/partner_perk.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={605}
            height={730}
            blurDataURL="/images/landing/fallback_desktop.png"
          />
          </div>
          <div className="p-4 md:p-6 lg:p-8 border-2 border-zinc-100 rounded-md w-full ">
          <ImageWrapper
            src="/images/landing/timeline_desktop.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={605}
            height={730}
            blurDataURL="/images/landing/fallback_desktop.png"
            className=" hidden md:block"
          />
          <ImageWrapper
            src="/images/landing/timeline_mobile.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={422}
            height={477}
            blurDataURL="/images/landing/fallback_mobile.png"
            className=" block md:hidden"
          />
          </div>
        </div>
      </div>
    </PitchContainer>
  )
}
