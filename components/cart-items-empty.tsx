"use client"

import Link from "next/link"
import { Plus, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-border dark:border-border">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <XCircle className="h-10 w-10 text-border" />
        <h3 className="my-4 text-lg font-semibold">No products added yet</h3>
        <Link href="/">
          <Button size="sm" className="relative">
            <Plus className="mr-2 h-4 w-4" />
            Add Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
