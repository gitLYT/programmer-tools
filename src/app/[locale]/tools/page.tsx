import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ToolsPage() {
  const t = useTranslations('Tools');

  const tools = [
    {
      name: t('json.name'),
      description: t('json.desc'),
      path: "/tools/json-formatter",
    },
    {
      name: t('base64.name'),
      description: t('base64.desc'),
      path: "/tools/base64",
    },
    {
      name: t('timestamp.name'),
      description: t('timestamp.desc'),
      path: "/tools/timestamp",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.path} href={tool.path} className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white h-full group-hover:border-blue-500">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
