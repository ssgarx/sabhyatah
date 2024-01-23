import Action from "@/app/about/action"
import EngagePitch from "@/app/about/engagePitch"
import HomePitch from "@/app/about/homePitch"
import PartnerPitch from "@/app/about/partnerPitch"
import PrimaryPitch from "@/app/about/primaryPitch"
import LandingContainer from "@/components/containers/landing/landingContainer"

export default function About() {
  return (
    <>
      <LandingContainer>
        <PrimaryPitch />
        <EngagePitch />
        <PartnerPitch />
        <HomePitch />
      </LandingContainer>
      <Action />
    </>
  )
}
