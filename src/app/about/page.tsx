"use client"

import { Info, Briefcase, Mail, HomeIcon } from "lucide-react";

import Image from "next/image";

export default function Home() {


const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
];

  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    </div>
  );
}
