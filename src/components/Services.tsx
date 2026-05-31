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
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[3px] font-black text-orange-500 block mb-2">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Premium Services
          </h2>
          <div className="h-[4px] w-12 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceList.map((service) => {
            let IconClass = Code;
            if (service.icon === 'Code') IconClass = Code;
            if (service.icon === 'GraduationCap') IconClass = GraduationCap;
            if (service.icon === 'Laptop') IconClass = Laptop;
            if (service.icon === 'Cog') IconClass = Cog;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 hover:border-orange-500/10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Header container with accent and logo */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: `${service.accent}15`,
                        color: service.accent,
                      }}
                    >
                      <IconClass className="w-5 h-5" />
                    </div>
                    {/* Tiny visual badge */}
                    <div className="text-slate-200 group-hover:text-amber-500 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg mb-2 leading-snug group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sublist entries */}
                <div className="border-t border-slate-50 pt-4 mt-auto">
                  <ul className="space-y-2">
                    {service.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accent }}
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
        <div className="bg-white rounded-[40px] border border-slate-100 p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
              Our Professional Process
            </h4>
            <p className="text-slate-400 text-sm">
              How we turn your digital ideas into scalable solutions.
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
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 group-hover:border-orange-500 group-hover:bg-white flex items-center justify-center text-slate-700 group-hover:text-orange-500 transition-all duration-350 shadow-sm relative z-10 cursor-pointer">
                    <StepIcon className="w-6 h-6" />
                    {/* Index float bubble */}
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-100 text-slate-600 font-extrabold text-[10px] flex items-center justify-center shadow-inner group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                      0{idx + 1}
                    </div>
                  </div>

                  <h5 className="font-bold text-slate-800 text-base mt-4 mb-1">
                    {step.title}
                  </h5>
                  <p className="text-slate-400 text-xs font-semibold max-w-[180px]">
                    {step.desc}
                  </p>

                  {/* Horizontal line indicators between columns */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-slate-150 relative z-0" />
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
