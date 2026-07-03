import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="bg-surface-container-lowest py-24">
    <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
              <Image
              src={'/assets/unit1.png'}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-secondary text-on-secondary rounded-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Tahun Melayani</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-primary-container text-on-primary-container rounded-xl">
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-sm">Siaga Customer Support</p>
            </div>
            <div className="aspect-[3/4] bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
              <Image
              src={'/assets/aboutdalam.jpg'}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-stack-md">
          <h2 className="text-4xl text-on-surface">Komitmen Kami pada <span
              className="text-secondary">Keamanan &amp; Ketepatan</span></h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Di Banyu Bening Trans, kami memahami bahwa waktu Anda sangat berharga. Itulah sebabnya setiap operasional kami
            dirancang dengan presisi logistik yang tinggi. Mulai dari pemeliharaan rutin armada hingga pelatihan
            intensif pengemudi, kami memastikan setiap kilometer yang Anda tempuh bersama kami adalah definisi dari
            kenyamanan.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}><CheckCircle /></span>
              <span className="font-body-md font-semibold text-on-surface">Pengemudi Berlisensi &amp; Berpengalaman</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}><CheckCircle /></span>
              <span className="font-body-md font-semibold text-on-surface">Pemantauan GPS Real-Time</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}><CheckCircle /></span>
              <span className="font-body-md font-semibold text-on-surface">Armada Terbaru dengan Protokol Sanitasi Ketat</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
}