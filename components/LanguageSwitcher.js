import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locales, asPath } = router;

  return (
    <div data-testid="language-switcher" className="flex gap-4 p-4">
      {locales.map((locale) => (
        <Link key={locale} href={asPath} locale={locale} className="uppercase font-bold">
          {locale}
        </Link>
      ))}
    </div>
  );
}