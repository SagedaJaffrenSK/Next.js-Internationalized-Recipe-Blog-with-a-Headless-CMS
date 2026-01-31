import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const { asPath, locale } = router;

  return (
    <nav className="flex justify-between p-4 border-b no-print">
      <Link href="/">RecipeBlog</Link>
      <div data-testid="language-switcher" className="flex gap-4">
        {['en', 'es', 'fr'].map((l) => (
          <Link key={l} href={asPath} locale={l} className={locale === l ? 'font-bold underline' : ''}>
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}