"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Menu, X, ShoppingCart, User, Globe, 
  Server, Cloud, Cpu, HardDrive, Mail, Shield, 
  Code2, Sparkles, TrendingUp, Wrench,
  BookOpen, Headphones, MessageCircle, Phone,
  ChevronDown
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const produkItems = [
  {
    title: "Shared Hosting",
    href: "/produk/shared-hosting",
    description: "Hosting murah dan handal untuk website personal dan bisnis kecil.",
    icon: Server,
  },
  {
    title: "Cloud Hosting",
    href: "/produk/cloud-hosting",
    description: "Performa tinggi dengan teknologi cloud yang scalable dan aman.",
    icon: Cloud,
  },
  {
    title: "VPS Hosting",
    href: "/produk/vps",
    description: "Virtual Private Server dengan full control dan resource dedicated.",
    icon: Cpu,
  },
  {
    title: "Dedicated Server",
    href: "/produk/dedicated-server",
    description: "Server fisik khusus untuk aplikasi enterprise yang demanding.",
    icon: HardDrive,
  },
  {
    title: "Email Hosting",
    href: "/produk/email-hosting",
    description: "Email profesional dengan domain sendiri dan Google Workspace.",
    icon: Mail,
  },
  {
    title: "SSL Certificate",
    href: "/produk/ssl",
    description: "Sertifikat SSL untuk keamanan dan kepercayaan website Anda.",
    icon: Shield,
  },
]

const solusiItems = [
  {
    title: "Website Development",
    href: "/solusi/website",
    description: "Pembuatan website modern dengan teknologi Next.js dan React.",
    icon: Code2,
  },
  {
    title: "Software Development",
    href: "/solusi/software",
    description: "Aplikasi custom dan sistem informasi management untuk bisnis.",
    icon: Sparkles,
  },
  {
    title: "SEO & Digital Marketing",
    href: "/solusi/seo",
    description: "Optimasi website dan strategi marketing untuk tingkatkan traffic.",
    icon: TrendingUp,
  },
  {
    title: "Maintenance & Support",
    href: "/solusi/maintenance",
    description: "Layanan maintenance website dan technical support 24/7.",
    icon: Wrench,
  },
]

const supportItems = [
  {
    title: "Knowledge Base",
    href: "/support/kb",
    description: "Panduan lengkap dan tutorial untuk menggunakan layanan kami.",
    icon: BookOpen,
  },
  {
    title: "Blog & Tutorial",
    href: "/blog",
    description: "Artikel, tips, dan tutorial seputar web development dan hosting.",
    icon: BookOpen,
  },
  {
    title: "Ticket Support",
    href: "/support/ticket",
    description: "Buat tiket support untuk bantuan teknis dari tim kami.",
    icon: Headphones,
  },
  {
    title: "Live Chat",
    href: "https://wa.me/6281234567890",
    description: "Chat langsung dengan tim support via WhatsApp.",
    icon: MessageCircle,
  },
  {
    title: "Kontak Kami",
    href: "/kontak",
    description: "Hubungi kami melalui email, telepon, atau kunjungi kantor.",
    icon: Phone,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [language, setLanguage] = React.useState("ID")
  const [cartCount, setCartCount] = React.useState(0)
  const [openMobileDropdown, setOpenMobileDropdown] = React.useState(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "ID" ? "EN" : "ID")
  }

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slideDown border-b border-gray-100",
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/logos/no-bg/logo-brown.png"
                  alt="Slaviors Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium">
                      Produk
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[650px] gap-2 p-4 md:grid-cols-2">
                        {produkItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium">
                      Solusi
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[550px] gap-2 p-4 md:grid-cols-2">
                        {solusiItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/harga" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-[15px] font-medium")}>
                        Harga
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/domain" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-[15px] font-medium")}>
                        Domain
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium">
                      Support
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[550px] gap-2 p-4 md:grid-cols-2">
                        {supportItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="hidden lg:flex items-center gap-1.5 px-3 py-2.5 text-[15px] font-medium text-gray-700 hover:text-[#815854] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <Globe className="w-4.5 h-4.5" />
                <span>{language}</span>
              </button>

              {/* Shopping Cart */}
              <Link
                href="/cart"
                className="hidden lg:flex relative p-2.5 text-gray-700 hover:text-[#815854] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <ShoppingCart className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#815854] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Login Button */}
              <Link
                href="/dashboard"
                className="hidden lg:flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:text-[#815854] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <User className="w-4.5 h-4.5" />
                <span>Login</span>
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="hidden lg:flex items-center px-6 py-2.5 text-[15px] font-semibold text-white bg-[#815854] rounded-lg hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Daftar
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-[#815854] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden border-t border-gray-100",
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white overflow-y-auto max-h-[80vh]">
            {/* Mobile Quick Actions */}
            <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg flex-1"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
              <Link
                href="/cart"
                className="relative p-2.5 text-gray-700 bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#815854] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Produk Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileDropdown("produk")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Produk</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileDropdown === "produk" && "rotate-180"
                  )}
                />
              </button>
              {openMobileDropdown === "produk" && (
                <div className="space-y-1 pl-2">
                  {produkItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#F9EBDE] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solusi Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileDropdown("solusi")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Solusi</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileDropdown === "solusi" && "rotate-180"
                  )}
                />
              </button>
              {openMobileDropdown === "solusi" && (
                <div className="space-y-1 pl-2">
                  {solusiItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#F9EBDE] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link
              href="/harga"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Harga
            </Link>

            <Link
              href="/domain"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Domain
            </Link>

            {/* Support Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileDropdown("support")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Support</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileDropdown === "support" && "rotate-180"
                  )}
                />
              </button>
              {openMobileDropdown === "support" && (
                <div className="space-y-1 pl-2">
                  {supportItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#F9EBDE] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-[#815854] rounded-lg hover:bg-[#6d4a47] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat dengan Kami
        </span>
      </a>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
      `}</style>
    </>
  )
}

const ListItem = React.forwardRef(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F9EBDE] hover:text-[#815854] focus:bg-[#F9EBDE] focus:text-[#815854]",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && <Icon className="w-5 h-5 mt-0.5 text-[#815854] flex-shrink-0" />}
            <div className="flex-1">
              <div className="text-sm font-semibold leading-none mb-1.5">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"