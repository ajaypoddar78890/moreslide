"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/images/moreslide.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://www.moreslides.com/assets/Sample/slides_5.webp",
  },
];

export default HeroParallaxDemo;
