import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"

import { storeQuery } from "@/lib/storeQuery"
import { stripe } from "@/lib/stripe"

export async function POST(requst: Request) {
  const cartDetails = await requst.json()
  let sanityData = await client.fetch(storeQuery)
  const lineItems = validateCartItems(sanityData, cartDetails)
  const origin = requst.headers.get("origin")

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ["US"] },
    shipping_options: [
      {
        shipping_rate: "shr_1OcaN9JlC3LQRM8rdjzIC8py",
      },
    ],
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  })
  return NextResponse.json(session)
}
