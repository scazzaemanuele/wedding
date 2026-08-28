import React, { useState, useEffect, useCallback } from 'react';
import type { I18nContent, GalleryPhoto } from '../../data/types';

interface PhotoGalleryModalProps {
  content: I18nContent['gallery'];
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ content }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'story' | 'venue' | 'ceremony' | 'reception' | 'details'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = content.photos.filter((photo) => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length, selectedPhotoIndex]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length, selectedPhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  const filters = [
    { key: 'all' as const, label: content.filterAll },
    { key: 'story' as const, label: content.filterStory },
    { key: 'venue' as const, label: content.filterVenue },
    { key: 'ceremony' as const, label: content.filterCeremony },
    { key: 'reception' as const, label: content.filterReception },
    { key: 'details' as const, label: content.filterDetails }
  ];

  const currentPhoto: GalleryPhoto | undefined =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : undefined;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => {
                setActiveFilter(f.key);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-900 text-gold-100 shadow-md border border-emerald-900'
                  : 'bg-white/80 hover:bg-white text-stone-700 border border-gold-200 hover:border-gold-300'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(idx)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-stone-100 aspect-4/3 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gold-100"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold-400">
                {photo.category}
              </span>
              <h4 className="text-sm font-serif font-semibold text-white">
                {photo.title}
              </h4>
              <span className="text-xs text-gold-200 mt-1 inline-flex items-center gap-1">
                <span>🔍 View Photo</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-xl backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image & Caption Box */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center px-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-xs text-gold-300 mt-1">
                {selectedPhotoIndex + 1} / {filteredPhotos.length} • {currentPhoto.category.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
