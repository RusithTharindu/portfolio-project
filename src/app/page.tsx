"use client"

import Hero from "@/components/hero";
import Loader from "@/components/loader";

export default function Home() {
  return (
    <div>
      <Loader />
      <Hero />
    </div>
  );
}
