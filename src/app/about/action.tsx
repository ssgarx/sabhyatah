import LandingHeader from "@/app/about/landingHeader"
import LandingContainer from "@/components/containers/landing/landingContainer"

export default function Action() {
  return (
    <div className="bg-gradient-to-b from-white via-red-50 to-sky-50 ">
      <LandingContainer>
        <div className="space-y-8">
          {/* HEADING */}
          <LandingHeader>FLEX INDIAN HARDWARE</LandingHeader>
          <div className="flex justify-center items-center">
            <div className=" flex-col md:flex-row flex gap-2 w-full md:w-3/4">
              <input
                type="email"
                id="email"
                className="bg-white border border-neutral-400 text-gray-900 text-sm md:text-base block p-4 w-full"
                placeholder="Add Your Email"
                required
              />
              <button className=" w-full md:w-auto px-8 py-4 hover:opacity-80 active:opacity-100 bg-zinc-200 justify-center items-center gap-1 flex text-zinc-600 text-sm md:text-base font-normal shrink-0">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </LandingContainer>
    </div>
  )
}
