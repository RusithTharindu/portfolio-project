import Image from "next/image";
import Container from "@/layout/container";
import Hero from "@/components/hero";
import ColorBar from "@/components/colorBar";

export default function Home() {
  return (
    <div className="text-white text-[25px] font-semibold">
      This is Rusith&apos;s Portfolio
      <div className="">
        <ColorBar width="100px" color="#000" />
        <ColorBar width="50px" color="" />
      </div>
    </div>
  )
}
