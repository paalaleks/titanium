import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/types/types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductGrid } from "@/components/product-grid"

interface Props {
  products: SanityProduct[]
}

export default async function Page() {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      _id,
      "id": _id,
      createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      categories,
      "slug": slug.current
    }`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )

  return (
    <div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-8">
        <h1 className="font-trailmade relative bottom-36 z-20 col-span-1 h-full w-full bg-gradient-to-t from-[#1e0601] via-[#1e0601] to-transparent px-2 text-8xl leading-[6rem] text-foreground xs:pl-6 sm:bottom-0 sm:w-[400px] sm:bg-gradient-to-r sm:pt-8">
          Lett og solid spiseutstyr til leirplassen.
        </h1>
        <Image
          alt={siteConfig.name}
          src="/images/hero.jpg"
          width={1404}
          height={936}
          className="col-span-7 row-start-1 h-96 w-full object-cover sm:row-auto"
        />
      </div>

      <main className="relative bottom-36 mx-auto max-w-6xl px-6 sm:bottom-0">
        <section aria-labelledby="products-heading" className="pb-24 pt-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div
            className={cn(
              "grid grid-cols-1 gap-x-8 gap-y-10",
              products.length > 0 ? "lg:grid-cols-1" : "lg:grid-cols-[1fr_3fr]"
            )}
          >
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
    </div>
  )
}
