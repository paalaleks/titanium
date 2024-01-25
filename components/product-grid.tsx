"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { ArrowRight, XCircle } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/types/types"
import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  products: SanityProduct[]
}

export function ProductGrid({ products }: Props) {
  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()

  const addToCart = (product: SanityProduct) => {
    const isInCart = !!cartDetails?.[product._id]
    const item = {
      ...product,
      product_data: {},
      price_data: {},
    }

    isInCart ? incrementItem(item._id) : addItem(item)

    toast({
      title: `${item.name} added to cart`,
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            Open cart
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      ),
    })

    // console.log(item)
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <div key={product._id}>
          <Link
            href={`/products/${product.slug}`}
            className="group text-center"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-[url('/bg.png')] p-2 group-hover:opacity-75">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(225, 280)
                )}`}
                src={urlForImage(product.images[0]).url()}
                alt={product.name}
                width={225}
                height={280}
                className="h-52 w-full object-contain object-center "
              />
            </div>
            <h3 className="font-trailmade  mt-4 text-4xl font-medium text-accent">
              {product.name}
            </h3>
            <p className="mt-2 text-sm font-medium">
              {formatCurrencyString({
                currency: product.currency,
                value: product.price,
              })}
            </p>
          </Link>
          <form className="mt-6 w-full">
            <div className="flex">
              <Button
                onClick={() => addToCart(product)}
                type="button"
                className="w-full bg-border py-6 text-base font-medium text-foreground hover:bg-border/80 focus:bg-border/80 focus:outline-none focus:ring-2"
              >
                Add to cart
              </Button>
            </div>
          </form>
        </div>
      ))}
    </div>
  )
}
