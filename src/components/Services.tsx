import { Code, GraduationCap, Laptop, Cog, MessageSquare, Map, Cpu, Headphones, ChevronRight } from 'lucide-react';
import { ServiceItem, ProcessStep } from '../types';

export default function Services() {
  const serviceList: ServiceItem[] = [
    {
      id: 1,
      icon: 'Code',
      title: 'Software Development',
      accent: '#eb7604',
      description: 'Custom, scalable digital products built with modern frameworks.',
      items: ['Web Applications', 'Mobile Solutions', 'Custom APIs'],
    },
    {
      id: 2,
      icon: 'GraduationCap',
      title: 'Tech Training',
      accent: '#e4973b',
      description: 'Empowering the next generation with professional digital literacy.',
      items: ['Full-stack Development', 'Essential Computer Skills', 'Digital Literacy'],
    },
    {
      id: 3,
      icon: 'Laptop',
      title: 'Professional IT Support',
      accent: '#b6252a',
      description: 'Reliable hardware and software maintenance for your business.',
      items: ['Network Security', 'Hardware Repair', 'System Recovery'],
    },
    {
      id: 4,
      icon: 'Cog',
      title: 'Digital Consulting',
      accent: '#eb7604',
      description: 'Strategic roadmap for your business digital transformation.',
      items: ['Cloud Strategy', 'Workflow Automation', 'Tech Audits'],
    },
  ];

  const processSteps: ProcessStep[] = [
    { title: 'Consult', desc: 'Analyzing your goals.', icon: 'MessageSquare' },
    { title: 'Plan', desc: 'Strategizing the path.', icon: 'Map' },
    { title: 'Execute', desc: 'Building the solution.', icon: 'Cpu' },
    { title: 'Support', desc: 'Continuous growth.', icon: 'Headphones' },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 select-none">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 block mb-2">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-serif italic text-stone-100 tracking-tight">
            Premium Services
          </h2>
          <div className="h-px w-12 bg-stone-700 mx-auto mt-4" />
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {serviceList.map((service) => {
            let IconClass = Code;
            if (service.icon === 'Code') IconClass = Code;
            if (service.icon === 'GraduationCap') IconClass = GraduationCap;
            if (service.icon === 'Laptop') IconClass = Laptop;
            if (service.icon === 'Cog') IconClass = Cog;

            return (
              <div
                key={service.id}
                className="bg-stone-950/40 rounded-[32px] p-7 border border-stone-900 hover:border-stone-750 hover:bg-stone-900/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Header container with accent and logo */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center bg-stone-900 text-stone-300 border border-stone-850 group-hover:text-stone-100 transition-colors"
                    >
                      <IconClass className="w-4 h-4" />
                    </div>
                    {/* Tiny visual badge */}
                    <div className="text-stone-700 group-hover:text-stone-400 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif italic text-stone-200 text-lg mb-2 leading-snug group-hover:text-stone-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sublist entries */}
                <div className="border-t border-stone-900 pt-4 mt-auto">
                  <ul className="space-y-2">
                    {service.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                        <div
                          className="w-1 h-1 bg-stone-700"
                        />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow steps block */}
        <div className="bg-stone-950/40 rounded-[32px] border border-stone-900 p-8 sm:p-12">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-serif text-stone-200 italic mb-2">
              Our Process
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm font-mono uppercase tracking-wider">
              From creative consultation to scalable solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => {
              let StepIcon = MessageSquare;
              if (step.icon === 'MessageSquare') StepIcon = MessageSquare;
              if (step.icon === 'Map') StepIcon = Map;
              if (step.icon === 'Cpu') StepIcon = Cpu;
              if (step.icon === 'Headphones') StepIcon = Headphones;

              return (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  {/* Outer circle with step index indicator */}
                  <div className="w-14 h-14 rounded-full bg-stone-900 border border-stone-850 text-stone-400 group-hover:border-stone-550 group-hover:text-stone-100 flex items-center justify-center relative z-10 transition-all cursor-pointer">
                    <StepIcon className="w-5 h-5" />
                    {/* Index float bubble */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-stone-950 border border-stone-850 text-stone-400 font-mono text-[9px] flex items-center justify-center group-hover:bg-stone-100 group-hover:text-stone-950 group-hover:border-stone-100 transition-all">
                      0{idx + 1}
                    </div>
                  </div>

                  <h5 className="font-serif italic text-stone-300 text-base mt-4 mb-1">
                    {step.title}
                  </h5>
                  <p className="text-stone-500 text-[11px] font-mono">
                    {step.desc}
                  </p>

                  {/* Horizontal line indicators between columns */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-[28px] left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] h-[1px] bg-stone-900/60 relative z-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
