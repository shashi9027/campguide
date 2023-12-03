import Image from "next/image"
import Link from "next/link"

export default function CampCard({ value , setLoader}) {
  return <div>
    <div style={{ width: "335px" }} className="border rounded-sm max-w-fit border-border_color p-4 ">
      <Image width={300} height={166} objectFit="cover" style={{ maxHeight: "166px", minHeight: "166px" }} src={value?.image} />
      <div className="font-bold text-lg mt-3">{value?.name}</div>
      <div>{value?.title}</div>
      <Link onClick={()=> setLoader(true)} href={`/campgrounds/${value?.id}`}>
        <button className="border rounded-sm border-border_color mt-4 py-3 text-center w-full font-bold text-lg hover:bg-black hover:text-white">
          View Campground
        </button>
      </Link>
    </div>
  </div>

}