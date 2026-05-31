import { useState, FormEvent } from 'react';
import { Code, Layers, ShieldCheck, Mail, Phone, Calendar, Award, Star, Quote, Send, X } from 'lucide-react';
import { Course, StudentReview } from '../types';

export default function Training() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const courses: Course[] = [
    {
      id: 0,
      title: 'Web Development',
      duration: '8 Weeks',
      projects: '5+ Real Projects',
      difficulty: 'Beginner',
      icon: 'Code',
      color: '#ff5500',
      topics: ['UI/UX', 'React', 'Git', 'API'],
      desc: 'Master the art of building modern, responsive web applications from the ground up.',
    },
    {
      id: 1,
      title: 'Advanced Laravel',
      duration: '6 Weeks',
      projects: 'SaaS Platform',
      difficulty: 'Intermediate',
      icon: 'Layers',
      color: '#ff661b',
      topics: ['Auth', 'Database', 'Scaling', 'Cloud'],
      desc: 'Deep dive into enterprise-level backend architecture and scalable PHP systems.',
    },
    {
      id: 2,
      title: 'IT Support',
      duration: '4 Weeks',
      projects: 'Lab Simulation',
      difficulty: 'Beginner',
      icon: 'ShieldCheck',
      color: '#ffa044',
      topics: ['Networking', 'Hardware', 'Security', 'OS'],
      desc: 'The foundation of tech. Master networking, hardware, and professional system security.',
    },
  ];

  const studentReviews: StudentReview[] = [
    {
      name: 'Remy Nsanzimana',
      role: 'L4SWD Student Coordinator',
      text: 'Being at Kivumu TSS, my full-stack coding and system setups scaled in real-time. The level 4 software development cohort is building top-tier systems!',
      company: 'EAV Kivumu TSS',
    },
    {
      name: 'Aline Marie',
      role: 'IT Specialist',
      text: 'The hardware labs were amazing. I gained the confidence to manage network security for a whole office.',
      company: 'Global Connect',
    },
    {
      name: 'Samuel K.',
      role: 'Backend Engineer',
      text: 'The Laravel course is pure gold. It bridges the gap between basic coding and professional software engineering.',
      company: 'Fintech Solutions',
    },
  ];

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setShowEnrollModal(true);
  };

  const submitEnrollment = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;

    const recipient = '250795547233';
    const message = `*NEW STUDENT ENROLLMENT*
━━━━━━━━━━━━━━━━━━
📚 *Course:* ${selectedCourse.title}
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
━━━━━━━━━━━━━━━━━━
_Sent from reneproject Training Section_`;

    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(message)}`, '_blank');
    setShowEnrollModal(false);
    setFormData({ name: '', phone: '' });
  };

  return (
    <section id="training" className="py-24 bg-white relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 select-none">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 block mb-2">
            CHOOSE YOUR PATH
          </span>
          <h2 className="text-4xl font-serif italic text-stone-850 tracking-tight">
            Professional Tech Training
          </h2>
          <div className="h-px w-12 bg-orange-500/30 mx-auto mt-4" />
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {courses.map((course) => {
            let IconClass = Code;
            if (course.icon === 'Layers') IconClass = Layers;
            if (course.icon === 'ShieldCheck') IconClass = ShieldCheck;

            return (
              <div
                key={course.id}
                className="bg-white border border-stone-200/80 hover:border-orange-500/20 hover:bg-[#f9f8f6]/50 rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.01] cursor-pointer group shadow-sm"
              >
                <div>
                  {/* Card head layout */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 group-hover:text-[#ff5500] group-hover:border-orange-500/20 group-hover:bg-orange-50/10 transition-colors duration-300 flex items-center justify-center"
                    >
                      <IconClass className="w-5 h-5" />
                    </div>
                    {/* Course tag specifications */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-stone-600 text-[9px] font-mono px-3 py-1 rounded-full uppercase tracking-wider bg-stone-50 border border-stone-200 group-hover:border-orange-500/20 group-hover:text-[#ff5500] transition-colors">
                        {course.duration}
                      </span>
                      <span className="text-stone-400 font-bold text-[9px] uppercase tracking-wider">
                        {course.projects}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif italic text-stone-800 text-lg mb-3 group-hover:text-[#ff5500] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  {/* Syllabus / Key skill tags */}
                  <div className="mb-8 p-1">
                    <h6 className="text-[10px] uppercase tracking-[0.15em] font-black text-stone-400 mb-3 block">
                      Core Syllabus
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-3 py-1.5 bg-[#fcfbfa] border border-stone-200 text-stone-500 rounded-md hover:bg-orange-50/10 hover:text-[#ff5500] hover:border-orange-500/20 transition-all cursor-pointer"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => handleEnrollClick(course)}
                  className="w-full border border-orange-500/30 hover:border-[#ff5500] hover:bg-orange-50/10 text-[#ff5500] hover:text-[#e04b00] font-bold text-xs uppercase tracking-[0.16em] py-3.5 rounded-full text-center transition-all duration-200 cursor-pointer text-stone-800 bg-[#ff5500]/5"
                >
                  Enroll in Cohort
                </button>
              </div>
            );
          })}
        </div>

        {/* Student Testimonials Banner */}
        <div className="border border-stone-200/80 bg-[#f9f8f6] rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="text-center mb-12">
            <span className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.25em] block mb-2">
              ALUMNI REVIEWS
            </span>
            <h4 className="text-2xl font-serif italic text-stone-850">
              What Students Say
            </h4>
            <div className="h-px w-12 bg-orange-500/30 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200/60 hover:border-stone-300 hover:bg-[#fcfbfa]/50 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-orange-500 mb-4 animate-pulse">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic mb-8 relative">
                    <Quote className="w-8 h-8 text-stone-200/45 absolute -top-4 -left-3 -z-0" />
                    <span className="relative z-10">"{review.text}"</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-9 h-9 rounded-full bg-stone-50 border border-stone-200 text-stone-600 font-serif italic flex items-center justify-center text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h6 className="font-serif italic text-stone-800 text-sm leading-tight">{review.name}</h6>
                    <p className="text-stone-400 text-[9px] font-mono uppercase mt-0.5">
                      {review.role} • <span className="text-stone-500">{review.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ENROLLMENT DIALOG MODAL */}
      {showEnrollModal && selectedCourse && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-white rounded-3xl border border-stone-200/80 max-w-md w-full overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <div className="p-6 sm:p-8 relative">
              <button
                onClick={() => setShowEnrollModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6 mt-2">
                <div
                  className="w-11 h-11 rounded-full bg-orange-50/10 border border-orange-500/20 text-[#ff5500] flex items-center justify-center mx-auto mb-3"
                >
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif italic text-stone-800 mb-1">Enrollment Desk</h4>
                <p className="text-stone-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Submit this inquiry to join the next cohort of <b>{selectedCourse.title}</b>.
                </p>
              </div>

              <form onSubmit={submitEnrollment} className="space-y-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full border border-stone-200 p-3.5 rounded-xl bg-white outline-none focus:border-[#ff5500] text-sm transition-all text-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g., +250 788 000 000"
                    className="w-full border border-stone-200 p-3.5 rounded-xl bg-white outline-none focus:border-[#ff5500] text-sm transition-all text-stone-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold text-xs uppercase tracking-[0.2em] p-3.5 rounded-xl transition-all mt-6 cursor-pointer shadow-md shadow-orange-500/10"
                >
                  Request Enrollment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
