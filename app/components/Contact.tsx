import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="py-24 bg-surface-container-lowest"
    >
      <div className="max-w-max mx-auto md:px-margin-desktop px-margin-mobile">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl text-on-surface mb-4">
            Siap Menemani Perjalanan Anda
          </h2>

          <p className="max-w-2xl mx-auto text-on-surface-variant">
            Hubungi tim kami untuk pemesanan travel, layanan antar
            jemput bandara, carter kendaraan, maupun informasi
            lainnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="">

            <h3 className="text-2xl text-on-surface mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin
                    className="text-secondary"
                    size={22}
                  />
                </div>

                <div>
                  <p className="font-semibold text-on-surface">
                    Alamat
                  </p>

                  <p className="text-on-surface-variant">
                    Jl. Raya Sirampog,
                    Kabupaten Brebes, Jawa Tengah
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone
                    className="text-secondary"
                    size={22}
                  />
                </div>

                <div>
                  <p className="font-semibold text-on-surface">
                    Telepon
                  </p>

                  <p className="text-on-surface-variant">
                    +62 823-2932-2353
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock
                    className="text-secondary"
                    size={22}
                  />
                </div>

                <div>
                  <p className="font-semibold text-on-surface">
                    Jam Operasional
                  </p>

                  <p className="text-on-surface-variant">
                    Setiap Hari, 06.00 - 22.00 WIB
                  </p>
                </div>
              </div>

            </div>

            {/* CTA WhatsApp */}

            <a
              href="https://wa.me/6282329322353?text=Halo%20BanyuBeningTrans!%20Saya%20ingin%20memesan%20layanan%20travel.%20Bisa%20tolong%20dibantu%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </a>
          </div>

          {/* Google Maps */}

          <div className="overflow-hidden rounded-3xl shadow-sm min-h-[400px]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.665178291702!2d109.0537469!3d-7.2060873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f8e0fb5a94739%3A0xc8a7bed8fd53da3d!2sBanyu%20Bening%20Trans%20%26%20Travel!5e1!3m2!1sid!2sid!4v1783087644155!5m2!1sid!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}