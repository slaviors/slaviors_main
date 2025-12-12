"use client"

import { PageHero } from "@/components/ui/page-hero"
import { DollarSign, CheckCircle, XCircle, Clock, AlertTriangle, FileText, RefreshCw } from "lucide-react"

export default function RefundPage() {
  const lastUpdated = "8 November 2025"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        icon={DollarSign}
        title="Refund Policy"
        description="Kebijakan pengembalian dana Slaviors Group. Kami berkomitmen untuk memberikan pelayanan terbaik dan memiliki kebijakan refund yang fair dan transparan untuk kepuasan pelanggan."
        lastUpdated={lastUpdated}
        backgroundImage="https://images.pexels.com/photos/31679223/pexels-photo-31679223.jpeg"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="bg-[#F9EBDE] border-l-4 border-[#815854] p-6 my-6 rounded-r-lg">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>Komitmen Kami:</strong> Slaviors Group ingin memastikan kepuasan Anda. Jika Anda tidak puas 
                  dengan layanan kami, kebijakan refund ini menjelaskan kondisi dan prosedur pengembalian dana yang dapat 
                  Anda ajukan sesuai dengan syarat dan ketentuan yang berlaku.
                </p>
              </div>
            </div>

            {/* 1. Money Back Guarantee */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <RefreshCw className="w-7 h-7 text-[#815854]" />
                1. Money Back Guarantee
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">30 Hari Money Back Guarantee</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Kami menawarkan jaminan uang kembali <strong>100%</strong> untuk pembelian hosting baru 
                      (Shared Hosting, Cloud Hosting, VPS, Dedicated Server) dalam <strong>30 hari pertama</strong>.
                    </p>
                    <p className="text-sm text-gray-600">
                      * Berlaku untuk pembelian pertama kali, tidak termasuk domain, SSL, dan layanan tambahan lainnya.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">1.1. Syarat Money Back Guarantee</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Berlaku untuk pembelian <strong>baru</strong> (first-time purchase)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pengajuan refund dalam <strong>30 hari</strong> sejak tanggal pembelian</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tidak melanggar Terms of Service atau Acceptable Use Policy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Bandwidth usage tidak melebihi 10GB atau reasonable use</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Memberikan alasan yang jelas untuk refund request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Layanan yang Dapat Di-refund */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Layanan yang Dapat Di-refund</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Dapat di-refund */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Dapat Di-refund
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Shared Hosting (dalam 30 hari)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Cloud Hosting (dalam 30 hari)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>VPS Hosting (dalam 30 hari)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Dedicated Server (dalam 30 hari)</span>
                    </li>
                  </ul>
                </div>

                {/* Tidak dapat di-refund */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                    Tidak Dapat Di-refund
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Domain registration & transfer</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>SSL Certificate</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Setup fees & administrative fees</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Google Workspace / Email Hosting</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Website Development Services</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Software Development Services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    <strong>Catatan Penting:</strong> Domain yang dibeli bersamaan dengan hosting tidak dapat di-refund 
                    karena biaya domain telah dibayarkan ke registrar. Namun, domain akan tetap aktif sesuai periode 
                    yang telah dibayarkan.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Kondisi yang Tidak Berlaku untuk Refund */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Kondisi yang Tidak Berlaku untuk Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund <strong>tidak dapat diproses</strong> jika:
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Pelanggaran TOS:</strong> Akun telah melanggar Terms of Service atau Acceptable Use Policy
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Suspended/Terminated:</strong> Akun telah di-suspend atau di-terminate karena pelanggaran
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Excessive Usage:</strong> Bandwidth atau resource usage melebihi batas reasonable use
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Lewat Periode:</strong> Pengajuan refund setelah 30 hari sejak pembelian
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Renewal:</strong> Pembayaran perpanjangan (renewal) tidak termasuk money back guarantee
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Fraud/Chargeback:</strong> Melakukan chargeback atau aktivitas fraud
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Cara Mengajukan Refund */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-7 h-7 text-[#815854]" />
                4. Cara Mengajukan Refund
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk mengajukan refund, ikuti langkah-langkah berikut:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="divide-y divide-gray-200">
                  {/* Step 1 */}
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#815854] text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Login ke Client Area</h4>
                        <p className="text-sm text-gray-700">
                          Akses client area Anda di <a href="/dashboard" className="text-[#815854] hover:underline">dashboard</a> menggunakan 
                          credential yang terdaftar.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#815854] text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Buat Tiket Support</h4>
                        <p className="text-sm text-gray-700">
                          Buka menu <strong>Support → New Ticket</strong> dan pilih department <strong>"Billing"</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#815854] text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Lengkapi Informasi</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Subject: <strong>"Refund Request - [Nama Layanan]"</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                          Sertakan: Invoice number, alasan refund, dan informasi rekening bank untuk transfer.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#815854] text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Tunggu Verifikasi</h4>
                        <p className="text-sm text-gray-700">
                          Tim billing kami akan meninjau request Anda dalam <strong>1-3 hari kerja</strong>. 
                          Anda akan menerima email konfirmasi setelah verifikasi selesai.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#815854] text-white rounded-full flex items-center justify-center font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Proses Refund</h4>
                        <p className="text-sm text-gray-700">
                          Setelah disetujui, dana akan ditransfer ke rekening Anda dalam <strong>7-14 hari kerja</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Timeline Proses Refund */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="w-7 h-7 text-[#815854]" />
                5. Timeline Proses Refund
              </h2>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#F9EBDE]">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Tahap
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Waktu Estimasi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Pengajuan refund request</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Instant (via tiket)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Review & verifikasi</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-[#815854]">1-3 hari kerja</td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Approval & processing</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">1-2 hari kerja</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">Transfer ke rekening</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-[#815854]">7-14 hari kerja</td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-gray-900">Total waktu proses</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-bold text-[#815854]">10-20 hari kerja</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Metode Pengembalian Dana */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Metode Pengembalian Dana</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dana refund akan dikembalikan melalui:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transfer Bank</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Refund akan ditransfer ke rekening bank yang Anda daftarkan.
                  </p>
                  <p className="text-xs text-gray-600">
                    * Pastikan nama rekening sesuai dengan nama akun
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Metode Pembayaran Original</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Untuk pembayaran via credit card atau e-wallet, refund akan dikembalikan ke metode pembayaran original.
                  </p>
                  <p className="text-xs text-gray-600">
                    * Waktu proses tergantung provider payment
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Biaya Admin */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Biaya Administrasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Slaviors Group <strong>tidak mengenakan biaya administrasi</strong> untuk proses refund yang disetujui. 
                Anda akan menerima 100% dari jumlah yang Anda bayarkan untuk layanan hosting.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Catatan:</strong> Biaya transfer bank (jika ada) ditanggung oleh pelanggan. 
                  Biaya domain dan layanan tambahan yang tidak dapat di-refund akan dikurangi dari total refund.
                </p>
              </div>
            </div>

            {/* 8. Pembatalan Akun */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Pembatalan Akun Setelah Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Setelah refund diproses:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Layanan hosting akan segera dihentikan (terminated)</li>
                <li>Semua data di server akan dihapus permanen dalam 7 hari</li>
                <li>Akses ke control panel dan email akan dinonaktifkan</li>
                <li>Domain (jika ada) akan tetap aktif hingga masa berlaku berakhir</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    <strong>Backup Data Anda:</strong> Pastikan Anda sudah mem-backup semua data sebelum mengajukan 
                    refund, karena data tidak dapat dipulihkan setelah akun di-terminate.
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Kontak */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Hubungi Tim Billing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan mengenai refund policy atau ingin mengajukan refund:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Email Billing</h4>
                  <a href="mailto:billing@slaviors.id" className="text-[#815854] hover:underline break-all">
                    billing@slaviors.id
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Support Ticket</h4>
                  <a href="/support/ticket" className="text-[#815854] hover:underline">
                    Buat Tiket Billing
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}