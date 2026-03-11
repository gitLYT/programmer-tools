import React from 'react';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-slate lg:prose-lg dark:prose-invert">
      <h1 className="text-4xl font-extrabold mb-6">{t('title')}</h1>
      <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
        {t('description')}
      </p>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('section1.title')}</h2>
        <p className="mb-4" dangerouslySetInnerHTML={{__html: t.raw('section1.intro')}} />

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section1.requirements.title')}</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li dangerouslySetInnerHTML={{__html: t.raw('section1.requirements.nodejs')}} />
          <li dangerouslySetInnerHTML={{__html: t.raw('section1.requirements.os')}} />
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section1.steps.title')}</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">{t('section1.steps.unix.title')}</h4>
          <p className="mb-2">{t('section1.steps.unix.desc')}</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
            curl -fsSL https://openclaw.ai/install.sh | bash
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">{t('section1.steps.windows.title')}</h4>
          <p className="mb-2">{t('section1.steps.windows.desc')}</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
            powershell -c "irm https://openclaw.ai/install.ps1 | iex"
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section1.verify.title')}</h3>
        <p className="mb-2">{t('section1.verify.desc')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">openclaw doctor</code>: {t('section1.verify.doctor')}</li>
          <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">openclaw status</code>: {t('section1.verify.status')}</li>
          <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">openclaw dashboard</code>: {t('section1.verify.dashboard')}</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('section2.title')}</h2>
        <p className="mb-4" dangerouslySetInnerHTML={{__html: t.raw('section2.intro')}} />

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section2.requirements.title')}</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li dangerouslySetInnerHTML={{__html: t.raw('section2.requirements.docker')}} />
          <li dangerouslySetInnerHTML={{__html: t.raw('section2.requirements.os')}} />
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section2.deploy.title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{__html: t.raw('section2.deploy.intro')}} />

        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong dangerouslySetInnerHTML={{__html: t.raw('section2.deploy.step1')}} />
            <div className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              git clone https://github.com/openclaw/openclaw.git<br/>
              cd openclaw
            </div>
          </li>
          <li>
            <strong dangerouslySetInnerHTML={{__html: t.raw('section2.deploy.step2')}} />
            <div className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              ./docker-setup.sh
            </div>
            <p className="mt-2 text-sm text-gray-500">{t('section2.deploy.step2_desc')}</p>
          </li>
          <li>
            <strong dangerouslySetInnerHTML={{__html: t.raw('section2.deploy.step3')}} />
            <p className="mb-2 text-sm text-gray-500">{t('section2.deploy.step3_desc')}</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <span className="text-gray-500"># Start Service</span><br/>
              docker compose up -d<br/><br/>
              <span className="text-gray-500"># Run Init Wizard</span><br/>
              docker compose run --rm openclaw-cli onboard --install-daemon
            </div>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section2.access.title')}</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li dangerouslySetInnerHTML={{__html: t.raw('section2.access.dashboard')}} />
          <li dangerouslySetInnerHTML={{__html: t.raw('section2.access.security')}} />
          <li>
            <span dangerouslySetInnerHTML={{__html: t.raw('section2.access.token')}} />
            <div className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              docker compose run --rm openclaw-cli dashboard --no-open
            </div>
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('section3.title')}</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3" dangerouslySetInnerHTML={{__html: t.raw('section3.issue1.title')}} />
        <p className="mb-2">{t('section3.issue1.desc')}</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li dangerouslySetInnerHTML={{__html: t.raw('section3.issue1.unix')}} />
          <li dangerouslySetInnerHTML={{__html: t.raw('section3.issue1.windows')}} />
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('section3.issue2.title')}</h3>
        <p dangerouslySetInnerHTML={{__html: t.raw('section3.issue2.desc')}} />
      </section>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('section4.title')}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li dangerouslySetInnerHTML={{__html: t.raw('section4.update')}} />
          <li dangerouslySetInnerHTML={{__html: t.raw('section4.uninstall')}} />
        </ul>
      </section>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-blue-800 dark:text-blue-200">
          {t('moreInfo')} <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400">https://docs.openclaw.ai/</a>
        </p>
      </div>
    </div>
  );
}
