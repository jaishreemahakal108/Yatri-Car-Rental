"use client"
import CarsCatalog from "@/components/Home/CarsCatalog";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {
  return (
    <div>
      <Hero/>
      <SearchInput/>
      <CarsCatalog />
    </div>
  );
}
