"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anisa Putri",
    role: "Karyawan Swasta",
    review: "\"Paling suka sama Banyu Bening Trans karena armadanya bersih banget dan pengemudinya sangat sopan. Selalu sampai tepat waktu bahkan sering lebih awal.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq_vMk2T9p-dKCL9SJl6XrY-po7oNW_8lqZF6t5xDN3a7qhwyf6IPI3HUJdQIM25Ip5JUS9NMz5cAz9_L9jATYWbnWTL2xM5p85PmBOVqmCBRE4EP1AOxTnwcBYTciksm_FEjirBRNZABxhLjpihhpO9rweOoGpXx6ydzRLM_oBsgfva0vXTjFsOkjIyDZCOuHZ-Rbdkd_edRyaY-pQWRWTL-C4kMOmQI6jHGrh3EBHY-vcXBpEMFLEBKd9Xz2aSO3q8GvQRFubF8c",
  },
  {
    name: "Budi Santoso",
    role: "Traveler Business",
    review: "\"Layanan bandara jempolan! Nggak perlu pusing mikirin parkir atau telat pesawat. Driver sudah standby 15 menit sebelum jadwal. Sangat direkomendasikan!\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPJbnAth0EoI9b17WBTYuOiIwl2yddU5MWu2-qP150FG5ZSC3bFd4ex-nOfx8DxYPip6GMDXIfkVoalP2Sifw1cOifK2ZQcuZYtir2UrL3I7eNiBhn9gEnbJH9ycjDhV1MJtxzPUpUuzEzwJfZS0I4yuPGBiZguTMehdOezc8VtR1OqnvZFK9RJaksip0WnujuJgmfbDNtDdjoZXJZRLfspZbiTEufUOe1tSsHRSjSgNf06xZ9yEo-Wiybb0hw94Hf_T59JvflGe8N",
  },
  {
    name: "Dimas Arya",
    role: "Online Shop Owner",
    review: "\"Sering titip paket kilat lewat Banyu Bening Trans. Barangnya aman sampai tujuan dan harganya jauh lebih terjangkau dibanding ekspedisi biasa untuk sehari sampai.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgR3z7gRTEFj6uKHcdNNx2EGVXd88GbBRfN0lu9pOBOX0xR5FvsCy-H5J-88kwT9z4qGD1xkQmtIVtnGoEg0jr_9xfQNJ-c_N2KlWRMnuEHJJzcOao6ZN5iHwfZvgtF0T8DN3UUnjcY8zZA851C4NEC2T3yM7d8a82z3LItBE-N3eqztwWjE97FuG9rmOMK7P1ezqaixmFkAKa8JFq154eN-1q4ddpZcT99r-TJ4WVaufuSefEw0sAQeLJ3WoJjQA-Yx1UNe3OJLmp",
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    review: "\"Sangat terbantu! Karena armada terawat dan supirnya hati-hati, anak-anak nyaman sepanjang perjalanan mudik. Harganya juga bersahabat.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq_vMk2T9p-dKCL9SJl6XrY-po7oNW_8lqZF6t5xDN3a7qhwyf6IPI3HUJdQIM25Ip5JUS9NMz5cAz9_L9jATYWbnWTL2xM5p85PmBOVqmCBRE4EP1AOxTnwcBYTciksm_FEjirBRNZABxhLjpihhpO9rweOoGpXx6ydzRLM_oBsgfva0vXTjFsOkjIyDZCOuHZ-Rbdkd_edRyaY-pQWRWTL-C4kMOmQI6jHGrh3EBHY-vcXBpEMFLEBKd9Xz2aSO3q8GvQRFubF8c",
  },
  {
    name: "Rizky Firmansyah",
    role: "Mahasiswa",
    review: "\"Pesen lewat aplikasinya gampang, jadwal banyak. Pulang pergi ke kampus beda kota jadi gampang banget kalau pakai Banyu Bening Trans.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgR3z7gRTEFj6uKHcdNNx2EGVXd88GbBRfN0lu9pOBOX0xR5FvsCy-H5J-88kwT9z4qGD1xkQmtIVtnGoEg0jr_9xfQNJ-c_N2KlWRMnuEHJJzcOao6ZN5iHwfZvgtF0T8DN3UUnjcY8zZA851C4NEC2T3yM7d8a82z3LItBE-N3eqztwWjE97FuG9rmOMK7P1ezqaixmFkAKa8JFq154eN-1q4ddpZcT99r-TJ4WVaufuSefEw0sAQeLJ3WoJjQA-Yx1UNe3OJLmp",
  }
];

export default function Testimonials() {
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
    <section className="py-24 bg-surface-container-lowest" id="testimoni">
      <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-on-surface text-3xl">Apa Kata Pelanggan Kami</h2>
            <p className="text-on-surface-variant">Kami melayani berbagai rute strategis di seluruh pulauJawa dengan jadwal <br />
                keberangkatan setiap jam.</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition"
            >
              <ChevronLeft className="text-on-surface" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition"
            >
              <ChevronRight className="text-on-surface" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((testi, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_33.333333%] pl-6">
                <div className="p-8 bg-surface rounded-2xl text-left h-full flex flex-col relative border border-secondary/10 hover:shadow-md transition-shadow">
                  <div className="flex gap-1 text-orange-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        <Star fill="orange" strokeWidth={0} />
                      </span>
                    ))}
                  </div>
                  
                  <p className="font-body-md text-on-surface-variant mb-8 italic flex-1">
                    {testi.review}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        alt={testi.name}
                        src={testi.image} 
                      />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{testi.name}</p>
                      <p className="text-xs text-on-surface-variant">{testi.role}</p>
                    </div>
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