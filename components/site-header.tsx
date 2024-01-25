"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const pathname = usePathname()
  const { cartCount } = useShoppingCart()

  if (pathname === "/studio") return null

  return (
    <header className="relative z-40 w-full">
      <div className="mx-auto flex h-28 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <div className="flex items-center space-x-1">
          {pathname === "/cart" ? (
            <Link href="/">
              <Button size="sm" variant="ghost">
                <ArrowLeft className="h-5 w-5" />
                <span className="ml-2">Back</span>
              </Button>
            </Link>
          ) : pathname.startsWith("/products") ? (
            <>
              <Link href="/">
                <Button size="sm" variant="ghost">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="ml-2">Back</span>
                </Button>
              </Link>
              <Link href="/cart">
                <Button size="sm" variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="ml-2 text-sm font-bold">{cartCount}</span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
