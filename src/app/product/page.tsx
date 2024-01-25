import BuildersNoteSection from "@/components/product/productDetails/buildersNoteSection"
import HeaderSection from "@/components/product/productDetails/headerSection"
import StorySection from "@/components/product/productDetails/storySection"

export default function Product() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <HeaderSection />
      <StorySection />
      <BuildersNoteSection />
    </div>
  )
}
