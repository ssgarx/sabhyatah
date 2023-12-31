import Image from "next/image"

export default function Product() {
  return (
    <div>
      <div className="relative w-full h-60 bg-zinc-100">
        {/* Image component commented out */}
      </div>
      <div className="p-2 w-full flex flex-col justify-between items-start">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <div className="text-zinc-800 text-sm font-medium capitalize">
            Product Name
          </div>
          <div className="text-zinc-600 text-xs font-medium">
            This will be a one-liner description of the product.
          </div>
        </div>
        <div className="w-full flex justify-between items-end">
          <div className="flex items-end gap-2">
            <div className="w-3.5 h-3.5 bg-zinc-600" />
            <div className="w-3.5 h-3.5 bg-zinc-600" />
            <div className="w-3.5 h-3.5 bg-zinc-600" />
            <div className="w-3.5 h-3.5 bg-zinc-600" />
          </div>
          <div className="flex items-end gap-1">
            <div className="w-3.5 h-3.5 bg-zinc-600" />
            <div className="text-zinc-600 text-sm font-medium capitalize">
              name
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
