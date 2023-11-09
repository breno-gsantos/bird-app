"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Logo from "./logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Frozen",
    href: "/",
    description:
      "Recommended template for most use cases include all the components",
  },
  {
    title: "Swift",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Tuscany",
    href: "/",
    description:
      "Advanced templare with more components and features.",
  },
  {
    title: "Amber",
    href: "/",
    description: "Great for building a market or loading page",
  },
  {
    title: "Tide",
    href: "/",
    description:
      "Layered template with a sidebar navigation",
  },
  {
    title: "Mint",
    href: "/",
    description:
      "Nice template for building a blog or a content-heavy website",
  },
]

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/" >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">Bird Software</div>
                    <p className="text-sm leading-tight text-muted-foreground">The only platform that brings together your content and conversations</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Product">Learn about the product and its features.</ListItem>
              <ListItem href="/" title="Demo">How to build a store in a 60 seconds with Bird.</ListItem>
              <ListItem href="/" title="Community">Join the community and get help with your project.</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/pricing'>
            <NavigationMenuItem className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md">Princing</NavigationMenuItem>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
