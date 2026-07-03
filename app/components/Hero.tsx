import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/unit1.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-max flex justify-center">
        <div className="max-w-3xl text-white/80 flex flex-col items-center text-center pt-12 md:pt-0">
          <span className="mb-6 hidden md:inline-block mb-10 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-md">
            Travel Premium & Antar Jemput
          </span>
          <h1 className="text-5xl">
            Perjalanan Nyaman,
            <br />
            <span className="text-secondary font-semibold">
              Tepat Waktu
            </span>{" "}
            Setiap Hari
          </h1>

          {/* Description */}
          <p className="mt-8 text-center max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Solusi travel antar kota, antar jemput bandara, carter kendaraan,
            dan pengiriman paket dengan armada terbaru, driver profesional.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="https://wa.me/6282329322353?text=Halo%BanyuBeningTrans!%20Saya%20ingin%20memesan%20layanan%20travel.%20Bisa%20tolong%20dibantu%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle size={20} />
              Pesan Sekarang
            </a>

            <a
              href="#rute"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Lihat Rute
              <ArrowRight size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}