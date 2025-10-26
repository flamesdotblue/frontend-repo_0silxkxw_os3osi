import React from 'react';
import {
  Database,
  HardDrive,
  Server,
  Boxes,
  UserPlus,
  Wrench,
  Settings,
  Rocket,
  Shield,
  Globe,
  UploadCloud,
  LayoutDashboard,
  Headphones,
  CreditCard,
  History,
  Lock,
  BarChart2,
  ChevronDown,
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ id, title, subtitle }) => (
  <div id={id} className="mb-8">
    <h2 className="text-black text-3xl md:text-4xl font-bold">{title}</h2>
    {subtitle && <p className="text-black/80 mt-2">{subtitle}</p>}
  </div>
);

const Services = () => (
  <section className="bg-white py-16 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        id="services"
        title="What Do You Need?"
        subtitle="Choose a category to explore products and pricing"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/databases">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-100 text-black">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black font-semibold">Managed Databases</h3>
                <p className="text-sm text-gray-600 mt-1">Postgres, MySQL, Redis & more</p>
                <span className="inline-block mt-4 text-sm text-black underline">Explore Databases</span>
              </div>
            </div>
          </Card>
        </a>
        <a href="/object-storage">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-100 text-black">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black font-semibold">Object Storage</h3>
                <p className="text-sm text-gray-600 mt-1">S3-compatible secure storage</p>
                <span className="inline-block mt-4 text-sm text-black underline">Explore Storage</span>
              </div>
            </div>
          </Card>
        </a>
        <a href="/hosting">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-100 text-black">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black font-semibold">Managed Hosting</h3>
                <p className="text-sm text-gray-600 mt-1">Web apps, APIs, static sites</p>
                <span className="inline-block mt-4 text-sm text-black underline">Explore Hosting</span>
              </div>
            </div>
          </Card>
        </a>
        <a href="/vps">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-100 text-black">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black font-semibold">Unmanaged VPS</h3>
                <p className="text-sm text-gray-600 mt-1">Full control, simple billing</p>
                <span className="inline-block mt-4 text-sm text-black underline">Explore VPS</span>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle id="how" title="Getting Started is Easy" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gray-100 text-black">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-black font-semibold">1. Sign Up</h4>
              <p className="text-sm text-gray-600 mt-1">Create account in 2 minutes with email</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gray-100 text-black">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-black font-semibold">2. Choose Service</h4>
              <p className="text-sm text-gray-600 mt-1">Pick a database, storage, hosting, or VPS plan</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gray-100 text-black">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-black font-semibold">3. Configure</h4>
              <p className="text-sm text-gray-600 mt-1">Set specs (RAM, storage, region) or use defaults</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gray-100 text-black">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-black font-semibold">4. Deploy & Manage</h4>
              <p className="text-sm text-gray-600 mt-1">Use dashboard to manage, scale, and monitor</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-8">
        <a href="/signup" className="inline-block px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">
          Get Started Now
        </a>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="bg-white py-16 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Why Choose Hostifye?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Rocket, title: 'Auto-Scaling', desc: 'Automatically scale resources as demand grows' },
          { icon: UploadCloud, title: 'Automatic Backups', desc: 'Daily backups with point-in-time recovery' },
          { icon: Globe, title: 'Global CDN', desc: 'Fast content delivery worldwide' },
          { icon: Shield, title: 'One-Click Deploys', desc: 'Deploy websites in seconds, no config needed' },
          { icon: LayoutDashboard, title: 'Dashboard Management', desc: 'Manage all services from one unified dashboard' },
          { icon: Headphones, title: '24/7 Support', desc: 'Real humans available anytime via chat/email' },
        ].map(({ icon: Icon, title, desc }) => (
          <Card key={title}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-100 text-black">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-black font-semibold">{title}</h4>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <a href="/docs" className="inline-block px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

const DashboardPreview = () => (
  <section id="dashboard" className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Control Everything" subtitle="Manage purchases, passwords, payments, and history in one place" />
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="aspect-video w-full rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500">
              <span>Dashboard mockup preview</span>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-700">
              <span className="px-3 py-2 rounded border border-gray-200">Purchase history</span>
              <span className="px-3 py-2 rounded border border-gray-200">Password manager</span>
              <span className="px-3 py-2 rounded border border-gray-200">Billing</span>
              <span className="px-3 py-2 rounded border border-gray-200">Service status</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-black">
              <CreditCard className="w-5 h-5" /> <span>Easy payments</span>
            </div>
            <div className="flex items-center gap-3 text-black">
              <History className="w-5 h-5" /> <span>Full activity logs</span>
            </div>
            <div className="flex items-center gap-3 text-black">
              <Lock className="w-5 h-5" /> <span>Secure access</span>
            </div>
            <div className="flex items-center gap-3 text-black">
              <BarChart2 className="w-5 h-5" /> <span>Usage analytics</span>
            </div>
          </div>
        </div>
      </Card>
      <div className="mt-8">
        <a href="/login" className="inline-block px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">See Dashboard</a>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section id="pricing" className="bg-white py-16 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Why Hostifye Beats the Competition" />
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border-b">Feature</th>
              <th className="p-3 border-b">Hostifye</th>
              <th className="p-3 border-b">Heroku</th>
              <th className="p-3 border-b">AWS</th>
              <th className="p-3 border-b">DigitalOcean</th>
              <th className="p-3 border-b">Vercel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">Starting Price</td>
              <td className="p-3 border-b">€3/mo</td>
              <td className="p-3 border-b">$50/mo</td>
              <td className="p-3 border-b">Pay-as-you-go</td>
              <td className="p-3 border-b">$5/mo</td>
              <td className="p-3 border-b">Free tier</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Managed DBs</td>
              <td className="p-3 border-b">Yes</td>
              <td className="p-3 border-b">Limited</td>
              <td className="p-3 border-b">Yes</td>
              <td className="p-3 border-b">Yes</td>
              <td className="p-3 border-b">Limited</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Setup Complexity</td>
              <td className="p-3 border-b">Simple</td>
              <td className="p-3 border-b">Simple</td>
              <td className="p-3 border-b">Complex</td>
              <td className="p-3 border-b">Medium</td>
              <td className="p-3 border-b">Simple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <a href="/comparison" className="inline-block px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">See Full Comparison</a>
      </div>
    </div>
  </section>
);

const FAQs = () => (
  <section id="faqs" className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="space-y-3">
        {[
          {
            q: 'How do I migrate my existing database?',
            a: 'See our migration guide or contact support.',
          },
          { q: "What's your uptime SLA?", a: '99.99% guaranteed with status page.' },
          { q: 'Can I scale up or down anytime?', a: 'Yes, upgrade/downgrade instantly, pay prorated fees.' },
          { q: 'How long does deployment take?', a: 'Typically 2-5 minutes depending on service type.' },
          { q: 'Do you have backups?', a: 'Yes, automatic daily backups with point-in-time recovery.' },
          { q: 'Is my data secure?', a: 'Yes, encrypted at rest and in transit, GDPR compliant.' },
          { q: 'How do I get support?', a: '24/7 support via chat, email, or docs.' },
        ].map(({ q, a }) => (
          <details key={q} className="group border border-gray-200 rounded-lg">
            <summary className="list-none cursor-pointer select-none p-4 flex items-center justify-between">
              <span className="text-black font-medium">{q}</span>
              <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 text-gray-700">{a}</div>
          </details>
        ))}
      </div>
      <div className="mt-8">
        <a href="/support" className="inline-block px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">Still have questions?</a>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-white py-16 border-t border-gray-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-black text-3xl md:text-4xl font-bold">Ready to Host Everything Affordably?</h3>
      <p className="mt-3 text-gray-700">Join startups and developers cutting infrastructure costs 70% with Hostifye</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="/signup" className="px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all">Sign Up Free</a>
        <a href="/demo" className="px-6 py-3 rounded-md border border-gray-300 text-black hover:bg-gray-100 transition-colors">Schedule Demo</a>
      </div>
      <p className="mt-3 text-gray-600 text-sm">No credit card required. Get started in 2 minutes.</p>
    </div>
  </section>
);

const TrustSignals = () => (
  <section id="support" className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {['99.99% Uptime', '24/7 Support', 'Global Data Centers', 'GDPR Compliant'].map((b) => (
          <div key={b} className="px-3 py-2 rounded border border-gray-200 text-gray-700">{b}</div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-black">“Switched last month — cut our bill by 68% with zero downtime.”</p>
          <p className="text-sm text-gray-600 mt-2">— Sofia M., SaaS founder</p>
        </Card>
        <Card>
          <p className="text-black">“Set up Postgres in minutes. The dashboard is refreshingly simple.”</p>
          <p className="text-sm text-gray-600 mt-2">— Arjun K., Full‑stack dev</p>
        </Card>
        <Card>
          <p className="text-black">“Support actually helped at 2am. Migrations were a breeze.”</p>
          <p className="text-sm text-gray-600 mt-2">— Lina R., Indie hacker</p>
        </Card>
      </div>
    </div>
  </section>
);

const LandingSections = () => {
  return (
    <>
      <Services />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Comparison />
      <FAQs />
      <FinalCTA />
      <TrustSignals />
    </>
  );
};

export default LandingSections;