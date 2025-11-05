"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Code2, Sparkles, TrendingUp, Server } from "lucide-react"

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
    title: "Pembuatan Website",
    href: "/layanan/website",
    description: "Website modern dengan Next.js, React, dan Tailwind CSS yang cepat dan SEO-friendly.",
    icon: Code2,
  },
  {
    title: "Pengembangan Software",
    href: "/layanan/software",
    description: "Aplikasi dan sistem informasi management yang customizable sesuai kebutuhan bisnis.",
    icon: Sparkles,
  },
  {
    title: "SEO & Digital Marketing",
    href: "/layanan/seo",
    description: "Optimasi mesin pencari dan strategi digital marketing untuk meningkatkan visibilitas online.",
    icon: TrendingUp,
  },
  {
    title: "Infrastruktur Digital",
    href: "/layanan/infrastruktur",
    description: "Domain, email hosting (Google Workspace), VPS, dan layanan infrastruktur lainnya.",
    icon: Server,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slideDown",
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-32 h-12 transition-transform duration-300 group-hover:scale-105">
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
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Beranda
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
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
                    <Link href="/portofolio" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Portofolio
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/harga" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Harga
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/tentang" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Tentang Kami
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/kontak" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Kontak
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 relative px-6 py-2.5 text-sm font-semibold text-white bg-[#815854] rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Konsultasi Gratis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#815854] to-[#A07068] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#815854] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-lg border-t">
            <Link
              href="/"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>

            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-semibold text-gray-900">
                Layanan
              </div>
              {layananItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 mt-0.5 text-[#815854]" />
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/portofolio"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portofolio
            </Link>

            <Link
              href="/harga"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Harga
            </Link>

            <Link
              href="/tentang"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>

            <Link
              href="/kontak"
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F9EBDE] hover:text-[#815854] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-semibold text-center text-white bg-[#815854] rounded-lg hover:bg-[#6d4a47] transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </nav>

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F9EBDE] hover:text-[#815854] focus:bg-[#F9EBDE] focus:text-[#815854]",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && <Icon className="w-5 h-5 mt-0.5 text-[#815854]" />}
            <div className="flex-1">
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
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