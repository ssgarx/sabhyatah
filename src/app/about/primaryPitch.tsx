import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import Image from "next/image"

export default function PrimaryPitch() {
  return (
    <PitchContainer>
      {/* HEADING */}
      <div className="text-center">
        <LandingHeader>
          <div>HARDWARE builders </div>
          <div>x</div>
          <div>HARDWARE enthusiasts </div>
        </LandingHeader>
      </div>
      {/* IMAGE */}
      <div className="w-full h-auto rounded-lg border-4 md:border-8 border-zinc-600">
        <Image
          src="/images/landing/product_tray_desktop.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={16} // Aspect ratio width
          height={9} // Aspect ratio height
          className=" hidden md:block"
        />
        <Image
          src="/images/landing/product_tray_mobile.svg" // Replace with your image path
          alt="Descriptive Alt Text"
          layout="responsive"
          width={2} // Aspect ratio width
          height={6} // Aspect ratio height
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
