import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import Image from "next/image"

export default function HomePitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <LandingHeader>
        HOME FOR ALL OF YOUR HARDWARE
      </LandingHeader>
      {/* IMAGE */}
      <div className="w-full h-auto rounded-lg border-4 md:border-8 border-zinc-600 p-1 ">
        <Image
          src="/images/landing/home_desktop.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={165} // Aspect ratio width
          height={100} // Aspect ratio height
          className=" hidden md:block"

        />
         <Image
          src="/images/landing/home_mobile.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={135} // Aspect ratio width
          height={100} // Aspect ratio height
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
