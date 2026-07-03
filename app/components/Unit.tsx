"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const units = [
  {
    title: "ISUZU ELF",
    seat: "Kapasitas 14 Seat",
    badge: "Terpopuler",
    badgeStyle:
      "bg-secondary-container text-on-secondary-container",
    image:
      "/assets/unit1.png",
    features: [
      "Full AC",
      "Reclining Seat",
      "USB Charger",
      "Wi-Fi Free",
    ],
  },
  {
    title: "ISUZU ELF v2",
    seat: "Kapasitas 12 Seat (Private)",
    badge: "Premium",
    badgeStyle: "bg-white/10 text-white",
    image:
      "/assets/unit2.png",
    features: [
      "Dual Zone AC",
      "Captain Seat",
      "Fast Charging",
      "Entertainment",
    ],
  },
  {
    title: "ISUZU ELF v3",
    seat: "Kapasitas 12 Seat VIP",
    badge: "Luxury",
    badgeStyle: "bg-white/10 text-white",
    image:
      "/assets/unit1.png",
    features: [
      "Captain Seat",
      "Wi-Fi",
      "USB Charger",
      "Luxury Interior",
    ],
  },
];

export default function Unit() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="py-24 bg-primary-container text-on-primary-container"
      id="unit"
    >
      <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl text-white">
              Armada Pilihan
            </h2>

            <p className="text-on-primary-container/80 max-w-lg">
              Kami menggunakan kendaraan terbaru yang dirawat secara
              berkala demi menjamin kenyamanan maksimal Anda.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">

            {units.map((unit) => (
              <div
                key={unit.title}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] md:px-6"
              >
                <div className="group">

                  <div className="overflow-hidden rounded-2xl mb-8">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {unit.title}
                      </h3>

                      <p className="text-secondary-fixed">
                        {unit.seat}
                      </p>
                    </div>

                    <div
                      className={`${unit.badgeStyle} px-4 py-1 rounded text-sm font-bold`}
                    >
                      {unit.badge}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {unit.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-white/10 px-4 py-2 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}