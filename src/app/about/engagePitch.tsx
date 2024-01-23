import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import Image from "next/image"

export default function EngagePitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <LandingHeader>ENGAGE WITH PEOPLE WHO CARE</LandingHeader>
      {/* IMAGE */}
      <div className="w-full h-auto p-4 md:p-6 lg:p-8 bg-gradient-to-b from-neutral-50 to-transparent ">
        <Image
          src="/images/landing/engagement_desktop.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={16} // Aspect ratio width
          height={9} // Aspect ratio height
          className=" hidden md:block"
        />
        <Image
          src="/images/landing/engagement_mobile.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={16} // Aspect ratio width
          height={9} // Aspect ratio height
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
