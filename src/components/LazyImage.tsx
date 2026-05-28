import { useState } from 'react';
import clsx from 'clsx';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lqip?: string;
}

const LazyImage = ({ className, onLoad, lqip, ...rest }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {lqip ? (
        <img
          src={lqip}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-xl"
        />
      ) : null}
      <img
        className={clsx(
          'relative z-10 h-full w-full object-cover transition duration-700',
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur',
          className,
        )}
        loading="lazy"
        decoding="async"
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;

