import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Send, SendHorizonal, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container py-24">
    <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-3xl">BanyuBening.</span>
          </div>
          <p className="text-on-primary-container/80 text-sm leading-relaxed">
            Layanan transportasi antar-jemput profesional dengan fokus pada ketepatan waktu, kenyamanan, dan keselamatan
            penumpang di setiap perjalanan.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold">Perusahaan</h4>
          <ul className="space-y-4">
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Tentang Kami</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Karir</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Berita &amp; Media</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Kerjasama Mitra</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold">Dukungan</h4>
          <ul className="space-y-4">
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Bantuan</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Pusat Informasi</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Kebijakan Privasi</a></li>
            <li><a
                className="text-on-primary-container/80 hover:text-on-primary hover:underline transition-all font-body-md"
                href="#">Syarat &amp; Ketentuan</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold">Newsletter</h4>
          <p className="text-sm text-on-primary-container/80">Dapatkan info promo rute baru setiap bulannya.</p>
          <div className="relative">
            <input
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-secondary focus:border-secondary outline-none"
              placeholder="Email Anda" type="email" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary">
              <span className="material-symbols-outlined"><SendHorizonal /></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-primary-container/60">
        <p>© 2026 Banyu Bening Trans. Seluruh Hak Cipta Dilindungi.</p>
        <div className="flex gap-8">
          <a href="#">Sitemap</a>
          <a href="#">Security</a>
          <a href="#">Compliance</a>
        </div>
      </div>
    </div>
  </footer>
  );
}