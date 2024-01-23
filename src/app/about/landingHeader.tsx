export default function LandingHeader({ children }: any) {
  return (
    <div className="text-center justify-center items-center space-y-4 md:space-y-0 md:space-x-8 md:flex text-zinc-800 text-base md:text-2xl font-medium uppercase">
      {children}
    </div>
  )
}
