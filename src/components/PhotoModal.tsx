import React, { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Array<{ id: string; img: string; url: string }>;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const currentPhoto = photos[currentIndex];

  // Gestione tasti freccia e ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (currentIndex < photos.length - 1) {
          onNavigate(currentIndex + 1);
        }
        break;
    }
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  // Animazioni di apertura/chiusura
  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
        );
      }
    } else {
      gsap.to(modalRef.current, 
        { opacity: 0, duration: 0.2, ease: 'power2.in' }
      );
    }
  }, [isOpen]);

  // Animazione cambio immagine
  useEffect(() => {
    if (!imageRef.current || !isOpen) return;

    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
    );
  }, [currentIndex, isOpen]);

  if (!isOpen || !currentPhoto) return null;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Contenitore immagine */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsante chiudi */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors duration-200"
        >
          ×
        </button>

        {/* Pulsante precedente */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-colors duration-200"
          >
            ‹
          </button>
        )}

        {/* Pulsante successivo */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-colors duration-200"
          >
            ›
          </button>
        )}

        {/* Immagine */}
        <img
          ref={imageRef}
          src={currentPhoto.img}
          alt={`Foto ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{ maxHeight: '90vh' }}
        />

        {/* Contatore */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Indicatori di navigazione per mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:hidden">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoModal;
