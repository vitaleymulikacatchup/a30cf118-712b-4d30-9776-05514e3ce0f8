"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, Utensils } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleMinimal brandName="Sicily Vibes" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Sicily"
            description="Experience the charm of Sicily, from its stunning beaches to historical sites."
            imageSrc="https://images.pexels.com/photos/19143042/pexels-photo-19143042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Explore", href: "#about" }]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              {
                title: "Rich History",
                description: "Discover the tales of Sicilian past through its magnificent architecture.",
                icon: BookOpen
              },
              {
                title: "Delicious Cuisine",
                description: "Taste the delightful variety of Sicilian dishes and wines.",
                icon: Utensils
              }
            ]}
            imageSrc="https://images.pexels.com/photos/14493718/pexels-photo-14493718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Join Us"
            title="Stay Connected"
            description="Subscribe to learn more about Sicily's wonders."
            imageSrc="https://images.pexels.com/photos/29054877/pexels-photo-29054877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            mediaPosition="left"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Terms & Conditions", href: "#" }
                ]
              }
            ]}
            logoText="Sicily Vibes"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}