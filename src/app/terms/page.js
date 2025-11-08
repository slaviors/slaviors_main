"use client"

import { PageHero } from "@/components/ui/page-hero"
import { FileText, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  const lastUpdated = "8 November 2025"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        icon={FileText}
        title="Terms of Service"
        description="Syarat dan ketentuan penggunaan layanan Slaviors Group. Harap membaca dengan seksama sebelum menggunakan layanan kami untuk memahami hak dan kewajiban Anda sebagai pelanggan."
        lastUpdated={lastUpdated}
        backgroundImage="https://images.pexels.com/photos/7821913/pexels-photo-7821913.jpeg"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="bg-[#F9EBDE] border-l-4 border-[#815854] p-6 my-6 rounded-r-lg">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>Penting:</strong> Dengan menggunakan layanan Slaviors Group, Anda dianggap telah 
                  membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum dalam dokumen ini. 
                  Jika Anda tidak setuju dengan syarat dan ketentuan ini, mohon untuk tidak menggunakan layanan kami.
                </p>
              </div>
            </div>

            {/* 1. Definisi */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Definisi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dalam dokumen ini, beberapa istilah memiliki arti sebagai berikut:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                  <div>
                    <strong>"Kami", "Kita", "Slaviors"</strong> merujuk pada Slaviors Group dan seluruh entitas bisnisnya.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                  <div>
                    <strong>"Anda", "Pelanggan", "Pengguna"</strong> merujuk pada individu atau entitas yang menggunakan layanan kami.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                  <div>
                    <strong>"Layanan"</strong> merujuk pada semua produk dan layanan yang ditawarkan oleh Slaviors Group, termasuk hosting, domain, website development, dan software solutions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                  <div>
                    <strong>"Akun"</strong> merujuk pada akun pelanggan yang terdaftar di sistem kami untuk mengakses dan mengelola layanan.
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Penerimaan Syarat */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Penerimaan Syarat</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dengan mendaftar, mengakses, atau menggunakan layanan Slaviors Group, Anda setuju untuk terikat 
                dengan syarat dan ketentuan ini serta kebijakan lain yang berlaku, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Privacy Policy (Kebijakan Privasi)</li>
                <li>Service Level Agreement (SLA)</li>
                <li>Acceptable Use Policy (AUP)</li>
                <li>Refund Policy (Kebijakan Pengembalian Dana)</li>
              </ul>
            </div>

            {/* 3. Pendaftaran Akun */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Pendaftaran Akun</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">3.1. Persyaratan Pendaftaran</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk menggunakan layanan kami, Anda harus:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Berusia minimal 18 tahun atau memiliki izin dari orang tua/wali</li>
                <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                <li>Menjaga keamanan username dan password Anda</li>
                <li>Bertanggung jawab atas semua aktivitas yang terjadi pada akun Anda</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">3.2. Verifikasi Identitas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami berhak meminta verifikasi identitas kapan saja untuk mencegah fraud dan menjaga keamanan. 
                Verifikasi dapat berupa KTP, NPWP, atau dokumen resmi lainnya.
              </p>
            </div>

            {/* 4. Penggunaan Layanan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Penggunaan Layanan</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">4.1. Penggunaan yang Diperbolehkan</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Website bisnis dan corporate yang legal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Blog, forum, dan portal berita</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">E-commerce dan toko online resmi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Aplikasi web dan SaaS yang legal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Portfolio, landing page, dan website personal</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">4.2. Penggunaan yang Dilarang</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Konten Ilegal:</strong> Website yang mempromosikan aktivitas ilegal, pornografi, perjudian ilegal, atau narkoba</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Spam & Phishing:</strong> Mengirim spam, phishing, atau email massal yang tidak diminta</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Malware & Hacking:</strong> Menyimpan atau mendistribusikan malware, virus, atau tools hacking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Pelanggaran Hak Cipta:</strong> Menyimpan atau mendistribusikan konten yang melanggar hak cipta (warez, pirated software, dll)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Resource Abuse:</strong> Menggunakan resource server secara berlebihan yang mengganggu pengguna lain</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Cryptocurrency Mining:</strong> Menjalankan mining cryptocurrency tanpa izin tertulis</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    <strong>Peringatan:</strong> Pelanggaran terhadap kebijakan penggunaan dapat mengakibatkan 
                    suspend atau terminate akun tanpa pemberitahuan dan tanpa pengembalian dana.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Pembayaran dan Penagihan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Pembayaran dan Penagihan</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">5.1. Harga dan Pajak</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semua harga yang tercantum di website kami sudah dalam Rupiah (IDR) dan belum termasuk PPN 11%. 
                Kami berhak mengubah harga kapan saja tanpa pemberitahuan sebelumnya.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">5.2. Metode Pembayaran</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menerima pembayaran melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                <li>Virtual Account</li>
                <li>E-Wallet (GoPay, OVO, Dana, ShopeePay)</li>
                <li>Credit Card (Visa, Mastercard)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">5.3. Jatuh Tempo dan Pembayaran</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Layanan harus dibayar sebelum atau pada tanggal jatuh tempo. Keterlambatan pembayaran dapat 
                mengakibatkan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>7 hari:</strong> Reminder pertama via email</li>
                <li><strong>14 hari:</strong> Suspend layanan (website tidak dapat diakses)</li>
                <li><strong>30 hari:</strong> Terminate layanan dan data akan dihapus permanen</li>
              </ul>
            </div>

            {/* 6. Perpanjangan dan Pembatalan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Perpanjangan dan Pembatalan</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">6.1. Perpanjangan Otomatis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Layanan akan diperpanjang otomatis sesuai periode billing (bulanan/tahunan) kecuali Anda 
                melakukan pembatalan minimal 7 hari sebelum tanggal perpanjangan.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">6.2. Pembatalan Layanan</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk membatalkan layanan, Anda harus mengajukan permintaan pembatalan melalui client area 
                atau tiket support. Pembatalan yang disetujui akan berlaku pada akhir periode billing.
              </p>
            </div>

            {/* 7. Backup dan Keamanan Data */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Backup dan Keamanan Data</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">7.1. Backup Server</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami melakukan backup server secara berkala, namun <strong>tidak menjamin</strong> backup 
                dapat dipulihkan 100%. Anda bertanggung jawab untuk membuat backup sendiri secara teratur.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">7.2. Keamanan Akun</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anda bertanggung jawab untuk menjaga keamanan akun, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Menggunakan password yang kuat dan unik</li>
                <li>Tidak membagikan credential login kepada pihak lain</li>
                <li>Mengaktifkan Two-Factor Authentication (2FA) jika tersedia</li>
                <li>Melaporkan aktivitas mencurigakan segera ke tim kami</li>
              </ul>
            </div>

            {/* 8. Batasan Tanggung Jawab */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Slaviors Group tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Kehilangan data akibat kelalaian pelanggan</li>
                <li>Downtime yang disebabkan oleh force majeure</li>
                <li>Kerugian finansial akibat website tidak dapat diakses</li>
                <li>Konten yang di-upload oleh pelanggan ke server</li>
                <li>Pelanggaran hukum yang dilakukan oleh pelanggan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Total tanggung jawab kami terbatas pada jumlah yang telah dibayarkan untuk layanan 
                dalam 3 bulan terakhir.
              </p>
            </div>

            {/* 9. Hak Kekayaan Intelektual */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semua konten di website Slaviors Group, termasuk logo, design, dan software, dilindungi 
                oleh hak cipta dan tidak boleh digunakan tanpa izin tertulis dari kami.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Konten yang Anda upload ke server tetap menjadi milik Anda, namun Anda memberikan lisensi 
                kepada kami untuk menyimpan dan menampilkan konten tersebut sebagai bagian dari layanan.
              </p>
            </div>

            {/* 10. Perubahan Syarat dan Ketentuan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">10. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif 
                setelah dipublikasikan di website. Kami akan memberikan notifikasi via email untuk perubahan 
                yang signifikan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan terus menggunakan layanan setelah perubahan, Anda dianggap menyetujui syarat dan 
                ketentuan yang baru.
              </p>
            </div>

            {/* 11. Kontak */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">11. Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:legal@slaviors.id" className="text-[#815854] hover:underline break-all">
                    legal@slaviors.id
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                  <a href="/support/ticket" className="text-[#815854] hover:underline">
                    Buat Tiket Support
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F9EBDE] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Siap Memulai?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Daftar sekarang dan dapatkan layanan hosting terbaik dengan jaminan SLA 99.9%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="px-6 sm:px-8 py-3 bg-[#815854] text-white font-semibold rounded-lg hover:bg-[#6d4a47] transition-colors text-sm sm:text-base"
            >
              Daftar Sekarang
            </a>
            <a
              href="/harga"
              className="px-6 sm:px-8 py-3 bg-white text-[#815854] font-semibold border-2 border-[#815854] rounded-lg hover:bg-[#815854] hover:text-white transition-colors text-sm sm:text-base"
            >
              Lihat Harga
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}