"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Server,
  Code2,
  TrendingUp,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9EBDE] text-gray-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="relative w-40 h-14">
                <Image
                  src="/assets/logos/no-bg/logo-brown.png"
                  alt="Slaviors Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-800 mb-6 leading-relaxed">
              Slaviors Group adalah penyedia solusi digital terpercaya dengan
              teknologi modern. Kami menyediakan hosting, domain, website
              development, dan software solutions untuk mengembangkan bisnis dan
              kebutuhan digital Anda.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@slaviors.id"
                className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#815854] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#815854]" />
                <span>info@slaviors.id</span>
              </a>
              <a
                href="tel:+6283160581462"
                className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#815854] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#815854]" />
                <span>+62 831-6058-1462</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-800">
                <MapPin className="w-4 h-4 text-[#815854] mt-0.5 flex-shrink-0" />
                <span>Jl. Contoh No. 123, Yogyakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com/slaviors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-[#815854] hover:text-white hover:border-[#815854] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/slaviors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-[#815854] hover:text-white hover:border-[#815854] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/slaviors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-[#815854] hover:text-white hover:border-[#815854] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/slaviors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-[#815854] hover:text-white hover:border-[#815854] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@slaviors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-[#815854] hover:text-white hover:border-[#815854] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 flex items-center gap-2">
              <Server className="w-4 h-4 text-[#815854]" />
              Produk
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/produk/shared-hosting"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/cloud-hosting"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/vps"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/dedicated-server"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/email-hosting"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Email Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/ssl"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  SSL Certificate
                </Link>
              </li>
              <li>
                <Link
                  href="/domain"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Domain
                </Link>
              </li>
            </ul>
          </div>

          {/* Solusi */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#815854]" />
              Solusi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solusi/website"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solusi/software"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solusi/seo"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/solusi/maintenance"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Maintenance & Support
                </Link>
              </li>
            </ul>

            <h3 className="text-gray-900 font-semibold text-base mb-4 mt-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#815854]" />
              Perusahaan
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Blog & Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="/karir"
                  className="text-sm text-gray-800 hover:text-[#815854] transition-colors"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#815854]" />
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/support/ticket"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  Ticket Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  Kontak Kami
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/6283160581462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors flex items-center gap-1.5"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </li>
            </ul>

            <h3 className="text-gray-900 font-semibold text-base mb-4 mt-6">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sla"
                  className="text-sm text-gray-700 hover:text-[#815854] transition-colors"
                >
                  SLA Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods (Optional) */}
      <div className="border-t border-[#e5d5c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-800">
              <p className="font-medium text-gray-900 mb-2">
                Metode Pembayaran
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-800">
                  Bank Transfer
                </span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-800">
                  Virtual Account
                </span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-800">
                  E-Wallet
                </span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-800">
                  Credit Card
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e5d5c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
            <p>
              © {currentYear}{" "}
              <span className="text-gray-900 font-medium">Slaviors Group</span>.
              All rights reserved.
            </p>
            <p className="text-gray-600 hidden xl:block">
              <span className="text-[#815854] font-medium">
                Create The Future, with Slaviors
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
