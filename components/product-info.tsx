"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/types/types"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]

  function addToCart() {
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
    <div className="mt-4 flex flex-col items-center px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
      <h1 className="font-trailmade text-4xl font-bold tracking-tight text-accent">
        {product.name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {formatCurrencyString({
            value: product.price,
            currency: product.currency,
          })}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>
      <form className="mt-6 w-full ">
        <div className="mx-auto mt-4 flex w-72">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full bg-border py-6 text-base font-medium text-foreground hover:bg-border/80 focus:bg-border/80 focus:outline-none focus:ring-2"
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  )
}
