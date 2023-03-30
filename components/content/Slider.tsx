import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export const Slider = ({ children, open, onClose, ...props }: any) => {
  function escHandler({ key }: any) {
    if (key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", escHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", escHandler);
      }
    };
  }, []);

  if (typeof document !== "undefined") {
    return createPortal(
      <div className={`fixed inset-0 ${open ? "" : "pointer-events-none"}`}>
        {/* backdrop */}
        <div
          className={`fixed inset-0 bg-black ${
            open ? "opacity-50" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
          onClick={onClose}
        />

        {/* content */}

        <div
          className={`fixed inset-4 bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')] bg-cover
       shadow-lg ${
         open ? "opacity-100" : "pointer-events-none opacity-0"
       } transition-opacity duration-300 ease-in-out`}
        >
          <div className="h-full w-full bg-white/70 bg-no-repeat p-4 backdrop-blur-3xl">
            <div>
              <HighlightOffIcon className="text-purple-700" fontSize="large" onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      </div>,
      document.body,
    );
  } else {
    return null;
  }
};
