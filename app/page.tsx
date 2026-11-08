import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HomeContact, HomeDrawnTo, HomeField } from "@/components/home/Sections";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Homepage version 3 (8 Nov 2026): introduces Sadman as a person. Work and Skills live on
 * the Work page, Recognition too; the full story is on the About page.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeDrawnTo />
      <HomeField />
      <HomeContact />
    </>
  );
}
