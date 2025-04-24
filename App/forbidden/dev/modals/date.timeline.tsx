import React, { useEffect, useState, useRef } from 'react';
import './date.timeline.css';
interface DateTimelineProps {
  className?: string;
  attachToParent?: boolean;
}
const DateTimeline: React.FC<DateTimelineProps> = ({ className = '', attachToParent = false }) => {
  const [years, setYears] = useState<number[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const timelineRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    // Generate array of years: current year and 2 previous years
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear);
    setYears([currentYear - 2, currentYear - 1, currentYear]);
   
    // Keep year updated
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
        setYears([newYear - 2, newYear - 1, newYear]);
      }
    }, 3600000); // Check every hour
   
    return () => clearInterval(interval);
  }, []);
 
  // If we should attach to parent element directly rather than using JS positioning
  useEffect(() => {
    if (attachToParent && timelineRef.current) {
      const parent = timelineRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
      }
    }
  }, [attachToParent]);
 
  return (
    <div ref={timelineRef} className={`year-timeline ${className}`} id="year-timeline">
      <div className="timeline-content">
        <div className="timeline-years">
          {years.map((year, index) => (
            <div key={year} className="timeline-year" data-index={index}>
              {year}
            </div>
          ))}
        </div>
       
        <div className="timeline-triangle"></div>
       
        <div className="timeline-copyright">
          <div className="copyright-text">
            Copyright BlackBlazent {currentYear}
            <br />and at the above are the prevous year.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Year block component that matches exactly with the reference image
 */
export const YearBlock: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const previousYears = [currentYear - 2, currentYear - 1, currentYear];
 
  return (
    <div className="year-block-container">
      <div className="year-selector">
        <div className="arrow up-arrow">
          <div className="triangle-up"></div>
        </div>
        
        <div className="years-list">
          {previousYears.map(year => (
            <div key={year} className="year-item">
              {year}
            </div>
          ))}
        </div>
        
        <div className="arrow down-arrow">
          <div className="triangle-down"></div>
        </div>
      </div>
      
      <div className="copyright-section">
        <div className="copyright-text">
          Copyright BlackBlazent 2025
        </div>
      </div>
    </div>
  );
};

export default DateTimeline;