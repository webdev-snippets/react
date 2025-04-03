
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Slider } from "@/components/slider";

import Head from "next/head";

import Image from "next/image";

export default function Home() {


  const navItems = [
    { name: 'Home', href: '/', icon: 'Home' }, // Use the icon name as a string
    { name: 'About', href: '/about', icon: 'Info' },
    // Add more nav items as needed
];

  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Slider />
    </div>
  );
}
