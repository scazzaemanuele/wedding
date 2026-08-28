import React, { useState, useEffect } from 'react';
import type { I18nContent, WishMessage } from '../../data/types';

interface GuestbookBoardProps {
  content: I18nContent['wishes'];
}

export const GuestbookBoard: React.FC<GuestbookBoardProps> = ({ content }) => {
  const [wishes, setWishes] = useState<WishMessage[]>(content.sampleWishes);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedStamp, setSelectedStamp] = useState('🥂');
  const [isPosting, setIsPosting] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const stamps = ['🥂', '💐', '✨', '🌸', '🕊️', '❤️', '🌺', '🥥'];

  useEffect(() => {
    try {
      const stored = localStorage.getItem('wedding_guestbook_wishes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge user wishes ahead of sample wishes
          setWishes([...parsed, ...content.sampleWishes]);
        }
      }
    } catch {
      // ignore
    }
  }, [content.sampleWishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    setIsPosting(true);
    const newWish: WishMessage = {
      id: `wish-${Date.now()}`,
      author: author.trim(),
      location: location.trim() || 'Worldwide',
      message: message.trim(),
      stamp: selectedStamp,
      date: 'Just now'
    };

    setTimeout(() => {
      setWishes((prev) => [newWish, ...prev]);
      try {
        const stored = localStorage.getItem('wedding_guestbook_wishes');
        const userList = stored ? JSON.parse(stored) : [];
        localStorage.setItem('wedding_guestbook_wishes', JSON.stringify([newWish, ...userList]));
      } catch {
        // ignore
      }

      setAuthor('');
      setLocation('');
      setMessage('');
      setIsPosting(false);
      setPostSuccess(true);
      setTimeout(() => setPostSuccess(false), 4000);
    }, 400);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-gold-200 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">✍️</span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-950">
              {content.leaveWishTitle}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1 uppercase tracking-wide">
                Name(s) *
              </label>
              <input
                type="text"
                required
                placeholder={content.namePlaceholder}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gold-50/40 border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1 uppercase tracking-wide">
                Location / City
              </label>
              <input
                type="text"
                placeholder={content.locationPlaceholder}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gold-50/40 border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wide">
                {content.stampLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {stamps.map((stamp) => (
                  <button
                    key={stamp}
                    type="button"
                    onClick={() => setSelectedStamp(stamp)}
                    className={`w-9 h-9 rounded-full text-lg flex items-center justify-center transition-all ${
                      selectedStamp === stamp
                        ? 'bg-emerald-900 text-white scale-110 shadow-md ring-2 ring-gold-400'
                        : 'bg-gold-50 hover:bg-gold-100 border border-gold-200'
                    }`}
                  >
                    {stamp}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1 uppercase tracking-wide">
                Blessing Message *
              </label>
              <textarea
                rows={4}
                required
                placeholder={content.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gold-50/40 border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-sm text-stone-800 transition resize-none"
              />
            </div>

            {postSuccess && (
              <p className="text-xs text-emerald-700 font-semibold text-center animate-in fade-in">
                ✨ Thank you! Your blessing has been added to the wall!
              </p>
            )}

            <button
              type="submit"
              disabled={isPosting}
              className="w-full py-3 px-5 rounded-full bg-emerald-900 hover:bg-emerald-950 text-gold-100 font-serif text-sm font-semibold tracking-wide shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50"
            >
              {isPosting ? 'Posting...' : content.postButton}
            </button>
          </form>
        </div>

        {/* Right: Message Cards Board */}
        <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-1">
          <div className="flex items-center justify-between pb-2 border-b border-gold-200">
            <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-gold-800">
              {content.recentWishesTitle}
            </h4>
            <span className="text-xs font-serif italic text-stone-500">
              {wishes.length} Blessings
            </span>
          </div>

          {wishes.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white/70 border border-gold-200 text-stone-500 font-serif">
              {content.emptyWishes}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="relative p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-gold-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top stamp */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h5 className="font-serif font-bold text-sm sm:text-base text-emerald-950">
                        {wish.author}
                      </h5>
                      <span className="text-[11px] text-stone-500 font-sans">
                        📍 {wish.location}
                      </span>
                    </div>
                    <span className="text-2xl p-1.5 rounded-full bg-gold-50 border border-gold-200 shadow-inner">
                      {wish.stamp}
                    </span>
                  </div>

                  <p className="font-serif text-xs sm:text-sm text-stone-700 leading-relaxed italic my-2">
                    “{wish.message}”
                  </p>

                  <div className="text-[10px] text-gold-700/80 text-right font-sans pt-1 border-t border-gold-100">
                    {wish.date}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
