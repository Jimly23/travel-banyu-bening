import Image from "next/image";
import { ArrowRight, ArrowRightCircle, CheckCircle, ChevronDown, MapPin, Star } from "lucide-react";

export default function Rute() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="rute">
      <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl text-on-surface mb-4">Rute Terpopuler</h2>
              <p className="text-on-surface-variant">Kami melayani berbagai rute strategis di seluruh pulau Jawa dengan jadwal
                keberangkatan setiap jam.</p>
            </div>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-secondary">
                <div>
                  <h4 className="text-lg text-on-surface">Jakarta — Bandung</h4>
                  <p className="text-sm text-on-surface-variant">Estimasi 2.5 - 3 Jam (Via Tol Cipularang)</p>
                </div>
                <span className="material-symbols-outlined text-secondary"><ArrowRightCircle /></span>
              </div>
              <div
                className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-secondary">
                <div>
                  <h4 className="text-lg text-on-surface">Semarang — Yogyakarta</h4>
                  <p className="text-sm text-on-surface-variant">Estimasi 3 - 3.5 Jam (Via Tol Trans Jawa)</p>
                </div>
                <span className="material-symbols-outlined text-secondary"><ArrowRightCircle /></span>
              </div>
              <div
                className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-secondary">
                <div>
                  <h4 className="text-lg text-on-surface">Surabaya — Malang</h4>
                  <p className="text-sm text-on-surface-variant">Estimasi 1.5 - 2 Jam (Via Tol Mapan)</p>
                </div>
                <span className="material-symbols-outlined text-secondary"><ArrowRightCircle /></span>
              </div>
            </div>
            <button className="text-secondary font-bold flex items-center gap-2">Lihat Semua 25+ Rute <span
              className="material-symbols-outlined"><ChevronDown /></span></button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" data-location="Java Island, Indonesia"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUeSiQZsav6cabe1W6YVrsm5AmL39yOUZUqLoGWD3rjDTQFd5W_0DvONKh6E1OMfWPmu0u1GjBznHnTnWUNEJCRVSMUptz9FMAnRkPX7JwIfZezVkWVBKnf1CO8gzSacE8M8I8yHOyKVqYdzzHJJrb0AyFjEx6i5-agRJnkE_HRFT9gs5-LGk5rtEP1FVq3ftJkk1jKJ0cRU2yRJUqBMz8yssRFd-FJGEzdxCBkF00MxIAs99Wt8MSd52TzmM_WFRoI5WUD92lqeTd')" }}>
              </div>
              <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}