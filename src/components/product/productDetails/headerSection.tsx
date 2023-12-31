export default function HeaderSection() {
  return (
    <div className="w-full justify-start items-start gap-2 inline-flex">
      {/* <img className="w-96 h-96" src="https://via.placeholder.com/618x400" /> */}
      <div className="w-1/2 h-96 bg-zinc-100"></div>
      <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-28 h-28 relative bg-zinc-100" />
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-black text-4xl font-normal capitalize">
            Product Name Here
          </div>
          <div className="self-stretch text-zinc-600  capitalize">
            Lorem ipsum dolor sit amet consectetur. Nunc et erat est nisl libero
            commodo ipsum facilisis blandit. Aliquam sit viverra nibh nunc
            imperdiet turpis. Convallis mi lorem in mauris felis est in est.
            Nulla eget magna viverra posuere vel rutrum.
            <br />
            Lorem ipsum dolor sit amet consectetur. Nunc et erat est nisl libero
            commodo ipsum facilisis blandit. Aliquam sit viverra nibh nunc
            imperdiet turpis. Convallis mi lorem in mauris felis est in est.
            Nulla eget magna viverra posuere vel rutrum.
          </div>
        </div>
      </div>
    </div>
  )
}
