import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t mt-6 py-6 flex flex-col items-center gap-4 px-4" style={{ borderColor: 'var(--border-color)' }}>
      <div className="text-[11px] sm:text-xs flex flex-wrap justify-center gap-3" style={{ color: 'var(--text-secondary)' }}>
        <Link href="/about" className="underline hover:opacity-80">
          About Us
        </Link>
        <span>·</span>
        <Link href="/contact" className="underline hover:opacity-80">
          Contact
        </Link>
        <span>·</span>
        <Link href="/privacy-policy" className="underline hover:opacity-80">
          Privacy Policy
        </Link>
        <span>·</span>
        <Link href="/terms" className="underline hover:opacity-80">
          Terms of Service
        </Link>
        <span>·</span>
        <span>This site uses cookies and may show ads through Google AdSense.</span>
      </div>
    </footer>
  );
}



