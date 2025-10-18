import { useEffect, useRef, useState } from "react";
import "./carroussel.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ComponentsProps {
  auto?: boolean;
  children?: React.ReactNode;
}

export default function Carroussel({ auto, children }: ComponentsProps) {
  const carrRef = useRef<HTMLDivElement | null>(null);
  const [pages, setPages] = useState<NodeListOf<HTMLDivElement>>();
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [automatic] = useState<Boolean>(auto || false);

  function handleNextPage() {
    if (pagesCount < pages?.length - 1) {
      setPagesCount(pagesCount + 1);
      pages[0].style.marginLeft = `-${100 * (pagesCount + 1)}%`;
    }
  }

  function handlePrevPage() {
    if (pagesCount > 0) {
      setPagesCount(pagesCount - 1);
      pages[0].style.marginLeft = `-${100 * (pagesCount - 1)}%`;
    }
  }

  useEffect(() => {
    if (carrRef.current) {
      const pages: NodeListOf<HTMLDivElement> =
        carrRef.current.querySelectorAll(".carroussel-item");
      setPages(pages);
    }
  }, []);

  useEffect(() => {
    if (auto) {
      if (!pages || pages.length === 0) return;

      let subindo = true;
      let interval = window.setInterval(() => {
        setPagesCount(prev => {
          if (subindo) {
            if (prev >= pages.length - 1) {
              subindo = false;
              return prev - 1;
            }
            pages[0].style.marginLeft = `-${100 * (prev + 1)}%`;
            return prev + 1;
          } else {
            if (prev <= 0) {
              subindo = true;
              return prev + 1;
            }
            pages[0].style.marginLeft = `${-100 * (prev - 1)}%`;
            return prev - 1;
          }
        });
      }, 15000 / (pages.length + 4));

      return () => clearInterval(interval);
    }
  }, [pages]);

  return (
    <div className="carroussel-container">
      {!automatic && (
        <div className="carroussel-prev">
          <button
            className={`pagination-button ${
              pagesCount > 0 && "pagination-button--available"
            }`}
            onClick={handlePrevPage}
          >
            <AiOutlineLeft size={26} />
          </button>
        </div>
      )}
      <div className="carroussel-pagination">
        {Array.from({ length: pages?.length || 1 }, (_, i) => (
          <div
            key={i}
            className={`pagination-item ${
              i == pagesCount && "pagination-item--selected"
            }`}
          ></div>
        ))}
      </div>
      <div className="carroussel" ref={carrRef}>
        {children}
      </div>
      {!automatic && (
        <div className="carroussel-next">
          <button
            className={`pagination-button ${
              pagesCount < pages?.length - 1 && "pagination-button--available"
            }`}
            onClick={handleNextPage}
          >
            <AiOutlineRight size={26} />
          </button>
        </div>
      )}
    </div>
  );
}
