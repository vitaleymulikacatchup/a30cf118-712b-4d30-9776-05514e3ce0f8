"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Lightbulb, Utensils } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34253381/pexels-photo-34253381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Breathtaking view of a natural stone bridge over clear waters on the coastline of Sicilia, Italy."},
  {"id":"about-image","url":"https://images.pexels.com/photos/27330474/pexels-photo-27330474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A rustic stone building with colorful wooden chairs in Marzamemi, Sicily under a cloudy sky."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/3754810/pexels-photo-3754810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Discover the tranquil beauty of Rabbit Beach in Sicily with its stunning turquoise waters and sandy coastline."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleMinimal brandName="SicilyScape" />
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroSplit
            title="Welcome to SicilyScape"
            description="Experience the Heart of Sicily's Culture and Beauty."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SplitAbout
            bulletPoints={[
              {
                title: "Culture",
                description: "Savor authentic Sicilian traditions.",
                icon: Lightbulb,
              },
              {
                title: "Food",
                description: "Taste the best local delicacies.",
                icon: Utensils,
              },
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FeatureCardOne
            features={[
              {
                title: "Custom Tours",
                description: "Tailored experiences across Sicily.",
                imageSrc: assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"
              },
              {
                title: "Historical Landmarks",
                description: "Visit iconic heritage sites.",
                imageSrc: assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
            title="Our Offerings"
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SocialProofOne
            logos={[
              "/logos/logo1.svg",
              "/logos/logo2.svg",
              "/logos/logo3.svg",
              "/logos/logo4.svg",
              "/logos/logo5.svg",
              "/logos/logo6.svg"
            ]}
            title="Trusted by Industry Leaders"
            description="Join other reputable companies."
          />
        </div>
      </div>
      <div id="blog" data-section="blog" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <BlogCardOne
            blogs={[
              {
                id: "1",
                category: "Travel",
                title: "Exploring Sicily's Hidden Gems",
                excerpt: "Discover the lesser-known beauty of Sicily.",
                imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"},
                authorName: "Gianna Rossi",
                authorAvatar: "/avatar-1.jpg",
                date: "March 10, 2023"
              },
              {
                id: "2",
                category: "Culture",
                title: "Sicilian Cuisine: A Gastronomic Journey",
                excerpt: "Taste the true flavors of Sicily.",
                imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"},
                authorName: "Luca Bianchi",
                authorAvatar: "/avatar-2.jpg",
                date: "February 20, 2023"
              }
            ]}
            title="From Our Blog"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Get in Touch"
            title="Stay Connected with SicilyScape"
            description="Subscribe to our newsletter for updates and exclusive offers."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            mediaPosition="right"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBaseReveal
            columns={[
              {
                title: "Explore",
                items: [
                  { label: "About", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              },
              {
                title: "Discover",
                items: [
                  { label: "Blog", href: "blog" },
                  { label: "Tours", href: "tours" }
                ]
              }
            ]}
            copyrightText="© 2023 SicilyScape"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
