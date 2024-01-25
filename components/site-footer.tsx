import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-2 pt-7 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-8"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-4">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <Link
          href="https://www.fullstack.so"
          className="mt-10 block pb-6 text-center text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </Link>
      </div>
    </footer>
  )
}
