import { useState, FormEvent } from 'react';
import { Users, GraduationCap, Cpu, Calendar, Cloud, Wrench, Code2, Monitor, FileSpreadsheet, Send, X } from 'lucide-react';
import { SkillItem, Certification } from '../types';

export default function About() {
  const [activeTab, setActiveTab] = useState<'bio' | 'certs'>('bio');
  const [showCVModal, setShowCVModal] = useState(false);
  const [isApproved, setIsApproved] = useState(false); // Controls whether direct PDF download is active
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    requesterName: '',
    reason: '',
  });

  const skills: SkillItem[] = [
    { name: 'JavaScript / TypeScript', level: 90, color: '#f7df1e' },
    { name: 'React & Vite', level: 85, color: '#61dafb' },
    { name: 'PHP & Laravel', level: 80, color: '#ff2d20' },
    { name: 'IT Support & Troubleshooting', level: 95, color: '#10b981' },
    { name: 'System Architecture', level: 75, color: '#6366f1' },
  ];

  const stats = [
    { value: '50+', label: 'Clients Served', icon: Users, color: '#6366f1' },
    { value: '100+', label: 'Students Trained', icon: GraduationCap, color: '#f28a29' },
    { value: '30+', label: 'Projects Delivered', icon: Cpu, color: '#10b981' },
    { value: '5+', label: 'Years Experience', icon: Calendar, color: '#3b82f6' },
  ];

  const certifications: Certification[] = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      year: '2025',
      color: '#8badc2',
      icon: 'Cloud',
    },
    {
      name: 'CompTIA A+',
      issuer: 'CompTIA',
      year: '2024',
      color: '#f28a29',
      icon: 'Wrench',
    },
    {
      name: 'Laravel Certification',
      issuer: 'Laravel',
      year: '2023',
      color: '#b12328',
      icon: 'Code2',
    },
    {
      name: 'Google IT Support',
      issuer: 'Google',
      year: '2022',
      color: '#d19f4f',
      icon: 'Monitor',
    },
  ];

  const handleRequestCSV = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowCVModal(false);
      setIsApproved(true);
      setIsSubmitting(false);

      const recipient = '250791767725';
      const text = `🚀 *CV ACCESS REQUEST*
━━━━━━━━━━━━━━━━━━
👤 *From:* ${formData.requesterName}
📝 *Reason:* ${formData.reason}
━━━━━━━━━━━━━━━━━━
Hi Schadrack, I'm reviewing your portfolio and would like to download your professional CV.`;

      // Open WhatsApp callback first
      window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
      
      // Clear form
      setFormData({ requesterName: '', reason: '' });
    }, 1200);
  };

  const downloadDirectPDF = () => {
    // Standard trigger for PDF CV download
    const link = document.createElement('a');
    link.href = 'https://infinitymura.netlify.app/Schadrack_CV.pdf'; // Or direct local static download
    link.download = 'Schadrack_Muragijimana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Visual ambient abstract blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[3px] font-black text-orange-500 block mb-2">
            INNOVATOR & EDUCATOR
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            About <span className="text-orange-gradient">Me</span>
          </h2>
          <div className="h-[4px] w-12 bg-[#f28a29] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* PROFILE CARD COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden">
              <div className="h-[10px] bg-orange-500" />
              <div className="p-8 sm:p-10 flex flex-col items-center">
                
                {/* Profile Image with animated spin border */}
                <div className="w-[180px] h-[180px] relative flex items-center justify-center mb-6">
                  {/* Dotted border circle */}
                  <div className="absolute inset-0 border-2 border-dashed border-orange-500 rounded-full animate-spin-slow opacity-40" />
                  <img
                    src="https://infinitymura.netlify.app/images/profile.png"
                    alt="Schadrack"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop';
                    }}
                    className="w-[155px] h-[155px] object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>

                {/* Profile info */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    Schadrack M.
                  </h3>
                  <p className="text-orange-500 font-bold uppercase tracking-wider text-xs">
                    Software Engineer
                  </p>
                </div>

                {/* Technical mastery lines */}
                <div className="w-full bg-slate-50 p-6 rounded-[30px] border border-slate-100">
                  <h6 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-4">
                    Technical Mastery
                  </h6>
                  <div className="space-y-4">
                    {skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-700">{skill.name}</span>
                          <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-[7px] w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                          <div
                            className="h-full rounded-full transition-all duration-[1500ms]"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BIO DETAILS & CREDENTIALS TABS COLUMN */}
          <div className="lg:col-span-7">
            {/* Tab switch buttons */}
            <div className="flex gap-8 mb-8 border-b border-slate-150">
              <button
                onClick={() => setActiveTab('bio')}
                className={`pb-3 font-bold text-sm tracking-wide transition-all border-b-3 relative cursor-pointer ${
                  activeTab === 'bio'
                    ? 'text-slate-900 border-orange-500'
                    : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('certs')}
                className={`pb-3 font-bold text-sm tracking-wide transition-all border-b-3 relative cursor-pointer ${
                  activeTab === 'certs'
                    ? 'text-slate-900 border-orange-500'
                    : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                Credentials
              </button>
            </div>

            {/* TAB CONTENT: BIO */}
            {activeTab === 'bio' && (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-4">
                  Engineering for <span className="text-orange-500">Excellence.</span>
                </h3>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
                  I specialize in building robust digital ecosystems. From high-performance web applications to providing expert IT infrastructure support, my mission is to deliver technical solutions that are both scalable and intuitive.
                </p>

                {/* Metric stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat, sIdx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={sIdx}
                        className="bg-slate-50 border border-slate-50 hover:border-orange-500/20 hover:bg-white p-5 rounded-2xl flex flex-col items-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                      >
                        <Icon className="w-6 h-6 mb-2" style={{ color: stat.color }} />
                        <h4 className="text-2xl font-black text-slate-800 leading-none mb-1">
                          {stat.value}
                        </h4>
                        <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CV Request Section */}
                <div className="bg-[#0f172a] p-6 rounded-3xl shadow-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h5 className="font-bold text-white text-base mb-1">Curriculum Vitae</h5>
                    <p className="text-slate-400 text-xs">Professional background & references.</p>
                  </div>
                  {isApproved ? (
                    <button
                      onClick={downloadDirectPDF}
                      className="w-full md:w-auto bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Save CV (PDF)
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowCVModal(true)}
                      className="w-full md:w-auto bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Request Download
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: CERTS */}
            {activeTab === 'certs' && (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, cIdx) => {
                    let IconComp = Cloud;
                    if (cert.icon === 'Cloud') IconComp = Cloud;
                    if (cert.icon === 'Wrench') IconComp = Wrench;
                    if (cert.icon === 'Code2') IconComp = Code2;
                    if (cert.icon === 'Monitor') IconComp = Monitor;

                    return (
                      <div
                        key={cIdx}
                        className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 hover:border-slate-200 hover:scale-[1.02] rounded-2xl transition-all duration-300"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${cert.color}15`,
                            color: cert.color,
                          }}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h6 className="font-bold text-slate-800 text-sm leading-tight mb-1">
                            {cert.name}
                          </h6>
                          <p className="text-slate-400 text-xs font-semibold leading-none">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* CV CAPCHA / REQUEST MODAL */}
      {showCVModal && (
        <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Top accent */}
            <div className="h-2 bg-orange-500" />
            <div className="p-6 sm:p-8 relative">
              <button
                onClick={() => setShowCVModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6 mt-2">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Request Access</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Complete this short form to instantly unlock the professional CV.
                </p>
              </div>

              <form onSubmit={handleRequestCSV} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.requesterName}
                    onChange={(e) =>
                      setFormData({ ...formData, requesterName: e.target.value })
                    }
                    placeholder="Full Name"
                    className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 outline-none focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Inquiry Reason
                  </label>
                  <textarea
                    required
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    rows={3}
                    placeholder="E.g., Reviewing for a project / potential partnership"
                    className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 outline-none focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-bold p-3.5 rounded-xl hover:bg-orange-600 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 mt-6 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Verifying...' : 'Request & WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
