import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant fixed top-0 w-full z-50">
        <nav className="flex justify-between items-center w-full px-md md:px-lg max-w-container-max mx-auto h-16">
          <a href="#" className="font-h3 text-h3 font-bold text-primary">NoCodePilot</a>
          <div className="hidden md:flex gap-gutter items-center">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#problem">The Problem</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#services">Solutions</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#checklist">Checklist</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#waitlist">Waitlist</a>
          </div>
          <div className="flex gap-sm">
            <button className="hidden md:block font-body-sm text-body-sm font-medium text-on-surface-variant hover:text-primary"></button>
            <a href="#waitlist" className="bg-primary text-on-primary px-md py-xs font-label-caps text-label-caps rounded hover:brightness-110 transition-all">Join Waitlist</a>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative blueprint-grid py-xl px-md overflow-hidden border-b border-outline-variant">
          <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-7 space-y-md">
              <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-xs py-1 border border-primary/30">SYSTEM STATUS: READY_FOR_DEPLOY</span>
              <h1 className="font-h1 text-3xl md:text-h1 text-on-surface tracking-tight leading-tight"><span className="text-primary">Turn your AI prototype</span> into a launch-ready MVP.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">The bridge between "I generated something" and "I can trust this as a real product." No engineers required.</p>
              <div className="flex flex-col sm:flex-row gap-xs mt-lg max-w-md">
                <input className="flex-grow border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-lowest text-on-surface font-body-md p-sm rounded-none" placeholder="Enter your email" type="email"/>
                <button className="bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm hover:brightness-110 transition-all">Join the Waitlist</button>
              </div>
              <div className="flex items-center gap-sm pt-md">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-on-surface">JD</div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary">MK</div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-bright flex items-center justify-center text-[10px] font-bold text-on-surface">ST</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Trusted by 200+ Solo Founders</p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="bg-surface-container-lowest border border-outline-variant p-md shadow-2xl shadow-primary/5 technical-overlay">
                <div className="flex justify-between border-b border-outline-variant pb-sm mb-md">
                  <span className="font-label-caps text-label-caps opacity-60 text-on-surface-variant">MODULE: AUDIT_PREVIEW</span>
                  <span className="font-code text-code text-primary">0x7F42A</span>
                </div>
                <div className="space-y-sm">
                  <div className="h-2 bg-surface-container-high w-full rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[64%] shadow-[0_0_10px_rgba(0,255,204,0.5)]"></div>
                  </div>
                  <div className="flex justify-between font-label-caps text-[10px]">
                    <span className="text-on-surface-variant">SCALABILITY SCORE</span>
                    <span className="text-primary font-bold">64%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-sm pt-sm">
                    <div className="p-sm bg-error/5 border border-error/20">
                      <span className="material-symbols-outlined text-error text-body-md" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                      <p className="font-label-caps text-[10px] text-error mt-1">SECURITY GAPS</p>
                    </div>
                    <div className="p-sm bg-primary/5 border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-body-md">bolt</span>
                      <p className="font-label-caps text-[10px] text-primary mt-1">UX LATENCY</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative absolute elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-primary/20 pointer-events-none"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r border-t border-primary/20 pointer-events-none"></div>
            </div>
          </div>
        </section>
        {/* The Problem */}
        <section id="problem" className="py-xl bg-surface-container-low border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-md">
            <div className="text-center mb-xl">
              <span className="font-label-caps text-label-caps text-primary">01 // THE REALITY CHECK</span>
              <h2 className="font-h2 text-2xl md:text-h2 text-on-surface mt-xs leading-tight">AI builds code, but experts build products.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-gutter">
              {/* Before */}
              <div className="bg-surface-container-lowest border border-outline-variant p-lg">
                <div className="flex items-center gap-sm mb-md text-error">
                  <span className="material-symbols-outlined">cancel</span>
                  <h3 className="font-h3 text-h3">The AI Prototype Trap</h3>
                </div>
                <ul className="space-y-md font-body-md text-on-surface-variant">
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-error mt-1">01</span>
                    <span>Fragile spaghetti code that breaks at the first edge case.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-error mt-1">02</span>
                    <span>Generic UI/UX that fails to convert or retain users.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-error mt-1">03</span>
                    <span>Critical security vulnerabilities in data handling.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-error mt-1">04</span>
                    <span>Expensive API calls that drain your budget in days.</span>
                  </li>
                </ul>
              </div>
              {/* After */}
              <div className="bg-surface-container-high border border-primary/30 p-lg relative overflow-hidden">
                <div className="flex items-center gap-sm mb-md text-primary">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <h3 className="font-h3 text-h3 text-on-surface">The NoCodePilot Standard</h3>
                </div>
                <ul className="space-y-md font-body-md text-on-surface-variant">
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-primary mt-1">01</span>
                    <span>Robust, modular architecture ready for thousands of users.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-primary mt-1">02</span>
                    <span>High-converting UX patterns designed for your specific niche.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-primary mt-1">03</span>
                    <span>Enterprise-grade security protocols and data encryption.</span>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="font-code text-code text-primary mt-1">04</span>
                    <span>Optimized backend flows that minimize operational costs.</span>
                  </li>
                </ul>
                <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[120px] text-primary">precision_manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Offerings */}
        <section id="services" className="py-xl px-md border-b border-outline-variant">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-md">
              <div className="max-w-3xl">
                <span className="font-label-caps text-label-caps text-primary">02 // SERVICES</span>
                <h2 className="font-h2 text-2xl md:text-h2 lg:text-4xl text-on-surface mt-xs leading-tight">Precision engineering for every stage of your build.</h2>
              </div>
              <button className="border border-primary text-primary font-label-caps text-label-caps px-md py-sm hover:bg-primary/10 transition-colors">VIEW ALL SOLUTIONS</button>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter">
              {/* Audit */}
              <div className="group border border-outline-variant bg-surface-container-lowest p-md hover:border-primary transition-colors">
                <div className="h-48 mb-md bg-surface-container-high overflow-hidden border border-outline-variant relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" alt="A clean, minimalist high-tech dashboard interface showing complex data analytics with blue and teal glowing accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUUaZvxAGvBFnJt4_ctehSj2EiNr6kOhaptMRM9KmG79VreXbUCFQI6F7vpyZBEyMGm2beVletsfBsw--bJ6WmU1brYPySb4DvtZgqmr8Hzhg2v-rZuMcSTeK3-oho3tq6ndLvnfyLmf-Pq1OSMlBZ_z6swwAb4Nj_9gTb9s1xsRiiLOuGPbOIDnPRkgaifg6O5gR5WP9nizGjbCMkX9RVkC1ujHaPNBs72uaeyhlevEINe0QPdFl6T2PMQhiHaXM6IlZINW8mA"/>
                </div>
                <span className="font-label-caps text-[10px] text-primary bg-primary/10 px-1">DIAGNOSTIC</span>
                <h3 className="font-h3 text-h3 text-on-surface mt-sm mb-xs">AI App Audit</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Self-serve diagnostic scoring for UX, security, and scalability. Discover exactly what's holding you back.</p>
                <a className="flex items-center gap-xs text-primary font-label-caps text-label-caps group-hover:gap-sm transition-all" href="#">START AUDIT <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              {/* Fix Sprints */}
              <div className="group border border-outline-variant bg-surface-container-lowest p-md hover:border-primary transition-colors">
                <div className="h-48 mb-md bg-surface-container-high overflow-hidden border border-outline-variant relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" alt="Close-up of a high-end mechanical component or watch movement being adjusted by precision tools." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR0WeAIe3J4Fm_xLm-vu5-bowU0o1lFOi6f4UE4TtU5KiVY2PYtl7QytyR5QX9_YcAKHkLsEuxV4XgsQVPmH8sE8TwWuM71pi1DopXFTttWhWw5Fz19cUWPSJfx7vfHuEVFL2QZieRYrCrQHU7IuWI4mALsmcjQBHXEfNmpXnlDeT9qr3sNNAsqm0xxAtksPTpMIjqpV8MyDvxH25L7nUb8T_EnM1EQ01kSJiMzokNSXdpun8vAECI-7ErSR77c2goF6TW7fQw-Q"/>
                </div>
                <span className="font-label-caps text-[10px] text-primary bg-primary/10 px-1">HUMAN-IN-THE-LOOP</span>
                <h3 className="font-h3 text-h3 text-on-surface mt-sm mb-xs">Expert Fix Sprints</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Vetted no-code experts to fix your app in record time. Professional oversight for enterprise-grade results.</p>
                <a className="flex items-center gap-xs text-primary font-label-caps text-label-caps group-hover:gap-sm transition-all" href="#">BOOK SPRINT <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              {/* Readiness Score */}
              <div className="group border border-outline-variant bg-surface-container-lowest p-md hover:border-primary transition-colors">
                <div className="h-48 mb-md bg-surface-container-high overflow-hidden border border-outline-variant relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" alt="A wide-angle shot of a bright, modern architectural workspace with blueprint drawings spread across a large table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB40yQIEd4ePNEW8YxXrfMwWChWH5gMFIEPxBmc07m4Dd-jl9VwuWPhgGSdzmC-bncngLHNVaubwNs4jytxNgQvyybxbx-Pjkb1I2vVYIkIEMZpJs8BDjHXHU51m8SH5Sa7xdFi4nKRVvkcxmxQ7F1Hm_3HPQ781GEekWV1ZF13gE1F81ryhysh5k7aPt1LWZwIZhebKP05ZRAVu_0GcmU-GFZlFSvmxWOeML7c-yERkDzix3RZX3ZSDQZnXrYgnwg0mftPItE0tQ"/>
                </div>
                <span className="font-label-caps text-[10px] text-primary bg-primary/20 px-1">FREE TOOL</span>
                <h3 className="font-h3 text-h3 text-on-surface mt-sm mb-xs">Launch Readiness Score</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Our free lead magnet calculator. Map out your path to production and estimate launch costs instantly.</p>
                <a className="flex items-center gap-xs text-primary font-label-caps text-label-caps group-hover:gap-sm transition-all" href="#">GET MY SCORE <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </section>
        {/* Launch Checklist */}
        <section id="checklist" className="py-xl bg-surface-container-low technical-overlay overflow-hidden">
          <div className="max-w-container-max mx-auto px-md">
            <div className="grid md:grid-cols-2 gap-lg items-center">
              <div>
                <span className="font-label-caps text-label-caps text-primary">03 // THE BLUEPRINT</span>
                <h2 className="font-h2 text-2xl md:text-h2 text-on-surface mt-xs mb-md leading-tight">The Launch Readiness Checklist</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">Don't launch into a void. We ensure your application is technically sound and operationally ready before you spend a dime on marketing.</p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-md p-sm border border-outline-variant bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-primary">fingerprint</span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Authentication & RBAC</h4>
                      <p className="text-xs text-on-surface-variant">Multi-tenant security and role-based access.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md p-sm border border-outline-variant bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Stripe Infrastructure</h4>
                      <p className="text-xs text-on-surface-variant">Webhooks, seat management, and tax compliance.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md p-sm border border-outline-variant bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-primary">database</span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Relational Integrity</h4>
                      <p className="text-xs text-on-surface-variant">Optimized database schemas for fast queries.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md p-sm border border-outline-variant bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-primary">monitoring</span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Error Logging</h4>
                      <p className="text-xs text-on-surface-variant">Know when your app fails before your users do.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="p-lg border border-primary/20 bg-surface-container-lowest/50 backdrop-blur-sm">
                  <div className="font-code text-code text-[12px] text-primary mb-md">
                    INITIALIZING_STAGING_DEPLOYMENT...<br/>
                    &gt; CHECKING AUTH_CONFIG... <span className="text-primary opacity-80">OK</span><br/>
                    &gt; VERIFYING DB_SCHEMA... <span className="text-primary opacity-80">OK</span><br/>
                    &gt; TESTING STRIPE_CONNECT... <span className="text-primary opacity-80">OK</span><br/>
                    &gt; COMPILING ASSETS... <span className="text-primary opacity-80">OK</span><br/>
                    <br/>
                    <span className="animate-pulse">_</span>
                  </div>
                  <div className="flex justify-center pt-md">
                    <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.3)]">
                      <span className="font-h3 text-h3 text-primary">98%</span>
                    </div>
                  </div>
                  <p className="text-center mt-md font-label-caps text-label-caps text-primary">STAGING_READY</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section id="waitlist" className="py-xl bg-background border-t border-outline-variant blueprint-grid">
          <div className="max-w-4xl mx-auto px-md text-center">
            <span className="font-label-caps text-label-caps text-primary">GET STARTED</span>
            <h2 className="font-h1 text-3xl md:text-h1 text-on-surface mt-sm mb-md tracking-tight leading-tight">Ready to stop tinkering and start launching?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">Join the waitlist to get priority access to our AI audit tools and expert fix sprints. The bridge to a real product starts here.</p>
            <div className="flex flex-col sm:flex-row gap-xs max-w-md mx-auto shadow-2xl shadow-primary/10">
              <input className="flex-grow border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-lowest text-on-surface font-body-md p-sm" placeholder="Enter your email" type="email"/>
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm hover:brightness-110 transition-all">Join the Waitlist</button>
            </div>
            <p className="mt-md font-body-sm text-body-sm text-on-surface-variant opacity-60 flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-sm">lock</span>
              Your data is secure. No-spam guarantee.
            </p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-outline-variant bg-surface-container-lowest">
        <div className="w-full py-lg px-md md:px-lg max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-sm">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <div className="font-label-caps text-label-caps text-primary">NoCodePilot</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant/70 text-center md:text-left">© 2026 NoCodePilot. Precision Engineering for Launch Readiness.</p>
          </div>
          <div className="flex gap-md">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Status</a>
          </div>
        </div>
      </footer>
    </>
  );
}
