"use client"

import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import Hero from "@/components/hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (you can use real data fetching here)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust delay as needed

    // Alternatively, hide the loader after the window has fully loaded
    // window.addEventListener("load", () => setLoading(false));

    return () => {
      window.removeEventListener("load", () => setLoading(false));
    };
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && <Hero />}
    </div>
  );
}
