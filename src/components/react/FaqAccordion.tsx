import React, { useState } from 'react';
import type { I18nContent } from '../../data/types';

interface FaqAccordionProps {
  content: I18nContent['faq'];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {content.items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-white/90 backdrop-blur-md border border-gold-200/90 shadow-sm transition-all duration-300 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-gold-50/50"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-bold text-sm sm:text-base text-emerald-950 pr-4 flex items-center gap-2">
                <span className="text-gold-600 text-xs">Q.</span>
                <span>{item.question}</span>
              </span>
              <div
                className={`w-7 h-7 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-xs text-emerald-900 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 bg-gold-200' : ''
                }`}
              >
                ▼
              </div>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 font-serif leading-relaxed border-t border-gold-100/60 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex gap-2.5">
                  <span className="text-emerald-800 font-sans font-bold text-xs">A.</span>
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
