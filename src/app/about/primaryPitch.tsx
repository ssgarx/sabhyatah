import LandingHeader from "@/app/about/landingHeader"
import PitchContainer from "@/components/containers/landing/pitchContainer"
import ImageWrapper from "@/components/library/imageWrapper"
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
      <div className=" rounded-lg border-4 md:border-8 border-zinc-600">
        <ImageWrapper
          src="/images/landing/product_tray_desktop.png" // Replace with your image path
          alt="primary_pitch"
          blurDataURL="/images/landing/fallback_desktop.png"
          width={1347}
          height={767}
          className=" hidden md:block"
        />
        <ImageWrapper
          src="/images/landing/product_tray_mobile.png" // Replace with your image path
          alt="primary_pitch"
          blurDataURL="/images/landing/fallback_mobile.png"
          width={1228}
          height={422}
          className=" block md:hidden"
        />
      </div>
    </PitchContainer>
  )
}
