import Image from "next/image";
import { ArrowRight, BoxIcon, CheckCircle, MapPin, MapPinHouse, PlaneTakeoff, Star } from "lucide-react";

export default function Service() {
  return (
    <section className="py-24 bg-surface" id="layanan">
    <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
      <div className="text-left mb-16 space-y-4">
        <h2 className="text-3xl text-on-surface">Layanan Unggulan Kami</h2>
        <p className="text-on-primary-container/80 max-w-lg">
              Kami menggunakan kendaraan terbaru yang dirawat secara
              berkala demi menjamin kenyamanan maksimal Anda.
            </p>
      </div>
      <div className="grid md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant travel-card">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined text-3xl"><PlaneTakeoff /></span>
          </div>
          <h3 className="text-on-surface text-lg mb-3">Antar-Jemput Bandara</h3>
          <p className="text-on-surface-variant mb-6">Layanan jemput tepat waktu dari rumah Anda langsung ke terminal
            keberangkatan Bandara Internasional.</p>
          <a className="text-secondary font-bold inline-flex items-center gap-1 hover:gap-3 transition-all" href="#">Pesan
            Sekarang <span className="material-symbols-outlined"><ArrowRight /></span></a>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant travel-card">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined text-3xl"><MapPinHouse /></span>
          </div>
          <h3 className="text-on-surface text-lg mb-3">Travel Antar Kota</h3>
          <p className="text-on-surface-variant mb-6">Rute reguler setiap hari menghubungkan kota-kota besar dengan jadwal
            yang fleksibel dan efisien.</p>
          <a className="text-secondary font-bold inline-flex items-center gap-1 hover:gap-3 transition-all" href="#">Cek
            Jadwal <span className="material-symbols-outlined"><ArrowRight/></span></a>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant travel-card">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined text-3xl"><BoxIcon /></span>
          </div>
          <h3 className="text-on-surface text-lg mb-3">Titipan Paket Kilat</h3>
          <p className="text-on-surface-variant mb-6">Kirim paket dokumen atau barang kecil Anda dalam hitungan jam antar
            kota melalui armada shuttle kami.</p>
          <a className="text-secondary font-bold inline-flex items-center gap-1 hover:gap-3 transition-all" href="#">Info
            Tarif <span className="material-symbols-outlined"><ArrowRight/></span></a>
        </div>
      </div>
    </div>
  </section>
  );
}