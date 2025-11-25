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
    if (!pages) return;
    if (pagesCount < pages?.length - 1) {
      setPagesCount(pagesCount + 1);
      pages[0].style.transition = "1.3s ease-in-out;";
      pages[0].style.marginLeft = `-${100 * (pagesCount + 1)}%`;
    }
  }

  function handlePrevPage() {
    if (!pages) return;
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

const subindoRef = useRef(true);

useEffect(() => {
  if (auto) {
    if (!pages || pages.length === 0) return;

    let interval = setInterval(() => {
      setPagesCount(prev => {
        if (subindoRef.current) {
          if (prev >= pages.length - 1) {
            subindoRef.current = false;
            return prev - 1;
          }
          pages[0].style.marginLeft = `-${100 * (prev + 1)}%`;
          return prev + 1;
        } else {
          if (prev <= 0) {
            subindoRef.current = true;
            return prev + 1;
          }
          pages[0].style.marginLeft = `-${100 * (prev - 1)}%`;
          return prev - 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }
}, [auto, pages]);


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
              pages && pagesCount < pages?.length - 1 && "pagination-button--available"
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
