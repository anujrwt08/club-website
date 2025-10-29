import { Link } from "wouter";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">CyberSec Club</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Building the next generation of cybersecurity professionals through hands-on learning and collaboration.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-footer-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-footer-discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:anujrwt08@gmail.com"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/">
                <a className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </Link>
              <Link href="/members">
                <a className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-members">
                  Members
                </a>
              </Link>
              <Link href="/events">
                <a className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-events">
                  Events
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Meeting Schedule</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Weekly Meetings</p>
                  <p className="font-mono text-xs">Thursdays @ 6:00 PM</p>
                  <p className="text-xs mt-1">Room 204, CS Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} College Cybersecurity Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
