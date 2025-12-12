"use client"

import { PageHero } from "@/components/ui/page-hero"
import { Lock, Eye, Shield, Database, Users, Bell, FileText, Trash2 } from "lucide-react"

export default function PrivacyPage() {
  const lastUpdated = "8 November 2025"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        icon={Lock}
        title="Privacy Policy"
        description="Kebijakan privasi Slaviors Group menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Kami berkomitmen untuk menjaga kerahasiaan dan keamanan informasi Anda."
        lastUpdated={lastUpdated}
        backgroundImage="https://images.pexels.com/photos/4160125/pexels-photo-4160125.jpeg"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="bg-[#F9EBDE] border-l-4 border-[#815854] p-6 my-6 rounded-r-lg">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>Komitmen Kami:</strong> Slaviors Group menghormati privasi Anda dan berkomitmen untuk 
                  melindungi data pribadi yang Anda berikan kepada kami. Kebijakan privasi ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda sesuai 
                  dengan peraturan perundang-undangan yang berlaku di Indonesia.
                </p>
              </div>
            </div>

            {/* 1. Informasi yang Kami Kumpulkan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-7 h-7 text-[#815854]" />
                1. Informasi yang Kami Kumpulkan
              </h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">1.1. Informasi Pribadi</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami mengumpulkan informasi pribadi yang Anda berikan secara langsung saat:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                    <div>
                      <strong>Pendaftaran Akun:</strong> Nama lengkap, email, nomor telepon, alamat
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                    <div>
                      <strong>Verifikasi Identitas:</strong> KTP, NPWP, atau dokumen resmi lainnya
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                    <div>
                      <strong>Pembayaran:</strong> Informasi billing, metode pembayaran, riwayat transaksi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-[#815854] mt-1 flex-shrink-0" />
                    <div>
                      <strong>Komunikasi:</strong> Email, chat, tiket support yang Anda kirimkan kepada kami
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">1.2. Informasi Teknis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami secara otomatis mengumpulkan informasi teknis saat Anda menggunakan layanan kami:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Alamat IP dan lokasi geografis</li>
                <li>Browser dan device information</li>
                <li>Sistem operasi yang digunakan</li>
                <li>Halaman yang dikunjungi dan waktu akses</li>
                <li>Referral URL dan search queries</li>
                <li>Cookies dan tracking technologies</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">1.3. Informasi dari Pihak Ketiga</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami dapat menerima informasi dari pihak ketiga seperti payment gateway, 
                fraud detection services, dan marketing partners untuk keperluan verifikasi dan keamanan.
              </p>
            </div>

            {/* 2. Bagaimana Kami Menggunakan Informasi */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-7 h-7 text-[#815854]" />
                2. Bagaimana Kami Menggunakan Informasi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F9EBDE] rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#815854]" />
                    Layanan & Keamanan
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Menyediakan dan mengelola layanan</li>
                    <li>• Memproses pembayaran dan billing</li>
                    <li>• Mencegah fraud dan abuse</li>
                    <li>• Verifikasi identitas pelanggan</li>
                  </ul>
                </div>

                <div className="bg-[#F9EBDE] rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[#815854]" />
                    Komunikasi
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mengirim notifikasi layanan</li>
                    <li>• Merespons support requests</li>
                    <li>• Update produk dan promosi</li>
                    <li>• Survey kepuasan pelanggan</li>
                  </ul>
                </div>

                <div className="bg-[#F9EBDE] rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#815854]" />
                    Analisis & Perbaikan
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Menganalisis penggunaan layanan</li>
                    <li>• Meningkatkan user experience</li>
                    <li>• Mengembangkan fitur baru</li>
                    <li>• Monitoring performa server</li>
                  </ul>
                </div>

                <div className="bg-[#F9EBDE] rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#815854]" />
                    Kepatuhan Hukum
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mematuhi regulasi yang berlaku</li>
                    <li>• Merespons permintaan penegak hukum</li>
                    <li>• Melindungi hak dan keamanan</li>
                    <li>• Menyelesaikan sengketa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Bagaimana Kami Melindungi Informasi */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-7 h-7 text-[#815854]" />
                3. Bagaimana Kami Melindungi Informasi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#F9EBDE]">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Keamanan
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Implementasi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">Enkripsi</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">SSL/TLS 256-bit untuk transmisi data</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">Firewall</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">WAF dan network security yang canggih</td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">Access Control</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Akses terbatas hanya untuk staff authorized</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">Monitoring</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">24/7 security monitoring dan intrusion detection</td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">Data Storage</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Server tersimpan di data center tier-3 di Indonesia</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <p className="text-sm text-gray-700">
                  <strong>Catatan:</strong> Meskipun kami menerapkan standar keamanan tinggi, tidak ada sistem 
                  yang 100% aman. Anda juga bertanggung jawab untuk menjaga kerahasiaan password dan informasi login Anda.
                </p>
              </div>
            </div>

            {/* 4. Berbagi Informasi dengan Pihak Ketiga */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Berbagi Informasi dengan Pihak Ketiga</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami tidak menjual atau menyewakan data pribadi Anda. Namun, kami dapat berbagi informasi dengan:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">4.1. Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pihak ketiga yang membantu kami menyediakan layanan, seperti:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Payment gateway (Xendit, Midtrans, dll)</li>
                <li>Email service providers (untuk notifikasi)</li>
                <li>Cloud infrastructure providers</li>
                <li>Analytics dan monitoring tools</li>
                <li>Customer support platforms</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">4.2. Keperluan Hukum</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum atau untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mematuhi proses hukum (pengadilan, kepolisian, dll)</li>
                <li>Melindungi hak, properti, atau keamanan Slaviors Group</li>
                <li>Mencegah atau menyelidiki fraud atau pelanggaran</li>
                <li>Melindungi keamanan pengguna lain</li>
              </ul>
            </div>

            {/* 5. Cookies dan Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Cookies dan Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Jenis Cookies yang Kami Gunakan:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Essential Cookies</p>
                    <p className="text-sm text-gray-700">Diperlukan untuk fungsi dasar website (login, keranjang, dll)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Analytics Cookies</p>
                    <p className="text-sm text-gray-700">Membantu kami memahami bagaimana pengunjung menggunakan website</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Marketing Cookies</p>
                    <p className="text-sm text-gray-700">Digunakan untuk menampilkan iklan yang relevan dengan Anda</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Preference Cookies</p>
                    <p className="text-sm text-gray-700">Menyimpan preferensi Anda (bahasa, tema, dll)</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengelola atau menghapus cookies melalui pengaturan browser Anda. Namun, 
                menonaktifkan cookies dapat mempengaruhi fungsionalitas website.
              </p>
            </div>

            {/* 6. Hak Anda */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Hak Anda atas Data Pribadi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sesuai dengan peraturan perlindungan data, Anda memiliki hak untuk:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#815854]" />
                    Akses Data
                  </h4>
                  <p className="text-sm text-gray-700">
                    Meminta salinan data pribadi yang kami simpan tentang Anda
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#815854]" />
                    Koreksi Data
                  </h4>
                  <p className="text-sm text-gray-700">
                    Memperbarui atau memperbaiki data yang tidak akurat
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-[#815854]" />
                    Penghapusan Data
                  </h4>
                  <p className="text-sm text-gray-700">
                    Meminta penghapusan data dalam kondisi tertentu
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#815854]" />
                    Pembatasan
                  </h4>
                  <p className="text-sm text-gray-700">
                    Membatasi pemrosesan data pribadi Anda
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk menggunakan hak-hak di atas, silakan hubungi kami di:
              </p>
              <div className="bg-[#F9EBDE] rounded-lg p-6">
                <p className="text-gray-800">
                  <strong>Email:</strong> <a href="mailto:privacy@slaviors.id" className="text-[#815854] hover:underline">privacy@slaviors.id</a>
                </p>
              </div>
            </div>

            {/* 7. Retensi Data */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Retensi Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menyimpan data pribadi Anda selama:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Akun masih aktif dan menggunakan layanan kami</li>
                <li>Diperlukan untuk menyediakan layanan yang Anda minta</li>
                <li>Diperlukan untuk mematuhi kewajiban hukum</li>
                <li>Diperlukan untuk menyelesaikan sengketa atau menegakkan perjanjian</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Setelah akun ditutup, kami akan menghapus atau anonymize data Anda dalam waktu <strong>90 hari</strong>, 
                kecuali jika diwajibkan oleh hukum untuk menyimpannya lebih lama.
              </p>
            </div>

            {/* 8. Transfer Data Internasional */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Transfer Data Internasional</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Server kami berlokasi di Indonesia. Namun, beberapa service providers kami mungkin berlokasi 
                di luar Indonesia. Kami memastikan bahwa transfer data internasional dilakukan dengan standar 
                keamanan yang sesuai dan mematuhi regulasi yang berlaku.
              </p>
            </div>

            {/* 9. Privasi Anak-anak */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Privasi Anak-anak</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Layanan kami tidak ditujukan untuk anak-anak di bawah usia 18 tahun. Kami tidak dengan sengaja 
                mengumpulkan data pribadi dari anak-anak. Jika Anda adalah orang tua dan mengetahui bahwa anak 
                Anda telah memberikan data pribadi kepada kami, silakan hubungi kami.
              </p>
            </div>

            {/* 10. Perubahan Kebijakan */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">10. Perubahan Kebijakan Privasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan 
                dinotifikasikan melalui email atau notifikasi di website. Kami mendorong Anda untuk meninjau 
                halaman ini secara berkala.
              </p>
            </div>

            {/* 11. Kontak */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">11. Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan privasi ini, silakan hubungi:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                  <a href="mailto:privacy@slaviors.id" className="text-[#815854] hover:underline break-all">
                    privacy@slaviors.id
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                  <p className="text-sm text-gray-700">
                    Jl. Contoh No. 123<br />
                    Yogyakarta, Indonesia
                  </p>
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
            Punya Pertanyaan tentang Privasi?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Tim kami siap membantu menjawab pertanyaan Anda tentang perlindungan data pribadi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@slaviors.id"
              className="px-6 sm:px-8 py-3 bg-[#815854] text-white font-semibold rounded-lg hover:bg-[#6d4a47] transition-colors text-sm sm:text-base"
            >
              Hubungi Privacy Team
            </a>
            <a
              href="/support/ticket"
              className="px-6 sm:px-8 py-3 bg-white text-[#815854] font-semibold border-2 border-[#815854] rounded-lg hover:bg-[#815854] hover:text-white transition-colors text-sm sm:text-base"
            >
              Buat Tiket Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}