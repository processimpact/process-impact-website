import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Process Impact</h3>
            <p className="text-sm text-muted-foreground">
              ICS Offensive Security & Training
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/network-penetration-testing" className="text-muted-foreground hover:text-primary transition-colors">
                  Network Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/device-penetration-testing" className="text-muted-foreground hover:text-primary transition-colors">
                  Device Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/purple-team-exercises" className="text-muted-foreground hover:text-primary transition-colors">
                  Purple Team Exercises
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-muted-foreground hover:text-primary transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Process Impact LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
