import SiteHeader from './SiteHeader';
import Footer from './Footer';

// Header + footer frame shared by every public page
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
