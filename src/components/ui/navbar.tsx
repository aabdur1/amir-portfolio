import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="w-screen px-4 py-4 bg-background text-foreground border-b border-muted-foreground">
      <div className="flex justify-between items-center">
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="px-1 py-0 flex justify-center gap-4 font-avant font-light">
            {navLinks.map(({ label, to }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink
                  asChild
                  className="hover:underline hover:text-primary"
                >
                  <Link to={to}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-2 ml-4 w-40 border-foreground"
            >
              {navLinks.map(({ label, to }) => (
                <DropdownMenuItem asChild key={label}>
                  <Link to={to}>{label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Theme Toggle */}
        <div className="ml-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

const navLinks = [
  { label: "Home", to: "/" },
  { label: "SQL Projects", to: "/sql-projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "#about" },
  { label: "Contact", to: "#contact" },
];
