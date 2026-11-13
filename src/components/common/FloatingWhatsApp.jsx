import { FaWhatsapp } from "react-icons/fa";
import contactInfo from "@/data/contact";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-5 z-[60] inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#0B2F5B]/25 transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2F5B] sm:right-7"
    >
      <FaWhatsapp aria-hidden="true" className="h-8 w-8" />
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg bg-[#0B2F5B] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100"
      >
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
