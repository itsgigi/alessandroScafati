import React, { useRef, useState, useEffect, useCallback, type ReactNode, type MouseEventHandler, type UIEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import './AnimatedList.css';

// Hook per throttling del scroll
const useThrottledCallback = (callback: (e: UIEvent<HTMLDivElement>) => void, delay: number) => {
  const lastRun = useRef(Date.now());
  return useCallback((e: UIEvent<HTMLDivElement>) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(e);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Easing più fluido
      }}
      style={{ 
        marginBottom: '1rem', 
        cursor: 'pointer',
        // Ottimizzazioni per mobile
        transform: 'translateZ(0)',
        willChange: 'transform, opacity',
      }}
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
  items = [],
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

  // Gestore di scroll ottimizzato per mobile
  const handleScrollInternal = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  // Throttle del gestore di scroll per migliorare le performance su mobile
  const handleScroll = useThrottledCallback(handleScrollInternal, 16); // ~60fps

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
                    backgroundPosition: 'top',
                    position: 'relative',
                    maxHeight: '150px',
                    overflow: 'hidden',
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
