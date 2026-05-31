import { useState } from 'react';
import { ExternalLink, Filter, Laptop, X, Send } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 1,
      category: 'Web App',
      title: 'E-Commerce Dashboard',
      description: 'Advanced admin panel for product inventory, order processing, and sales analytics.',
      tech: ['React', 'Chart.js', 'Node.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      details: 'Built with React and integrated with Stripe for payment processing. Features role-based access and real-time sales tracking.',
      accent: '#eb7604',
    },
    {
      id: 2,
      category: 'System',
      title: 'School Management',
      description: 'Comprehensive digital infrastructure for student records, attendance, and grading.',
      tech: ['Laravel', 'MySQL', 'Bootstrap 5'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop',
      details: 'Deployed for a local school in Kigali. Includes automated report generation and secure parent-teacher portals.',
      accent: '#b6252a',
    },
    {
      id: 3,
      category: 'Fintech',
      title: 'Payment Gateway API',
      description: 'Secure transaction processing engine for local and international payment methods.',
      tech: ['Node.js', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      details: 'Built to handle high-concurrency transactions with built-in fraud detection and automated reconciliation.',
      accent: '#e4973b',
    },
    {
      id: 4,
      category: 'AI',
      title: 'Customer Sentiment Bot',
      description: 'AI-driven tool for analyzing customer reviews and support tickets in real-time.',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      details: 'Uses Natural Language Processing to categorize customer emotions, helping brands improve service response.',
      accent: '#0f172a',
    },
    {
      id: 5,
      category: 'IT Tool',
      title: 'Network Monitor Pro',
      description: 'System utility for monitoring server uptime, latency, and resource allocation.',
      tech: ['Python', 'Docker', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop',
      details: 'Used for infrastructure health checks. Sends instant alerts via Telegram when downtime is detected.',
      accent: '#0f172a',
    },
    {
      id: 6,
      category: 'System',
      title: 'Smart Warehouse ERP',
      description: 'Inventory tracking system with QR code integration and automated restock alerts.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      details: 'Optimized for logistics companies. Tracks item movement from intake to delivery with 99.9% accuracy.',
      accent: '#eb7604',
    },
    {
      id: 7,
      category: 'Web App',
      title: 'HealthCare Portal',
      description: 'Telemedicine platform connecting patients with specialists for remote consultations.',
      tech: ['Next.js', 'WebRTC', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      details: 'Features end-to-end encrypted video calls and an integrated digital prescription system.',
      accent: '#b6252a',
    },
    {
      id: 8,
      category: 'AI',
      title: 'Auto-Crop Vision Tool',
      description: 'Machine learning tool for automatic image processing and object background removal.',
      tech: ['Python', 'OpenCV', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070&auto=format&fit=crop',
      details: 'Designed for photographers and e-commerce sellers to batch process thousands of images in minutes.',
      accent: '#e4973b',
    },
    {
      id: 9,
      category: 'Fintech',
      title: 'Crypto Portfolio Tracker',
      description: 'Live dashboard for tracking multi-chain assets and historical performance data.',
      tech: ['React', 'Web3.js', 'Coingecko API'],
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop',
      details: 'Provides real-time price updates and profit/loss calculations for over 5,000 different digital assets.',
      accent: '#0f172a',
    },
    {
      id: 10,
      category: 'IT Tool',
      title: 'Security Audit Script',
      description: 'Automated script for scanning server vulnerabilities and outdated dependencies.',
      tech: ['Bash', 'Nmap', 'Go'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      details: 'A must-have for SysAdmins. Generates a detailed PDF report of security risks within an IT network.',
      accent: '#eb7604',
    },
    {
      id: 11,
      category: 'Web App',
      title: 'Booking Engine',
      description: 'Centralized reservation system for hotels, car rentals, and tour packages.',
      tech: ['Laravel', 'Vue.js', 'Postgres'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2070&auto=format&fit=crop',
      details: 'Integrated with global distribution systems (GDS) to provide real-time availability across the globe.',
      accent: '#b6252a',
    },
    {
      id: 12,
      category: 'System',
      title: 'Church Management',
      description: 'Management system for memberships, contributions, and event scheduling.',
      tech: ['React', 'Supabase', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop',
      details: 'Streamlines administrative tasks and improves communication with church members via SMS integration.',
      accent: '#e4973b',
    },
  ];

  const filterCategories = ['All', 'Web App', 'System', 'Fintech', 'AI', 'IT Tool'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === selectedFilter);

  const triggerProjectWhatsApp = (project: Project) => {
    const recipient = '250791767725';
    const msg = `Hi Schadrack, I'm reviewing your portfolio and would like to inquire about your project: *${project.title}* (${project.category}).`;
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-stone-900 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 block mb-2">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-4xl font-serif italic text-stone-100 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-px w-12 bg-stone-700 mx-auto mt-4" />
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 select-none">
          {filterCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.18em] transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-stone-100 text-[#0a0a0a]'
                  : 'bg-stone-950/40 border border-stone-900 text-stone-500 hover:text-stone-300 hover:bg-stone-900/40'
              }`}
            >
              {cat === 'All' && <Filter className="w-3 h-3 text-stone-400" style={{ color: selectedFilter === 'All' ? '#0a0a0a' : '#78716c' }} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-stone-950/40 rounded-[32px] border border-stone-900 overflow-hidden hover:border-stone-750 hover:bg-stone-900/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail Banner */}
                <div className="aspect-[16:10] w-full bg-stone-950 relative overflow-hidden border-b border-stone-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-102"
                  />
                  {/* Category Float tag */}
                  <div className="absolute top-4 left-4 bg-stone-950/90 backdrop-blur border border-stone-850 text-stone-300 font-mono text-[9px] px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Technology tokens */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono px-2 py-1 bg-stone-900 text-stone-400 rounded border border-stone-850/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif italic text-stone-200 text-lg mb-2 leading-snug group-hover:text-stone-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-550 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card bottom actions */}
              <div className="p-6 pt-0 border-t border-stone-900/40 flex items-center justify-between text-[11px] font-bold tracking-wider text-stone-500 group-hover:text-stone-200 transition-colors mt-auto">
                <span>View Case Study</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-stone-300 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAIL DRAWER / MODAL SHEETS */}
      {activeProject && (
        <div className="fixed inset-0 bg-[#060606]/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-stone-950 rounded-3xl border border-stone-900 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-[fadeIn_0.3s_ease-out] flex flex-col justify-between">
            {/* Header banner */}
            <div className="relative aspect-[16:8] w-full bg-stone-950 overflow-hidden flex-shrink-0 border-b border-stone-900">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-stone-950/90 backdrop-blur-md text-stone-300 hover:text-stone-100 rounded-full border border-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 bg-stone-950/90 backdrop-blur-md text-stone-300 font-mono text-[9px] px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-stone-850">
                {activeProject.category}
              </div>
            </div>

            {/* Scrollable specs description */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
              <div>
                <h3 className="font-serif italic text-stone-100 text-2xl mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm italic leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="bg-[#0c0c0c] p-5 rounded-2xl border border-stone-900">
                <h5 className="font-serif italic text-stone-300 text-sm mb-2">Project Overview</h5>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                  {activeProject.details}
                </p>
              </div>

              <div>
                <h6 className="text-[10px] uppercase font-bold tracking-widest text-stone-500 mb-3">
                  Involved Technologies
                </h6>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-3.5 py-2 bg-stone-900 text-stone-450 border border-stone-850 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA panel absolute bottom position */}
            <div className="p-6 border-t border-stone-900 flex items-center justify-between gap-4 flex-shrink-0 bg-stone-950">
              <button
                onClick={() => triggerProjectWhatsApp(activeProject)}
                className="w-full bg-stone-100 hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
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
