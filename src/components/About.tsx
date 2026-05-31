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
    { name: 'JavaScript / TypeScript', level: 90, color: '#a8a29e' },
    { name: 'React & Vite', level: 85, color: '#78716c' },
    { name: 'PHP & Laravel', level: 80, color: '#e7e5e4' },
    { name: 'IT Support & Troubleshooting', level: 95, color: '#d6d3d1' },
    { name: 'System Architecture', level: 75, color: '#57534e' },
  ];

  const stats = [
    { value: '50+', label: 'Clients Served', icon: Users, color: '#a8a29e' },
    { value: '100+', label: 'Students Trained', icon: GraduationCap, color: '#d6d3d1' },
    { value: '30+', label: 'Projects Delivered', icon: Cpu, color: '#78716c' },
    { value: '5+', label: 'Years Experience', icon: Calendar, color: '#e7e5e4' },
  ];

  const certifications: Certification[] = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      year: '2025',
      color: '#a8a29e',
      icon: 'Cloud',
    },
    {
      name: 'CompTIA A+',
      issuer: 'CompTIA',
      year: '2024',
      color: '#78716c',
      icon: 'Wrench',
    },
    {
      name: 'Laravel Certification',
      issuer: 'Laravel',
      year: '2023',
      color: '#d6d3d1',
      icon: 'Code2',
    },
    {
      name: 'Google IT Support',
      issuer: 'Google',
      year: '2022',
      color: '#e7e5e4',
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
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 select-none">
        
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 block mb-2">
            INNOVATOR & EDUCATOR
          </span>
          <h2 className="text-4xl font-serif italic text-stone-100 tracking-tight">
            About Me
          </h2>
          <div className="h-px w-12 bg-stone-700 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* PROFILE CARD COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-stone-950/40 rounded-[32px] border border-stone-900 overflow-hidden">
              <div className="p-8 sm:p-10 flex flex-col items-center">
                
                {/* Profile Image with animated spin border */}
                <div className="w-[180px] h-[180px] relative flex items-center justify-center mb-6">
                  {/* Subtle border circle */}
                  <div className="absolute inset-0 border border-dashed border-stone-800 rounded-full animate-spin-slow" />
                  <img
                    src="https://infinitymura.netlify.app/images/profile.png"
                    alt="Schadrack"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop';
                    }}
                    className="w-[155px] h-[155px] object-cover rounded-full border-2 border-stone-900 relative z-10 grayscale opacity-80"
                  />
                </div>

                {/* Profile info */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-serif italic text-stone-150 mb-1">
                    Schadrack M.
                  </h3>
                  <p className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                    Software Engineer
                  </p>
                </div>

                {/* Technical mastery lines */}
                <div className="w-full bg-stone-900/10 p-6 rounded-[24px] border border-stone-900">
                  <h6 className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-stone-500 mb-4">
                    Technical Mastery
                  </h6>
                  <div className="space-y-4 font-mono">
                    {skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-stone-300">{skill.name}</span>
                          <span className="text-[10px] text-stone-500">{skill.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-stone-900 rounded-full overflow-hidden">
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
            <div className="flex gap-8 mb-8 border-b border-stone-900">
              <button
                onClick={() => setActiveTab('bio')}
                className={`pb-3 font-semibold text-[11px] uppercase tracking-[0.24em] transition-all relative cursor-pointer ${
                  activeTab === 'bio'
                    ? 'text-stone-100 font-bold'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                Experience
                {activeTab === 'bio' && (
                  <span className="absolute bottom-[-1.5px] left-0 right-0 h-0.5 bg-stone-450" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('certs')}
                className={`pb-3 font-semibold text-[11px] uppercase tracking-[0.24em] transition-all relative cursor-pointer ${
                  activeTab === 'certs'
                    ? 'text-stone-100 font-bold'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                Credentials
                {activeTab === 'certs' && (
                  <span className="absolute bottom-[-1.5px] left-0 right-0 h-0.5 bg-stone-450" />
                )}
              </button>
            </div>

            {/* TAB CONTENT: BIO */}
            {activeTab === 'bio' && (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-150 italic mb-4">
                  Engineering for <span className="text-stone-400">Excellence.</span>
                </h3>
                <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-8">
                  I specialize in building robust digital ecosystems. From high-performance web applications to providing expert IT infrastructure support, my mission is to deliver technical solutions that are both scalable and intuitive.
                </p>

                {/* Metric stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat, sIdx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={sIdx}
                        className="bg-stone-950/40 border border-stone-900 hover:border-stone-800 hover:bg-stone-900/10 p-5 rounded-2xl flex flex-col items-center transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                      >
                        <Icon className="w-5 h-5 mb-2 text-stone-400" />
                        <h4 className="text-2xl font-serif text-stone-200 mb-1">
                          {stat.value}
                        </h4>
                        <p className="text-stone-500 text-[9px] uppercase tracking-[0.2em]">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CV Request Section */}
                <div className="bg-stone-950 p-6 rounded-[24px] border border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h5 className="font-serif italic text-stone-200 text-base mb-1">Curriculum Vitae</h5>
                    <p className="text-stone-500 text-xs">Professional background & references.</p>
                  </div>
                  {isApproved ? (
                    <button
                      onClick={downloadDirectPDF}
                      className="w-full md:w-auto bg-stone-800 text-stone-100 font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-full hover:bg-stone-700 transition-all cursor-pointer"
                    >
                      Save CV (PDF)
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowCVModal(true)}
                      className="w-full md:w-auto border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all cursor-pointer"
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
                        className="flex items-center gap-4 p-5 bg-stone-950/40 border border-stone-900 hover:border-stone-850 hover:scale-[1.01] rounded-2xl transition-all duration-300"
                      >
                        <div
                          className="w-10 h-10 rounded-xl bg-stone-900 text-stone-400 flex items-center justify-center border border-stone-850"
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <h6 className="font-serif italic text-stone-200 text-sm leading-tight mb-1">
                            {cert.name}
                          </h6>
                          <p className="text-stone-500 text-xs leading-none">
                            {cert.issuer} ({cert.year})
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
        <div className="fixed inset-0 bg-[#060606]/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-stone-950 rounded-3xl border border-stone-900 max-w-md w-full overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            <div className="p-6 sm:p-8 relative">
              <button
                onClick={() => setShowCVModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-stone-500 hover:text-stone-300 hover:bg-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6 mt-2">
                <div className="w-11 h-11 rounded-2xl bg-stone-900 border border-stone-850 text-stone-400 flex items-center justify-center mx-auto mb-3">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif italic text-stone-200 mb-1">Request Access</h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Complete this short form to instantly unlock the professional CV.
                </p>
              </div>

              <form onSubmit={handleRequestCSV} className="space-y-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2">
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
                    className="w-full border border-stone-900 p-3 rounded-xl bg-stone-900/50 outline-none focus:border-stone-700 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2">
                    Inquiry Reason
                  </label>
                  <textarea
                    required
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    rows={3}
                    placeholder="E.g., Reviewing for a potential project"
                    className="w-full border border-stone-900 p-3 rounded-xl bg-stone-900/50 outline-none focus:border-stone-700 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-100 hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.2em] p-3.5 rounded-xl transition-all mt-6 cursor-pointer"
                >
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
