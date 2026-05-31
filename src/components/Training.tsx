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
      color: '#eb7604',
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
      color: '#b6252a',
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
      color: '#e4973b',
      topics: ['Networking', 'Hardware', 'Security', 'OS'],
      desc: 'The foundation of tech. Master networking, hardware, and professional system security.',
    },
  ];

  const studentReviews: StudentReview[] = [
    {
      name: 'Jean de Dieu',
      role: 'Frontend Developer',
      text: 'I started with zero coding knowledge. Within 8 weeks, I built my first portfolio and landed an internship!',
      company: 'TechRwanda',
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

    const recipient = '250791767725';
    const message = `*NEW STUDENT ENROLLMENT*
━━━━━━━━━━━━━━━━━━
📚 *Course:* ${selectedCourse.title}
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
━━━━━━━━━━━━━━━━━━
_Sent from InfinityMura Training Section_`;

    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(message)}`, '_blank');
    setShowEnrollModal(false);
    setFormData({ name: '', phone: '' });
  };

  return (
    <section id="training" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[3px] font-black text-orange-500 block mb-2">
            CHOOSE YOUR PATH
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Professional Tech Training
          </h2>
          <div className="h-[4px] w-12 bg-[#eb7604] mx-auto mt-4 rounded-full" />
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
                className="bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:bg-white rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              >
                <div>
                  {/* Card head layout */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shadow-slate-200/50"
                      style={{ backgroundColor: course.color }}
                    >
                      <IconClass className="w-6 h-6" />
                    </div>
                    {/* Course tag specifications */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-slate-800 border border-slate-700/50">
                        {course.duration}
                      </span>
                      <span className="text-slate-400 font-bold text-[10px] uppercase">
                        {course.projects}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-800 text-xl mb-3">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  {/* Syllabus / Key skill tags */}
                  <div className="mb-8 p-1">
                    <h6 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 mb-3 block">
                      Core Syllabus
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-bold px-3.5 py-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
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
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl text-center hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 active:scale-98 transition-all duration-200 cursor-pointer"
                >
                  Enroll in Cohort
                </button>
              </div>
            );
          })}
        </div>

        {/* Student Testimonials Banner */}
        <div className="border border-slate-100 bg-slate-50/50 rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-[2px] block mb-2">
              ALUMNI REVIEWS
            </span>
            <h4 className="text-2xl font-black text-slate-800 tracking-tight">
              What Students Say
            </h4>
            <div className="h-[3px] w-16 bg-[#eb7604]/30 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed italic mb-8 relative">
                    <Quote className="w-8 h-8 text-orange-500/10 absolute -top-4 -left-3 -z-0" />
                    <span className="relative z-10">"{review.text}"</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 font-black flex items-center justify-center text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-800 text-sm">{review.name}</h6>
                    <p className="text-slate-400 text-[10px] font-bold leading-none uppercase mt-0.5">
                      {review.role} • <span className="text-slate-500">{review.company}</span>
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
        <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Accent colored top */}
            <div
              className="h-2"
              style={{ backgroundColor: selectedCourse.color }}
            />
            <div className="p-6 sm:p-8 relative">
              <button
                onClick={() => setShowEnrollModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6 mt-2">
                <div
                  className="w-12 h-12 rounded-2xl text-white flex items-center justify-center mx-auto mb-3 shadow-md"
                  style={{ backgroundColor: selectedCourse.color }}
                >
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Enrollment Desk</h4>
                <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Submit this inquiry to join the next cohort of <b>{selectedCourse.title}</b>.
                </p>
              </div>

              <form onSubmit={submitEnrollment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 outline-none focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g., +250 788 000 000"
                    className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 outline-none focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold p-3.5 rounded-xl flex items-center justify-center gap-2 mt-6 cursor-pointer"
                  style={{ backgroundColor: selectedCourse.color }}
                >
                  <Send className="w-4 h-4" />
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
