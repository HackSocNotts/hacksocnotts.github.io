import { Link } from 'gatsby';
import React from 'react';
import cx from 'classnames';

interface BannerProps {
  cta1?: {
    to: string;
    content: string;
  };
  cta2?: {
    to: string;
    content: string;
  };
}

const Banner: React.FC<BannerProps> = ({ children, cta1, cta2 }) => {
  const isExternal = (link: string) => {
    return link.substr(0, 4) === 'http';
  };

  return (
    <section id="banner">
      <div className="inner">
        {children}
        {(cta1 || cta2) && (
          <ul className="actions special">
            {cta1 && (
              <li>
                {isExternal(cta1.to) && (
                  <a
                    href={cta1.to}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={cx('button', 'primary', 'large')}
                  >
                    {cta1.content}
                  </a>
                )}
                {!isExternal(cta1.to) && (
                  <Link to={cta1.to || '#'} className={cx('button', 'large')}>
                    {cta1.content}
                  </Link>
                )}
              </li>
            )}
            {cta2 && (
              <li>
                {isExternal(cta2.to) && (
                  <a
                    href={cta2.to}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={cx('button', 'primary', 'large')}
                  >
                    {cta2.content}
                  </a>
                )}
                {!isExternal(cta2.to) && (
                  <Link to={cta2.to || '#'} className={cx('button', 'large')}>
                    {cta2.content}
                  </Link>
                )}
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Banner;
