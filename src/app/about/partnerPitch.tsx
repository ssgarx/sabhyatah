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
      <div className="w-full h-auto p-4 md:p-6 lg:p-8 bg-gradient-to-b from-neutral-50 to-transparent ">
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
    </PitchContainer>
  )
}
