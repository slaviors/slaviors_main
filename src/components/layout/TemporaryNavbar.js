"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Menu, X, 
  Code2, Cloud, RefreshCw, Wrench,
  DollarSign, Package, MonitorCog,
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

const layananItems = [
  {
    title: "Website Development",
    href: "/layanan/website-development",
    description: "Pembuatan website modern dan landing page untuk bisnis Anda.",
    icon: Code2,
  },
  {
    title: "SaaS Development",
    href: "/layanan/saas-development",
    description: "Solusi SaaS custom untuk scale up bisnis dan efisiensi operasional.",
    icon: Cloud,
  },
  {
    title: "Custom Software Development",
    href: "/layanan/custom-software",
    description: "Aplikasi dan sistem informasi management sesuai kebutuhan bisnis.",
    icon: MonitorCog,
  },
  {
    title: "Website Modernization",
    href: "/layanan/website-modernization",
    description: "Perbarui website lama Anda dengan teknologi terkini (non-WordPress).",
    icon: RefreshCw,
  },
]

const hargaItems = [
  {
    title: "Website Development",
    href: "/harga/website",
    description: "Paket harga untuk pembuatan website dan landing page.",
    icon: Code2,
  },
  {
    title: "SaaS Development",
    href: "/harga/saas",
    description: "Harga development SaaS sesuai kompleksitas project.",
    icon: Cloud,
  },
  {
    title: "Custom Software",
    href: "/harga/software",
    description: "Investasi untuk software custom dan sistem management.",
    icon: Package,
  },
  {
    title: "Maintenance Package",
    href: "/harga/maintenance",
    description: "Paket maintenance bulanan untuk website & aplikasi.",
    icon: DollarSign,
  },
]

const supportItems = [
  {
    title: "Blog & Tutorial",
    href: "/blog",
    description: "Artikel dan tips seputar web development dan teknologi.",
    icon: BookOpen,
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Pertanyaan yang sering diajukan tentang layanan kami.",
    icon: Headphones,
  },
  {
    title: "WhatsApp Support",
    href: "https://wa.me/6283160581462",
    description: "Chat langsung dengan tim kami via WhatsApp.",
    icon: MessageCircle,
  },
  {
    title: "Kontak Kami",
    href: "/contact",
    description: "Hubungi kami untuk konsultasi project Anda.",
    icon: Phone,
  },
]

export function TemporaryNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = React.useState(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
                  alt="Slaviors Group Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {isMounted && (
                <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium">
                      Layanan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[650px] gap-2 p-4 md:grid-cols-2">
                        {layananItems.map((item) => (
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
                      Harga
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[550px] gap-2 p-4 md:grid-cols-2">
                        {hargaItems.map((item) => (
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
                    <NavigationMenuLink asChild>
                      <Link href="/portfolio" className={cn(navigationMenuTriggerStyle(), "text-[15px] font-medium")}>
                        Portfolio
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className={cn(navigationMenuTriggerStyle(), "text-[15px] font-medium")}>
                        Tentang Kami
                      </Link>
                    </NavigationMenuLink>
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
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Contact Button */}
              <a
                href="https://wa.me/6283160581462"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-[15px] font-semibold text-white bg-[#815854] rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi Kami</span>
              </a>

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
            {/* Layanan Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileDropdown("layanan")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Layanan</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileDropdown === "layanan" && "rotate-180"
                  )}
                />
              </button>
              {openMobileDropdown === "layanan" && (
                <div className="space-y-1 pl-2">
                  {layananItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#F9EBDE] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] shrink-0" />
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

            {/* Harga Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleMobileDropdown("harga")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Harga</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileDropdown === "harga" && "rotate-180"
                  )}
                />
              </button>
              {openMobileDropdown === "harga" && (
                <div className="space-y-1 pl-2">
                  {hargaItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#F9EBDE] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] shrink-0" />
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
              href="/portfolio"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
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
                        <item.icon className="w-5 h-5 mt-0.5 text-[#815854] shrink-0" />
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

            {/* Mobile Contact Button */}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/6283160581462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-[#815854] rounded-full hover:bg-[#6d4a47] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6283160581462"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      >
        <FaWhatsapp className="w-6 h-6" />
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
  );
}

const ListItem = React.forwardRef(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F9EBDE] hover:text-[#815854] focus:bg-[#F9EBDE] focus:text-[#815854]",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && <Icon className="w-5 h-5 mt-0.5 text-[#815854] shrink-0" />}
            <div className="flex-1">
              <div className="text-sm font-semibold leading-none mb-1.5">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"