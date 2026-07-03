import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";

export default function Price() {
  return (
    <section className="py-24 bg-surface" id="tarif">
      <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-on-surface mb-2">Tarif Transparan</h2>
          <p className="text-on-surface-variant">Harga flat tanpa biaya tersembunyi. Termasuk asuransi perjalanan.</p>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-outline-variant">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap min-w-[700px] lg:min-w-full">
              <thead className="bg-primary-container text-white">
              <tr>
                <th className="p-6 font-bold">Rute Perjalanan</th>
                <th className="p-6 font-bold">Unit Kendaraan</th>
                <th className="p-6 font-bold">Jenis Layanan</th>
                <th className="p-6 font-bold text-right">Mulai Dari</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant text-on-surface">
              <tr className="hover:bg-surface-container transition-colors">
                <td className="p-6">Jakarta — Bandung (PP)</td>
                <td className="p-6">Hiace Premio</td>
                <td className="p-6"><span
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase">Executive</span>
                </td>
                <td className="p-6 text-right font-bold text-xl">Rp 150.000</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="p-6">Jakarta — Bandara Soetta</td>
                <td className="p-6">Innova Zenix</td>
                <td className="p-6"><span
                  className="px-3 py-1 bg-primary-container/10 text-primary-container rounded-full text-xs font-bold uppercase">Private</span>
                </td>
                <td className="p-6 text-right font-bold text-xl">Rp 350.000</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="p-6">Semarang — Yogyakarta</td>
                <td className="p-6">Hiace Premio</td>
                <td className="p-6"><span
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase">Executive</span>
                </td>
                <td className="p-6 text-right font-bold text-xl">Rp 120.000</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="p-6">Surabaya — Malang</td>
                <td className="p-6">Hiace Premio</td>
                <td className="p-6"><span
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase">Executive</span>
                </td>
                <td className="p-6 text-right font-bold text-xl">Rp 100.000</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
        <p className="text-center mt-8 text-on-surface-variant text-sm">*Tarif sewaktu-waktu dapat berubah tergantung
          ketersediaan seat dan hari libur nasional.</p>
      </div>
    </section>
  );
}