import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="px-1 py-0 flex justify-center gap-4 font-avenir">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:underline">
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:underline">
            <Link to="/gallery">Gallery</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:underline">
            <a href="#about">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:underline">
            <a href="#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
// This component is a navigation bar that uses the NavigationMenu component from Radix UI.
