import Action from "@/app/about/action"
import EngagePitch from "@/app/about/engagePitch"
import HomePitch from "@/app/about/homePitch"
import PartnerPitch from "@/app/about/partnerPitch"
import PrimaryPitch from "@/app/about/primaryPitch"
import LandingContainer from "@/components/containers/landing/landingContainer"
import Seo from "@/components/library/seo"

export default function About() {
  return (
    <>
      <Seo
        title=" Sabhyatah – Indian hardware starups listed. "
        canonical="https://www.sabhyatah.com/"
        homeImageUrl="https://www.sabhyatah.com/images/seo/sabgyatah_og.png"
        siteName="@sabhyatah"
        description="Sabhyatah is a curation of the best Indian hardware products, every day. Discover the gadgets, components, equipment and technology products that is built in Indoa."
        locale="en_IN"
        ogType="website"
        ogImagePath="image/png"
        ogImageWidth="596"
        ogImageHeight="360"
        twitterCardContent="summary"
      />
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
