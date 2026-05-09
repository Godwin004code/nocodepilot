import Image from 'next/image';
import { XIcon, LinkedInIcon, GithubIcon } from '@/components/ui/icons';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Input } from '@/components/ui';

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200 fixed top-0 w-full z-50">
        <nav className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
          <a href="#" className="text-2xl font-bold text-primary tracking-tight">NoCodePilot</a>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-neutral-600 font-medium hover:text-primary transition-colors duration-200 text-sm" href="#problem">The Problem</a>
            <a className="text-neutral-600 font-medium hover:text-primary transition-colors duration-200 text-sm" href="#services">Solutions</a>
            <a className="text-neutral-600 font-medium hover:text-primary transition-colors duration-200 text-sm" href="#checklist">Checklist</a>
            <a className="text-neutral-600 font-medium hover:text-primary transition-colors duration-200 text-sm" href="#waitlist">Waitlist</a>
          </div>
          <div className="flex gap-4">
            {/* <Button variant="outline" size="sm" className="hidden md:flex">Sign In</Button> */}
            <a href="#waitlist">
              <Button variant="secondary" size="sm">Join Waitlist</Button>
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative blueprint-grid py-24 px-6 overflow-hidden border-b border-neutral-100 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <Badge variant="primary" className="px-3 py-1 uppercase tracking-wider">
                System Status: Ready for Deploy
              </Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1]">
                <span className="text-primary">Turn your AI prototype</span> <br />
                into a launch-ready MVP.
              </h1>
              <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed">
                The bridge between "I generated something" and "I can trust this as a real product." Precision engineering for solo founders. No engineers required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-10 max-w-lg">
                <Input 
                  className="flex-grow h-14" 
                  placeholder="Enter your email" 
                  type="email"
                />
                <Button variant="secondary" size="xl" className="whitespace-nowrap px-8">
                  Join the Waitlist
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-neutral-500">Trusted by 200+ Solo Founders</p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <Card className="border-primary/10 shadow-2xl shadow-primary/5 technical-overlay overflow-hidden">
                <CardHeader className="border-b border-neutral-100 bg-neutral-50/50">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Module: Audit_Preview</span>
                    <span className="font-mono text-xs text-primary font-bold">0x7F42A</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-neutral-600">
                      <span>SCALABILITY SCORE</span>
                      <span className="text-primary">64%</span>
                    </div>
                    <div className="h-3 bg-neutral-100 w-full rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[64%] rounded-full shadow-[0_0_12px_rgba(33,47,121,0.3)]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-error/5 border border-error/10">
                      <span className="material-symbols-outlined text-error text-xl mb-2 block">security</span>
                      <p className="text-[10px] font-bold text-error uppercase tracking-tighter">Security Gaps</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <span className="material-symbols-outlined text-primary text-xl mb-2 block">bolt</span>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">UX Latency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Decorative absolute elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-primary/10 pointer-events-none rounded-bl-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-secondary/20 pointer-events-none rounded-tr-3xl"></div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="py-24 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-bold uppercase tracking-widest">
                01 // The Reality Check
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">AI builds code, but experts build products.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <Card className="p-10 border-neutral-200 bg-white">
                <div className="flex items-center gap-4 mb-8 text-error">
                  <span className="material-symbols-outlined text-3xl">cancel</span>
                  <h3 className="text-2xl font-bold text-neutral-900">The AI Prototype Trap</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Fragile spaghetti code that breaks at the first edge case.",
                    "Generic UI/UX that fails to convert or retain users.",
                    "Critical security vulnerabilities in data handling.",
                    "Expensive API calls that drain your budget in days."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-mono text-sm font-bold text-error/40 mt-1">0{i+1}</span>
                      <span className="text-neutral-600 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              {/* After */}
              <Card className="p-10 border-primary/30 bg-primary/5 relative overflow-hidden ring-1 ring-primary/20">
                <div className="flex items-center gap-4 mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <h3 className="text-2xl font-bold text-neutral-900">The NoCodePilot Standard</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Robust, modular architecture ready for thousands of users.",
                    "High-converting UX patterns designed for your specific niche.",
                    "Enterprise-grade security protocols and data encryption.",
                    "Optimized backend flows that minimize operational costs."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-mono text-sm font-bold text-primary mt-1">0{i+1}</span>
                      <span className="text-neutral-600 leading-relaxed font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-[-20px] right-[-20px] opacity-[0.03] pointer-events-none">
                  <span className="material-symbols-outlined text-[180px] text-primary">precision_manufacturing</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Offerings */}
        <section id="services" className="py-24 px-6 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-3xl space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-widest font-bold">
                  02 // Services
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  Precision engineering for every stage of your build.
                </h2>
              </div>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs font-bold">
                View All Solutions
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Audit */}
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="aspect-video mb-0 bg-neutral-100 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    alt="Audit" 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <CardHeader>
                  <Badge variant="info" className="w-fit mb-2">DIAGNOSTIC</Badge>
                  <CardTitle>AI App Audit</CardTitle>
                  <CardDescription className="pt-2">Self-serve diagnostic scoring for UX, security, and scalability. Discover exactly what's holding you back.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-2 transition-all">
                    Start Audit <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Fix Sprints */}
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="aspect-video mb-0 bg-neutral-100 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    alt="Fix Sprints" 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">HUMAN-IN-THE-LOOP</Badge>
                  <CardTitle>Expert Fix Sprints</CardTitle>
                  <CardDescription className="pt-2">Vetted no-code experts to fix your app in record time. Professional oversight for enterprise-grade results.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-2 transition-all">
                    Book Sprint <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Readiness Score */}
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="aspect-video mb-0 bg-neutral-100 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    alt="Readiness Score" 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  />
                  <div className="absolute inset-0 bg-success/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <CardHeader>
                  <Badge variant="success" className="w-fit mb-2">FREE TOOL</Badge>
                  <CardTitle>Launch Readiness Score</CardTitle>
                  <CardDescription className="pt-2">Our free lead magnet calculator. Map out your path to production and estimate launch costs instantly.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-2 transition-all">
                    Get My Score <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Launch Checklist */}
        <section id="checklist" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="px-3 py-1 uppercase tracking-wider font-bold">
                  03 // The Blueprint
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">The Launch Readiness Checklist</h2>
                <p className="text-xl text-neutral-400 leading-relaxed">
                  Don't launch into a void. We ensure your application is technically sound and operationally ready before you spend a dime on marketing.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {[
                    { icon: "fingerprint", title: "Authentication & RBAC", desc: "Multi-tenant security and role-based access." },
                    { icon: "payments", title: "Stripe Infrastructure", desc: "Webhooks, seat management, and tax compliance." },
                    { icon: "database", title: "Relational Integrity", desc: "Optimized database schemas for fast queries." },
                    { icon: "monitoring", title: "Error Logging", desc: "Know when your app fails before your users do." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-neutral-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="p-12 rounded-3xl border border-white/20 bg-neutral-800/50 backdrop-blur-md shadow-2xl">
                  <div className="font-mono text-sm text-secondary space-y-2 mb-10">
                    <p className="opacity-80">INITIALIZING_STAGING_DEPLOYMENT...</p>
                    <p>&gt; CHECKING AUTH_CONFIG... <span className="text-success font-bold">OK</span></p>
                    <p>&gt; VERIFYING DB_SCHEMA... <span className="text-success font-bold">OK</span></p>
                    <p>&gt; TESTING STRIPE_CONNECT... <span className="text-success font-bold">OK</span></p>
                    <p>&gt; COMPILING ASSETS... <span className="text-success font-bold">OK</span></p>
                    <p className="animate-pulse">_</p>
                  </div>
                  <div className="flex justify-center py-10 relative">
                    <div className="w-48 h-48 rounded-full border-[6px] border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(33,47,121,0.4)]">
                      <span className="text-5xl font-extrabold text-white">98%</span>
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 w-48 h-48 mx-auto my-10 rounded-full border-4 border-primary animate-ping opacity-20"></div>
                  </div>
                  <p className="text-center mt-6 font-bold uppercase tracking-[0.3em] text-secondary text-sm">Staging_Ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="waitlist" className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <Badge variant="primary" className="px-4 py-1 uppercase tracking-widest font-bold">Get Started</Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Ready to stop tinkering <br />and start launching?
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Join the waitlist to get priority access to our AI audit tools and expert fix sprints. The bridge to a real product starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-12">
              <Input 
                className="flex-grow h-14 bg-neutral-50" 
                placeholder="Enter your email" 
                type="email"
              />
              <Button variant="secondary" size="xl" className="whitespace-nowrap px-10 shadow-lg shadow-secondary/20">
                Join the Waitlist
              </Button>
            </div>
            <p className="pt-6 text-sm text-neutral-400 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">lock</span>
              Your data is secure. No-spam guarantee.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="text-2xl font-bold text-primary tracking-tight">NoCodePilot</div>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              Precision engineering for launch readiness. We help solo founders turn AI-generated prototypes into production-grade products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-neutral-600">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-neutral-600">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-neutral-600">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-primary transition-colors">Audit Tool</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Expert Sprints</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Readiness Score</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-400">© 2026 NoCodePilot. All rights reserved.</p>
          <p className="text-xs text-neutral-400">Built with precision for the next generation of founders.</p>
        </div>
      </footer>
    </>
  );
}
