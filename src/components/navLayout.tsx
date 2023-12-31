import Image from "next/image"
import Link from "next/link"

export default function NavLayout() {
  return (
    <div className="flex justify-between items-start">
      <Image
        src={"/images/brand/logo_full.svg"}
        alt="Logo"
        width={80}
        height={28}
      />
      <div className="flex justify-end space-x-10">
        <Link href={"#"}>link1</Link>
        <Link href={"#"}>link2</Link>
        <Link href={"#"}>link3</Link>
        <Link href={"#"}>link4</Link>
      </div>
    </div>
  )
}
