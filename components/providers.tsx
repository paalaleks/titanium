"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <CartProvider
      cartMode="client-only"
      successUrl="/success"
      cancelUrl="/"
      currency="USD"
      shouldPersist={true}
      mode="payment"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >
      <Toaster />
      <TailwindIndicator />
      {children}
    </CartProvider>
  )
}
