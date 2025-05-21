import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
  return (
    <div className="flex justify-between">
      <NavigationMenu>
        <NavigationMenuList className="px-1 py-0 flex justify-center gap-4 font-avenir">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:underline hover:text-primary"
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:underline hover:text-primary"
            >
              <Link to="/sql-projects">SQL Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:underline hover:text-primary"
            >
              <Link to="/gallery">Gallery</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:underline hover:text-primary"
            >
              <a href="#about">About</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:underline hover:text-primary"
            >
              <a href="#contact">Contact</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  );
}
// This component is a navigation bar that uses the NavigationMenu component from Radix UI.
