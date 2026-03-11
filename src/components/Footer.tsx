import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-800 p-4 text-white mt-auto">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} {t('rights')}
      </div>
    </footer>
  );
}
