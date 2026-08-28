import React, { useState } from 'react';
import type { I18nContent } from '../../data/types';

interface DressCodePaletteProps {
  content: I18nContent['dressCode'];
}

export const DressCodePalette: React.FC<DressCodePaletteProps> = ({ content }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Palette Color Cards */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-950">
          {content.paletteTitle}
        </h3>
        <p className="text-stone-600 font-serif text-xs sm:text-sm mt-1">
          {content.paletteSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {content.palettes.map((item) => {
          const isCopied = copiedHex === item.hex;
          return (
            <div
              key={item.hex}
              onClick={() => handleCopy(item.hex)}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-gold-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Color Swatch Block */}
              <div
                className="h-28 sm:h-32 w-full flex items-end justify-between p-2.5 transition-transform duration-300 group-hover:scale-103"
                style={{ backgroundColor: item.hex }}
              >
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm ${
                    item.textDark
                      ? 'bg-black/10 text-stone-900'
                      : 'bg-black/30 text-white font-medium'
                  }`}
                >
                  {item.hex}
                </span>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {isCopied ? '✓' : '📋'}
                </span>
              </div>

              {/* Color Description */}
              <div className="p-3 text-center bg-white flex-1 flex flex-col justify-center">
                <span className="font-serif font-bold text-xs sm:text-sm text-emerald-950 block">
                  {item.name}
                </span>
                <span className="text-[11px] text-stone-500 font-sans mt-0.5 leading-tight block">
                  {item.description}
                </span>
                {isCopied && (
                  <span className="text-[10px] text-emerald-700 font-semibold mt-1">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Style & Attire Tips */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gold-50/70 border border-gold-200">
        <h4 className="text-base sm:text-lg font-serif font-bold text-emerald-950 mb-3 flex items-center gap-2">
          <span>✨</span>
          <span>{content.tipsTitle}</span>
        </h4>
        <ul className="space-y-2.5">
          {content.tips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
              <span className="text-gold-600 mt-1 text-xs">◆</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
