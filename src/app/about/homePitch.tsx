import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import ImageWrapper from "@/components/library/imageWrapper"
import Image from "next/image"

export default function HomePitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <LandingHeader>HOME FOR ALL OF YOUR HARDWARE</LandingHeader>
      {/* IMAGE */}
      <div className="w-full h-auto rounded-lg border-4 md:border-8 border-zinc-600 p-1 ">
        <ImageWrapper
          src="/images/landing/home_desktop.png" // Replace with your image path
          alt="Descriptive Alt Text"
          width={1347}
          height={864}
          blurDataURL="/images/landing/fallback_desktop.png"
          className=" hidden md:block"
        />
        <ImageWrapper
          src="/images/landing/home_mobile.png" // Replace with your image path
          alt="Descriptive Alt Text"
          width={1499}
          height={422}
          blurDataURL="/images/landing/fallback_mobile.png"
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
