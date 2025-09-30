import React, { useRef, useState, useEffect, type ReactNode, type MouseEventHandler, type UIEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import './AnimatedList.css';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      style={{ marginBottom: '1rem', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

interface ListItemData {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

interface AnimatedListProps {
  items?: ListItemData[];
  onItemSelect?: (item: ListItemData, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      title: 'Evento Teatro',
      description: 'Uno straordinario spettacolo teatrale con Alessandro Scafati.',
      date: '15 Marzo 2024'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1470229538613-67ba85b798ba?w=300&h=200&fit=crop',
      title: 'Mostra d\'Arte',
      description: 'Esposizione di opere contemporanee presso la galleria comunale.',
      date: '22 Aprile 2024'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      title: 'Concerto al Teatro',
      description: 'Gala musicale con orchestra sinfonica e ospiti d\'eccezione.',
      date: '10 Maggio 2024'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      title: 'Reading Poetico',
      description: 'Una serata di poesia e musica con diversi artisti emergenti.',
      date: '28 Giugno 2024'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      title: 'Workshop Creativi',
      description: 'Laboratori per adulti e bambini sulle arti performative.',
      date: '5 Luglio 2024'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=200&fit=crop',
      title: 'Festa della Musica',
      description: 'Celebrazione della musica dal vivo con artisti locali.',
      date: '21 Settembre 2024'
    }
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <>
        <div className={`scroll-list-container ${className}`}>
        <div ref={listRef} className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`} onScroll={handleScroll}>
            {items.map((item, index) => (
            <AnimatedItem
                key={item.id}
                delay={0.1}
                index={index}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => {
                setSelectedIndex(index);
                if (onItemSelect) {
                    onItemSelect(item, index);
                }
                }}
            >
                <div 
                  className={`item ${selectedIndex === index ? 'selected' : ''} ${itemClassName}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                >
                  <div className="item-overlay"></div>
                  <div className="item-content">
                    <h3 className="item-title font-lato">{item.title}</h3>
                    <p className="item-description font-lato">{item.description}</p>
                    <span className="item-date font-lato">{item.date}</span>
                  </div>
                </div>
            </AnimatedItem>
            ))}
        </div>
        {showGradients && (
            <>
            <div className="top-gradient" style={{ opacity: topGradientOpacity }}></div>
            <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }}></div>
            </>
        )}
        </div>
    </>
  );
};

export default AnimatedList;
