import { useEffect, useState } from "react";
import './ScrollToTopBtn.css'
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopBtn() {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div>
      {isVisible && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <button><FaArrowUp /></button>
          </div>
        )}
        

          <div className="scroll-watcher">
          </div>
    </div>
  )
}

export default ScrollToTopBtn
