import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import ImageWrapper from "@/components/library/imageWrapper"
import Image from "next/image"

export default function EngagePitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <LandingHeader>ENGAGE WITH PEOPLE WHO CARE</LandingHeader>
      {/* IMAGE */}
      <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-b from-neutral-50 to-transparent ">
        <ImageWrapper
          src="/images/landing/engagement_desktop.png"
          alt="engage_pitch"
          width={1411}
          height={1533}
          blurDataURL="/images/landing/fallback_desktop.png"
          className=" hidden md:block"
        />
        <Image
          src="/images/landing/engagement_mobile.png"
          alt="engage_pitch"
          width={422}
          height={749}
          blurDataURL="/images/landing/fallback_mobile.png"
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
