import { type PropsWithChildren } from 'react';
import CursorGlow from './CursorGlow';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => (
  <div className="relative min-h-screen bg-bg text-ink">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <CursorGlow />
    <Header />
    <main id="main-content" className="relative">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
