import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '../lib/tailwind';

export const Home = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { path: '/first-scene', label: 'First scene' },
    { path: '/drei', label: 'Drei' },
  ];

  return (
    <main className="min-h-screen px-4 text-white">
      <ul>
        {links.map(({ path, label }, index) => (
          <li
            className="group"
            key={path}
            onMouseEnter={() => setHoveredLink(path)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to={path}
              className={cn(
                'flex items-baseline gap-[0.5vw] py-4 leading-none transition-all duration-[400ms] ease-[cubic-bezier([0.83,0,0.17,1])] group-hover:translate-x-4',
                hoveredLink && hoveredLink !== path && 'opacity-60',
              )}
            >
              <span className="text-[1.5vw] italic">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[4vw] uppercase">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
