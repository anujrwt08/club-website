import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/members", label: "Members" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3" data-testid="link-home-logo">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg">Anuj Rawat Club</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  asChild
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="sm"
                >
                  <a data-testid={`link-nav-${item.label.toLowerCase()}`}>
                    {item.label}
                  </a>
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button asChild size="sm">
                <a data-testid="button-join-cta">
                  Join Us
                </a>
              </Button>
            </Link>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    asChild
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <a onClick={() => setMobileMenuOpen(false)} data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}>
                      {item.label}
                    </a>
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button asChild className="w-full">
                  <a onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-join-cta">
                    Join Us
                  </a>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
