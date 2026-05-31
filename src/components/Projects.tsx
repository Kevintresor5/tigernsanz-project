import { useState } from 'react';
import { ExternalLink, Filter, Laptop, X, Send, Search } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const projectsList: Project[] = [
    {
      id: 1,
      category: 'Web App',
      title: 'E-Commerce Dashboard',
      description: 'Advanced admin panel for product inventory, order processing, and sales analytics.',
      tech: ['React', 'Chart.js', 'Node.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      details: 'Built with React and integrated with Stripe for payment processing. Features role-based access and real-time sales tracking.',
      accent: '#10b981',
    },
    {
      id: 2,
      category: 'System',
      title: 'School Management',
      description: 'Comprehensive digital infrastructure for student records, attendance, and grading.',
      tech: ['Laravel', 'MySQL', 'Bootstrap 5'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop',
      details: 'Deployed for a local school in Kigali. Includes automated report generation and secure parent-teacher portals.',
      accent: '#059669',
    },
    {
      id: 3,
      category: 'Fintech',
      title: 'Payment Gateway API',
      description: 'Secure transaction processing engine for local and international payment methods.',
      tech: ['Node.js', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      details: 'Built to handle high-concurrency transactions with built-in fraud detection and automated reconciliation.',
      accent: '#34d399',
    },
    {
      id: 4,
      category: 'AI',
      title: 'Customer Sentiment Bot',
      description: 'AI-driven tool for analyzing customer reviews and support tickets in real-time.',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      details: 'Uses Natural Language Processing to categorize customer emotions, helping brands improve service response.',
      accent: '#047857',
    },
    {
      id: 5,
      category: 'IT Tool',
      title: 'Network Monitor Pro',
      description: 'System utility for monitoring server uptime, latency, and resource allocation.',
      tech: ['Python', 'Docker', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop',
      details: 'Used for infrastructure health checks. Sends instant alerts via Telegram when downtime is detected.',
      accent: '#10b981',
    },
    {
      id: 6,
      category: 'System',
      title: 'Smart Warehouse ERP',
      description: 'Inventory tracking system with QR code integration and automated restock alerts.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      details: 'Optimized for logistics companies. Tracks item movement from intake to delivery with 99.9% accuracy.',
      accent: '#059669',
    },
    {
      id: 7,
      category: 'Web App',
      title: 'HealthCare Portal',
      description: 'Telemedicine platform connecting patients with specialists for remote consultations.',
      tech: ['Next.js', 'WebRTC', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      details: 'Features end-to-end encrypted video calls and an integrated digital prescription system.',
      accent: '#34d399',
    },
    {
      id: 8,
      category: 'AI',
      title: 'Auto-Crop Vision Tool',
      description: 'Machine learning tool for automatic image processing and object background removal.',
      tech: ['Python', 'OpenCV', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070&auto=format&fit=crop',
      details: 'Designed for photographers and e-commerce sellers to batch process thousands of images in minutes.',
      accent: '#047857',
    },
    {
      id: 9,
      category: 'Fintech',
      title: 'Crypto Portfolio Tracker',
      description: 'Live dashboard for tracking multi-chain assets and historical performance data.',
      tech: ['React', 'Web3.js', 'Coingecko API'],
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop',
      details: 'Provides real-time price updates and profit/loss calculations for over 5,000 different digital assets.',
      accent: '#10b981',
    },
    {
      id: 10,
      category: 'IT Tool',
      title: 'Security Audit Script',
      description: 'Automated script for scanning server vulnerabilities and outdated dependencies.',
      tech: ['Bash', 'Nmap', 'Go'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      details: 'A must-have for SysAdmins. Generates a detailed PDF report of security risks within an IT network.',
      accent: '#059669',
    },
    {
      id: 11,
      category: 'Web App',
      title: 'Booking Engine',
      description: 'Centralized reservation system for hotels, car rentals, and tour packages.',
      tech: ['Laravel', 'Vue.js', 'Postgres'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2070&auto=format&fit=crop',
      details: 'Integrated with global distribution systems (GDS) to provide real-time availability across the globe.',
      accent: '#34d399',
    },
    {
      id: 12,
      category: 'System',
      title: 'Church Management',
      description: 'Management system for memberships, contributions, and event scheduling.',
      tech: ['React', 'Supabase', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop',
      details: 'Streamlines administrative tasks and improves communication with church members via SMS integration.',
      accent: '#047857',
    },
    {
      id: 13,
      category: 'System',
      title: 'Remy Nsanzimana DevHub • Kivumu TSS',
      description: 'Advanced real-time workstation & education gateway built for EAV Kivumu TSS L4SWD class.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Git'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
      details: 'Co-developed and designed by student Remy Nsanzimana representing Level 4 Software Development (L4SWD) at EAV Kivumu Technical Secondary School (TSS), mentored under the supervision of reneproject.',
      accent: '#ff5500',
    },
  ];

  const filterCategories = ['All', 'Web App', 'System', 'Fintech', 'AI', 'IT Tool'];

  const filteredProjects = projectsList.filter(p => {
    const matchesCategory = selectedFilter === 'All' || p.category === selectedFilter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesTitle = p.title.toLowerCase().includes(query);
    const matchesTech = p.tech.some(t => t.toLowerCase().includes(query));
    const matchesDesc = p.description.toLowerCase().includes(query) || p.details.toLowerCase().includes(query);

    return matchesCategory && (matchesTitle || matchesTech || matchesDesc);
  });

  const triggerProjectWhatsApp = (project: Project) => {
    const recipient = '250795547233';
    const msg = `Hi Remy, I'm reviewing your portfolio and would like to inquire about your project: *${project.title}* (${project.category}).`;
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-[#fcfbfa] border-t border-stone-200/50 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title corresponding to Screenshot 3 */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 block mb-2.5">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
            Innovating <span className="text-[#ff5500]">Digital</span> Solutions
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            A showcase of high-performance systems and creative web applications designed to scale businesses.
          </p>
          <div className="h-px w-12 bg-orange-500/25 mx-auto mt-6" />
        </div>

        {/* Real-Time Search Bar Component */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spec or tech (e.g. React, Remy, L4SWD)..."
              className="w-full px-5 py-3.5 pl-11 bg-white border border-stone-200 text-stone-850 placeholder-stone-400 text-xs rounded-full outline-none focus:border-[#ff5500]/50 focus:ring-2 focus:ring-[#ff5500]/5 text-ellipsis transition-all shadow-sm"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-all cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Bar matching Screenshot 3 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 select-none">
          {filterCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] uppercase font-bold tracking-[0.18em] transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
                selectedFilter === cat
                  ? 'bg-stone-950 text-white border-stone-950 shadow-sm'
                  : 'bg-white border-stone-200 text-stone-500 hover:text-stone-850 hover:bg-stone-50'
              }`}
            >
              {cat === 'All' && <Filter className="w-3 h-3" style={{ color: selectedFilter === 'All' ? '#ffffff' : '#ff5500' }} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display of Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="bg-white rounded-[24px] border border-stone-200/80 overflow-hidden hover:border-[#ff5500]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Visual Thumbnail Banner with full active color */}
                  <div className="aspect-[16:11] w-full bg-stone-50 relative overflow-hidden border-b border-stone-150">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Category Float tag */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur border border-stone-200 text-stone-700 font-mono text-[9px] px-3 py-1.5 rounded-full uppercase tracking-widest group-hover:border-[#ff5500]/25 group-hover:text-[#ff5500] transition-all duration-300 relative z-10 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Technology tokens */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-mono font-bold tracking-wide uppercase px-2 py-0.5 bg-stone-50 text-stone-500 rounded border border-stone-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-stone-900 text-lg mb-2 leading-snug group-hover:text-[#ff5500] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card bottom actions in clean light theme style */}
                <div className="p-6 pt-0 border-t border-stone-100/60 flex items-center justify-between text-[11px] font-bold tracking-wider text-stone-400 group-hover:text-[#ff5500] transition-colors mt-auto">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#ff5500] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-stone-200/60 rounded-[32px] p-8 max-w-lg mx-auto shadow-sm">
            <Laptop className="w-10 h-10 text-stone-300 mx-auto mb-4 animate-pulse" />
            <h4 className="text-base font-serif italic text-stone-800 mb-2">No projects found</h4>
            <p className="text-stone-400 text-xs sm:text-sm">
              We couldn't find any projects matching "{searchQuery}". Try editing your query or clearing limits!
            </p>
          </div>
        )}

      </div>

      {/* DETAIL DRAWER / MODAL SHEETS - Re-styled for light theme match */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white rounded-3xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Header banner */}
            <div className="relative aspect-[16:8] w-full bg-stone-100 overflow-hidden flex-shrink-0 border-b border-stone-200">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/95 backdrop-blur shadow-sm text-stone-600 hover:text-stone-900 rounded-full border border-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-stone-800 font-mono text-[9px] px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-stone-200 shadow-sm">
                {activeProject.category}
              </div>
            </div>

            {/* Scrollable specs description */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
              <div>
                <h3 className="font-serif italic text-stone-900 text-2xl mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm italic leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
                <h5 className="font-serif italic text-stone-800 text-sm mb-2">Project Overview</h5>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {activeProject.details}
                </p>
              </div>

              <div>
                <h6 className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-3 block">
                  Involved Technologies
                </h6>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-3.5 py-1.5 bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA panel absolute bottom position */}
            <div className="p-6 border-t border-stone-150 flex items-center justify-between gap-4 flex-shrink-0 bg-stone-50">
              <button
                onClick={() => triggerProjectWhatsApp(activeProject)}
                className="w-full bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-550/10"
              >
                <Send className="w-4 h-4" />
                Inquire Project Collaboration
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
