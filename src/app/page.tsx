"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardThirteen from '@/components/sections/metrics/MetricCardThirteen';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="plain"
      cardStyle="noise"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
          brandName="Casa Ka'an"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="CASA KA'AN"
          description="Experience ultimate luxury in the heart of the Calakmul jungle. Discover pristine nature, authentic Maya culture, and unforgettable moments at our boutique lodge."
          buttons={[
            { text: "Explore Now", href: "about" },
            { text: "Book Your Stay", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055302087-sg1rnur1.jpg",
              imageAlt: "Casa Ka'an luxury lodge exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055303143-o2d6fqxo.jpg",
              imageAlt: "Tropical sunset at the lodge"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055304011-3lfn6i4o.jpg",
              imageAlt: "Resort pool with jungle view"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Welcome to Casa Ka'an Calakmul"
          description={[
            "Nestled deep in the Calakmul Biosphere Reserve, Casa Ka'an offers an exclusive retreat where luxury meets nature. Our carefully designed lodge combines modern comfort with authentic jungle living, providing guests with an immersive experience in one of Mexico's most pristine ecosystems."
          ]}
          metrics={[
            { label: "Rooms", value: "12" },
            { label: "Acres of Jungle", value: "50+" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSixteen
          title="What Sets Us Apart"
          description="Experience the difference between ordinary resorts and truly exceptional jungle retreats"
          negativeCard={{
            title: "Typical Resorts",
            items: [
              "Crowded guest experiences",
              "Limited connection to nature",
              "Standard amenities only",
              "No cultural immersion"
            ]
          }}
          positiveCard={{
            title: "Casa Ka'an",
            items: [
              "Intimate groups only (max 24 guests)",
              "Immersive jungle and wildlife experiences",
              "World-class spa, fine dining, adventure activities",
              "Authentic interactions with local Maya communities"
            ]
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardFour
          title="Our Accommodations"
          description="Each room is thoughtfully designed with natural materials and modern amenities for your comfort"
          products={[
            {
              id: "deluxe",
              name: "Deluxe Jungle Suite",
              price: "$350/night",
              variant: "King bed with private terrace",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055308917-ntz0obuz.jpg",
              imageAlt: "Deluxe suite bedroom"
            },
            {
              id: "villa",
              name: "Private Villa",
              price: "$500/night",
              variant: "King bed with plunge pool and view deck",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055309830-797sdnqo.jpg",
              imageAlt: "Private villa accommodation"
            },
            {
              id: "standard",
              name: "Comfort Room",
              price: "$200/night",
              variant: "Queen bed with garden view",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055310734-ty9wv1cs.jpg",
              imageAlt: "Standard comfort room"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="facilities" data-section="facilities">
        <MetricCardThirteen
          title="Premium Facilities & Services"
          description="Every detail is crafted to enhance your jungle retreat experience"
          metrics={[
            { id: "1", label: "Fine Dining", value: "Michelin-Trained Chef" },
            { id: "2", label: "Wellness", value: "Full-Service Spa" },
            { id: "3", label: "Activities", value: "15+ Experiences" },
            { id: "4", label: "Service", value: "24/7 Concierge" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What Our Guests Say"
          description="Read heartfelt experiences from travelers who discovered paradise at Casa Ka'an"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Writer",
              company: "Luxury Escapes Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055311667-4b153ti5.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Adventure Enthusiast",
              company: "Explorer's Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055312614-d95i3y1b.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma & Thomas Rodriguez",
              role: "Honeymooners",
              company: "Newlyweds",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055313479-bbpn7di3.jpg",
              imageAlt: "Emma and Thomas"
            },
            {
              id: "4",
              name: "Lisa Johnson",
              role: "Environmental Activist",
              company: "Nature Foundation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055314597-54hvoh7p.jpg",
              imageAlt: "Lisa Johnson"
            },
            {
              id: "5",
              name: "The Williams Family",
              role: "Family Travelers",
              company: "Adventure Seekers",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055315759-j0gnkh6s.jpg",
              imageAlt: "Williams family"
            },
            {
              id: "6",
              name: "Michael Torres",
              role: "Wellness Coach",
              company: "Mindful Living",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766055316538-fxj1nw63.jpg",
              imageAlt: "Michael Torres"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about your stay at Casa Ka'an"
          faqs={[
            {
              id: "1",
              title: "What is the best time to visit Calakmul?",
              content: "The dry season from November to April offers the best weather for wildlife viewing and jungle activities. However, the lodge is open year-round, with each season offering unique experiences."
            },
            {
              id: "2",
              title: "Are meals included in the room rate?",
              content: "We offer all-inclusive packages that include breakfast, lunch, dinner, and most beverages. Custom dining arrangements can be discussed upon booking."
            },
            {
              id: "3",
              title: "What activities are available?",
              content: "Activities include guided jungle hikes, wildlife tours, bird watching, cenote visits, Maya ruins exploration, yoga classes, spa treatments, and cultural experiences with local communities."
            },
            {
              id: "4",
              title: "How far is Casa Ka'an from the nearest airport?",
              content: "We are approximately 300km from Chetumal International Airport. We provide airport transfer services and can arrange private transportation upon request."
            },
            {
              id: "5",
              title: "Is the lodge suitable for families with children?",
              content: "Yes, we welcome families. We offer family-friendly activities and our staff can help arrange age-appropriate experiences and childcare services."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Experience Paradise?"
          ctaDescription="Let our team help you plan your perfect jungle escape and customize your stay."
          ctaButton={{ text: "Contact Us", href: "mailto:reservations@casakaan.com" }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How do I make a reservation?",
              content: "Contact our reservations team via email at reservations@casakaan.com or call +52 (XXX) XXX-XXXX. We'll help you select dates, room types, and customize your experience."
            },
            {
              id: "2",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 30 days before arrival with full refund. Special packages and peak season bookings have different terms. Details provided upon booking."
            },
            {
              id: "3",
              title: "Do you offer group bookings?",
              content: "Yes, we specialize in group retreats, corporate events, and private functions. Contact our group coordinator for customized packages and rates."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal logoText="Casa Ka'an" />
      </div>
    </ThemeProvider>
  );
}