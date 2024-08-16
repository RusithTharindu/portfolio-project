"use client"

import Hero from "@/components/hero";
import Loader from "@/components/Loader"

export default function Home() {
  return (
    <div>
      <Loader />
      <Hero />
    </div>
  );
}
