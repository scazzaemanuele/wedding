import React, { useState } from 'react';
import type { I18nContent, ScheduleDay, ScheduleEvent } from '../../data/types';
import { WEDDING_CONFIG } from '../../data/wedding-data';

interface InteractiveScheduleProps {
  content: I18nContent['schedule'];
}

export const InteractiveSchedule: React.FC<InteractiveScheduleProps> = ({ content }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeDay: ScheduleDay = content.days[activeDayIndex] || content.days[0];

  const getIcon = (icon: ScheduleEvent['icon']) => {
    switch (icon) {
      case 'cocktail':
        return '🥂';
      case 'water':
        return '🌸';
      case 'ring':
        return '💍';
      case 'dinner':
        return '✨';
      case 'party':
        return '🏮';
      case 'brunch':
        return '🥥';
      default:
        return '🕊️';
    }
  };

  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Chiara JiHoon Wedding//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'DTSTART:20261127T180000',
      'DTEND:20261129T160000',
      `SUMMARY:${content.calendarSummary}`,
      `DESCRIPTION:${content.calendarDesc}`,
      `LOCATION:${WEDDING_CONFIG.location.fullAddress}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-itinerary.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Day Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
        {content.days.map((day, idx) => {
          const isActive = idx === activeDayIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveDayIndex(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-serif transition-all duration-300 flex flex-col items-center gap-0.5 ${
                isActive
                  ? 'bg-emerald-900 text-gold-100 shadow-lg shadow-emerald-950/15 scale-105 border border-gold-400'
                  : 'bg-white/80 hover:bg-white text-stone-700 border border-gold-200 hover:border-gold-300'
              }`}
            >
              <span className="font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest text-gold-400">
                {day.dayNumber}
              </span>
              <span className="font-semibold text-xs sm:text-base">
                {day.dayTitle}
              </span>
              <span className="text-[11px] opacity-80 font-sans">{day.date}</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Timeline Container */}
      <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-gold-200/90 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gold-100 pb-5 mb-8 gap-4">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-700 block">
              {activeDay.dayNumber} • {activeDay.date}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950 mt-1">
              {activeDay.dayTitle}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleDownloadIcs}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 hover:bg-gold-100 border border-gold-300 text-emerald-900 text-xs sm:text-sm font-medium transition shadow-sm"
          >
            <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{content.addToCalendar}</span>
          </button>
        </div>

        {/* Timeline Events List */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-gold-400 before:via-gold-300 before:to-emerald-800/30">
          {activeDay.events.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon Pin */}
              <div className="absolute -left-6 sm:-left-10 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gold-400 text-xs sm:text-sm flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-emerald-700 transition-all duration-200">
                <span>{getIcon(event.icon)}</span>
              </div>

              {/* Event Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gold-50/40 hover:bg-gold-50/80 border border-gold-100 hover:border-gold-300/80 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900 text-gold-100 text-xs font-semibold tracking-wide">
                    <span>🕒</span>
                    <span>{event.time}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-stone-600 font-medium">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-serif font-bold text-emerald-950 mt-1 mb-2">
                  {event.title}
                </h4>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-3">
                  {event.description}
                </p>

                {event.dressCode && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gold-200/90 text-stone-700 text-xs">
                    <span className="text-gold-600">👔</span>
                    <span className="font-semibold text-emerald-950">Attire:</span>
                    <span>{event.dressCode}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
