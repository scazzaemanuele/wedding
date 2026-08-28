import React, { useState, useEffect } from 'react';
import type { I18nContent } from '../../data/types';
import { WEDDING_CONFIG } from '../../data/wedding-data';

interface RsvpFormProps {
  content: I18nContent['rsvp'];
}

export const RsvpForm: React.FC<RsvpFormProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'yes',
    guestCount: 1,
    eventWelcome: true,
    eventMain: true,
    eventBrunch: true,
    dietaryRestrictions: [] as string[],
    customDietary: '',
    shuttleNeeded: 'yes',
    songRequest: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [hasPreviousSubmission, setHasPreviousSubmission] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_submission');
      if (saved) {
        setHasPreviousSubmission(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleDietaryToggle = (item: string) => {
    if (item === content.form.dietaryOptions[0]) {
      // None selected
      setFormData((prev) => ({ ...prev, dietaryRestrictions: [item], customDietary: '' }));
      return;
    }

    setFormData((prev) => {
      const exists = prev.dietaryRestrictions.includes(item);
      const filtered = prev.dietaryRestrictions.filter(
        (d) => d !== item && d !== content.form.dietaryOptions[0]
      );
      return {
        ...prev,
        dietaryRestrictions: exists ? filtered : [...filtered, item]
      };
    });
  };

  const generateIcsCalendarFile = () => {
    const event = {
      title: 'Chiara & Ji-Hoon Wedding Celebration',
      description: 'Wedding celebration of Chiara & Ji-Hoon in Phuket, Thailand.',
      location: WEDDING_CONFIG.location.fullAddress,
      start: '20261127T180000',
      end: '20261129T160000'
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Chiara JiHoon Wedding//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `DTSTART:${event.start}`,
      `DTEND:${event.end}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'chiara-jihoon-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      try {
        localStorage.setItem('wedding_rsvp_submission', JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }));
        setHasPreviousSubmission(true);
      } catch {
        // ignore
      }
    }, 900);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Decorative Outer Border */}
      <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-gold-200 shadow-2xl shadow-emerald-950/5">
        {/* Corner Ornaments */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/80 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400/80 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400/80 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/80 rounded-br-lg" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-gold-700 mb-2">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-emerald-950">
            {content.title}
          </h2>
          <p className="text-stone-600 mt-2 font-serif text-sm sm:text-base">
            {content.subtitle}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300/80 text-xs font-medium text-emerald-900">
            <span>📅</span>
            <span>{content.deadlineNotice}</span>
          </div>
        </div>

        {/* Success Modal / State */}
        {status === 'success' ? (
          <div className="text-center py-8 px-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center text-4xl shadow-inner border border-gold-300">
              🥂
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950 mb-2">
              {content.form.successTitle}
            </h3>
            <p className="text-stone-700 max-w-md mx-auto mb-4 text-sm sm:text-base">
              {content.form.successMessage}
            </p>
            <p className="text-xs text-gold-700 font-medium mb-6">
              {content.form.successDetails}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={generateIcsCalendarFile}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-900 hover:bg-emerald-950 text-gold-100 text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {content.form.addCalendarBtn}
              </button>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium transition-colors"
              >
                {content.form.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {hasPreviousSubmission && (
              <div className="p-3 rounded-xl bg-gold-50/70 border border-gold-200 text-xs text-emerald-900 flex items-center justify-between">
                <span>✨ You have previously submitted an RSVP. Submitting again will update your response.</span>
              </div>
            )}

            {/* Attendance Radios */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gold-50/50 border border-gold-200/80">
              <label className="block text-sm font-semibold text-emerald-950 mb-3">
                {content.form.attending} *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.attending === 'yes'
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-md font-medium'
                      : 'bg-white text-stone-700 border-gold-200 hover:border-gold-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={() => setFormData({ ...formData, attending: 'yes' })}
                    className="sr-only"
                  />
                  <span className="text-xl">🌸</span>
                  <span className="text-xs sm:text-sm">{content.form.attendingYes}</span>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.attending === 'no'
                      ? 'bg-stone-800 text-white border-stone-800 shadow-md font-medium'
                      : 'bg-white text-stone-700 border-gold-200 hover:border-gold-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={() => setFormData({ ...formData, attending: 'no' })}
                    className="sr-only"
                  />
                  <span className="text-xl">💌</span>
                  <span className="text-xs sm:text-sm">{content.form.attendingNo}</span>
                </label>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                  {content.form.fullName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={content.form.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                  {content.form.email} *
                </label>
                <input
                  type="email"
                  required
                  placeholder={content.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                  {content.form.phone}
                </label>
                <input
                  type="tel"
                  placeholder={content.form.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
                />
              </div>

              {formData.attending === 'yes' && (
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                    {content.form.guestCount}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, guestCount: Math.max(1, formData.guestCount - 1) })}
                      className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 font-bold flex items-center justify-center transition"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg text-emerald-950">
                      {formData.guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, guestCount: Math.min(5, formData.guestCount + 1) })}
                      className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 font-bold flex items-center justify-center transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {formData.attending === 'yes' && (
              <>
                {/* Specific Events Selection */}
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-2 uppercase tracking-wide">
                    {content.form.eventsAttending}
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-gold-50/50 border border-stone-200 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.eventWelcome}
                        onChange={(e) => setFormData({ ...formData, eventWelcome: e.target.checked })}
                        className="w-4 h-4 rounded text-gold-600 focus:ring-gold-400 accent-gold-600"
                      />
                      <span className="text-xs sm:text-sm text-stone-800">{content.form.eventWelcome}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-gold-50/50 border border-stone-200 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.eventMain}
                        onChange={(e) => setFormData({ ...formData, eventMain: e.target.checked })}
                        className="w-4 h-4 rounded text-gold-600 focus:ring-gold-400 accent-gold-600"
                      />
                      <span className="text-xs sm:text-sm text-stone-800 font-medium">{content.form.eventMain}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-gold-50/50 border border-stone-200 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.eventBrunch}
                        onChange={(e) => setFormData({ ...formData, eventBrunch: e.target.checked })}
                        className="w-4 h-4 rounded text-gold-600 focus:ring-gold-400 accent-gold-600"
                      />
                      <span className="text-xs sm:text-sm text-stone-800">{content.form.eventBrunch}</span>
                    </label>
                  </div>
                </div>

                {/* Dietary Options */}
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-2 uppercase tracking-wide">
                    {content.form.dietary}
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2.5">
                    {content.form.dietaryOptions.map((opt) => {
                      const isSelected = formData.dietaryRestrictions.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleDietaryToggle(opt)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-emerald-900 text-gold-100 border border-emerald-900 shadow-sm'
                              : 'bg-white text-stone-700 border border-stone-300 hover:border-gold-400 hover:bg-gold-50/50'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    placeholder={content.form.dietaryPlaceholder}
                    value={formData.customDietary}
                    onChange={(e) => setFormData({ ...formData, customDietary: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-xs sm:text-sm text-stone-800 transition"
                  />
                </div>

                {/* Shuttle Requirement */}
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-2 uppercase tracking-wide">
                    {content.form.shuttleRequired}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition ${
                        formData.shuttleNeeded === 'yes'
                          ? 'bg-gold-50 border-gold-400 text-emerald-950 font-medium'
                          : 'bg-white border-stone-200 text-stone-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shuttle"
                        value="yes"
                        checked={formData.shuttleNeeded === 'yes'}
                        onChange={() => setFormData({ ...formData, shuttleNeeded: 'yes' })}
                        className="sr-only"
                      />
                      <span>🚐 {content.form.shuttleYes}</span>
                    </label>

                    <label
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition ${
                        formData.shuttleNeeded === 'no'
                          ? 'bg-gold-50 border-gold-400 text-emerald-950 font-medium'
                          : 'bg-white border-stone-200 text-stone-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shuttle"
                        value="no"
                        checked={formData.shuttleNeeded === 'no'}
                        onChange={() => setFormData({ ...formData, shuttleNeeded: 'no' })}
                        className="sr-only"
                      />
                      <span>🚗 {content.form.shuttleNo}</span>
                    </label>
                  </div>
                </div>

                {/* Song Request */}
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                    {content.form.songRequest}
                  </label>
                  <input
                    type="text"
                    placeholder={content.form.songRequestPlaceholder}
                    value={formData.songRequest}
                    onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
                  />
                </div>
              </>
            )}

            {/* Warm Message */}
            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                {content.form.warmMessage}
              </label>
              <textarea
                rows={3}
                placeholder={content.form.warmMessagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-600 font-medium text-center">
                {content.form.errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 hover:from-emerald-800 hover:to-emerald-900 text-gold-100 font-serif text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-75"
              >
                {status === 'submitting' ? content.form.submittingBtn : content.form.submitBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
