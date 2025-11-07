"use client"
import { PageHero } from "@/components/ui/page-hero"

export default function SLAPage() {
  const lastUpdated = "8 November 2025"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Service Level Agreement (SLA)"
        description="Komitmen kami untuk memberikan layanan terbaik dengan jaminan uptime 99.9%, support 24/7, dan response time yang cepat untuk semua pelanggan Slaviors Group."
        lastUpdated={lastUpdated}
        backgroundImage="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Definisi */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Definisi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service Level Agreement (SLA) ini mendefinisikan tingkat layanan yang dijanjikan oleh 
                Slaviors Group kepada pelanggan kami. Dokumen ini mencakup jaminan uptime, response time, 
                dan kompensasi jika terjadi pelanggaran SLA.
              </p>
              <div className="bg-gray-50 border-l-4 border-[#815854] p-4 my-4">
                <p className="text-sm text-gray-700 font-medium">
                  <strong>Catatan:</strong> SLA ini berlaku untuk semua layanan hosting yang ditawarkan 
                  oleh Slaviors Group, termasuk Shared Hosting, Cloud Hosting, VPS, dan Dedicated Server.
                </p>
              </div>
            </div>

            {/* 2. Uptime Guarantee */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Jaminan Uptime</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Slaviors Group menjamin uptime server sebesar <strong>99.9%</strong> untuk semua layanan hosting. 
                Uptime dihitung berdasarkan waktu server dapat diakses dalam satu bulan kalender.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1. Perhitungan Uptime</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#F9EBDE]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Uptime Persentase
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Downtime Per Bulan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Kompensasi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">99.9% - 100%</td>
                      <td className="px-6 py-4 text-sm text-gray-700">0 - 43 menit</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Tidak ada</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">99.0% - 99.8%</td>
                      <td className="px-6 py-4 text-sm text-gray-700">44 menit - 7.2 jam</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#815854]">10% kredit layanan</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">95.0% - 98.9%</td>
                      <td className="px-6 py-4 text-sm text-gray-700">7.3 jam - 36 jam</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#815854]">25% kredit layanan</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">&lt; 95.0%</td>
                      <td className="px-6 py-4 text-sm text-gray-700">&gt; 36 jam</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#815854]">50% kredit layanan</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2. Pengecualian</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Downtime yang disebabkan oleh hal-hal berikut tidak termasuk dalam perhitungan SLA:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintenance terjadwal yang telah diinformasikan minimal 48 jam sebelumnya</li>
                <li>Force majeure (bencana alam, perang, terorisme, dll)</li>
                <li>Masalah yang disebabkan oleh pelanggan (misconfiguration, script error, dll)</li>
                <li>Serangan DDoS atau aktivitas malicious lainnya</li>
                <li>Masalah pada provider eksternal (DNS, CDN, dll)</li>
              </ul>
            </div>

            {/* 3. Response Time */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Waktu Respons Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami berkomitmen untuk merespons tiket support Anda dengan cepat sesuai dengan 
                tingkat prioritas masalah.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#F9EBDE]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Tingkat Prioritas
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Deskripsi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Response Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-red-600">Critical</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Server down, website tidak dapat diakses</td>
                      <td className="px-6 py-4 text-sm text-gray-700">15 menit</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-orange-600">High</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Masalah serius yang mempengaruhi operasional</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30 menit</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-yellow-600">Medium</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Masalah yang tidak menghambat operasional</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 jam</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-green-600">Low</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Pertanyaan umum dan request non-urgent</td>
                      <td className="px-6 py-4 text-sm text-gray-700">24 jam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Maintenance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Scheduled Maintenance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Maintenance terjadwal dilakukan untuk memastikan keamanan dan performa optimal server. 
                Kami akan memberikan notifikasi minimal <strong>48 jam</strong> sebelum maintenance dilakukan.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintenance window: Maksimal 4 jam per bulan</li>
                <li>Waktu pelaksanaan: Biasanya di luar jam sibuk (tengah malam)</li>
                <li>Notifikasi dikirim via email dan client area</li>
                <li>Emergency maintenance dapat dilakukan tanpa pemberitahuan jika diperlukan untuk keamanan</li>
              </ul>
            </div>

            {/* 5. Kompensasi */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Proses Klaim Kompensasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika terjadi pelanggaran SLA, Anda dapat mengajukan klaim kompensasi dengan ketentuan sebagai berikut:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1. Cara Mengajukan Klaim</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Buat tiket support dengan subject "SLA Claim"</li>
                <li>Sertakan bukti downtime (screenshot, monitoring report, dll)</li>
                <li>Ajukan klaim maksimal 7 hari setelah incident terjadi</li>
                <li>Tim kami akan melakukan verifikasi dalam 3-5 hari kerja</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2. Bentuk Kompensasi</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Kompensasi diberikan dalam bentuk <strong>service credit</strong></li>
                <li>Credit dapat digunakan untuk perpanjangan layanan atau upgrade</li>
                <li>Credit tidak dapat dicairkan dalam bentuk uang</li>
                <li>Credit berlaku selama 12 bulan sejak diterbitkan</li>
              </ul>
            </div>

            {/* 6. Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Monitoring & Reporting</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan sistem monitoring 24/7 untuk memastikan uptime server. Status server 
                dapat dilihat secara real-time di halaman status kami.
              </p>
              <div className="bg-[#F9EBDE] rounded-lg p-6 mt-4">
                <p className="text-gray-800 mb-3">
                  <strong>Cek Status Server:</strong>
                </p>
                <a 
                  href="/status" 
                  className="inline-block px-6 py-3 bg-[#815854] text-white font-semibold rounded-lg hover:bg-[#6d4a47] transition-colors"
                >
                  Lihat Status Server →
                </a>
              </div>
            </div>

            {/* 7. Kontak */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan mengenai SLA atau ingin mengajukan klaim, silakan hubungi kami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                  <a href="mailto:support@slaviors.id" className="text-[#815854] hover:underline">
                    support@slaviors.id
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Ticket System</h4>
                  <a href="/support/ticket" className="text-[#815854] hover:underline">
                    Buat Tiket Support
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