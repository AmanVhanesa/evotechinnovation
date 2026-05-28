import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

interface CTAButtonProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  external?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-[0.95rem] font-semibold transition duration-300 ease-apple focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-bluedeep shadow-soft hover:-translate-y-0.5',
  secondary: 'bg-soft text-ink hover:bg-black/[0.06]',
  ghost: 'text-brand-blue hover:text-brand-bluedeep px-2',
};

const CTAButton = ({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  external,
}: CTAButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const extra: AnchorHTMLAttributes<HTMLAnchorElement> = external
      ? { target: '_blank', rel: 'noreferrer' }
      : {};
    return (
      <a href={href} className={classes} onClick={onClick} {...extra}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default CTAButton;
