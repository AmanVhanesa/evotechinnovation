import { type PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-bg text-ink">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Header />
    <main id="main-content" className="pt-[52px]">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
