import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navbar');
  
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {t('title')}
        </Link>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">{t('home')}</Link>
            <Link href="/tools" className="hover:text-gray-300">{t('tools')}</Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
