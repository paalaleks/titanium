import { groq } from "next-sanity"

export const storeQuery = groq`
  *[_type == "product"] {
    _id,
    "id": _id,
    _createdAt,
    name,
    sku,
    "images": images[].asset->url,
    "image": image.asset->url,
    currency,
    price,
    categories,
    description,
    "slug": slug.current
  }`
