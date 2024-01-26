"use client"

import * as React from "react"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover"

import { Button } from "./ui/button"

export function MainNav(): JSX.Element {
  const [open, setOpen] = React.useState(false)

  const handleArrow = () => {
    setOpen(!open)
  }

  return (
    <Popover onOpenChange={handleArrow}>
      <PopoverTrigger className="flex items-center">
        <svg
          className={`mr-3 transition-transform ${open ? "rotate-90" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="11.162"
          height="14.884"
          viewBox="0 0 11.162 14.884"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M1.77,14.83c-.1,0-.14-.1-.19-.1a2.357,2.357,0,0,1-.19-2.74,7.392,7.392,0,0,1,2.3-2.54A14.658,14.658,0,0,1,6.81,7.39c.19-.1.14-.38-.05-.53A11.226,11.226,0,0,0,4.7,5.85,8.674,8.674,0,0,1,2.68,4.84c-.48-.24-.82-.82-1.34-1.06C.91,3.02.09,2.4.19,1.39.14.96-.15.57.09,0A14.218,14.218,0,0,0,2.87,2.35c.62.38,1.2.86,1.78,1.2a8.928,8.928,0,0,0,2.45.96c.14.1.38.1.53.24a3.068,3.068,0,0,0,2.02.72c.38-.1.77.24,1.06.53a1.141,1.141,0,0,1,.1,1.73,1.147,1.147,0,0,1-.43.38c-1.34,1.06-2.69,2.16-3.89,3.31-.86.34-1.3,1.2-2.11,1.58a3.99,3.99,0,0,0-1.73,1.49.649.649,0,0,1-.48.38c-.14.05-.29-.05-.38-.05Z"
            transform="translate(0.004)"
            fill="#dc7f2d"
          />
        </svg>
        <span className="font-trailmade text-3xl uppercase text-accent min-[525px]:text-6xl">
          Titanium gear
        </span>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className="relative left-[14px] top-4 z-40 w-72 rounded-xl bg-accent shadow-xl">
          <div className="flex flex-col py-6 pl-6 text-background">
            <Link href="/">
              <Button
                variant="link"
                className="gap-x-2 whitespace-nowrap text-background"
              >
                Hjem
              </Button>
            </Link>
            <Link href="/om-oss">
              <Button
                variant="link"
                className="gap-x-2 whitespace-nowrap text-background"
              >
                Om oss
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                variant="link"
                className="gap-x-2 whitespace-nowrap text-background"
              >
                Kontakt
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                variant="link"
                className="gap-x-2 whitespace-nowrap text-background"
              >
                Faq
              </Button>
            </Link>
            <Link href="https://www.kipara.no">
              <Button
                variant="link"
                className="gap-x-2 whitespace-nowrap text-background"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="171.051"
                  height="19"
                  viewBox="0 0 171.051 19"
                >
                  <g
                    id="Group_69"
                    data-name="Group 69"
                    transform="translate(15.352 0.5)"
                  >
                    <text
                      id="kipara_packrafts"
                      data-name="kipara packrafts"
                      transform="translate(138.648 14.5)"
                      fill="#200601"
                      fontSize="16"
                      fontFamily="ErasITC-Bold, Eras ITC"
                      fontWeight="700"
                    >
                      <tspan x="-153.07" y="0">
                        KIPARA{" "}
                      </tspan>
                      <tspan
                        y="0"
                        font-family="ErasITC-Medium, Eras ITC"
                        fontWeight="500"
                      >
                        PACKRAFTS
                      </tspan>
                    </text>
                    <g
                      id="Group_12"
                      data-name="Group 12"
                      transform="translate(145.865 4.333)"
                    >
                      <path
                        id="Path_2211"
                        data-name="Path 2211"
                        d="M5,12h9.333"
                        transform="translate(-5 -7.333)"
                        fill="none"
                        stroke="#200601"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                      <path
                        id="Path_2212"
                        data-name="Path 2212"
                        d="M12,5l4.667,4.667L12,14.333"
                        transform="translate(-7.333 -5)"
                        fill="none"
                        stroke="#200601"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                    </g>
                  </g>
                </svg>
              </Button>
            </Link>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}
