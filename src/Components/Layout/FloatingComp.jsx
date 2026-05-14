"use client";
import { Constant } from "@/Data/Constant";

export default function FloatingComp() {
  return (
    <a
      href={`https://wa.me/${Constant.Company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center 
shadow-lg hover:scale-110 transition-all duration-300 whatsapp-blink
shadow-green-400/60 hover:shadow-green-500/80">
        
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.646.862 5.09 2.323 7.071L4 29l7.114-2.287A11.938 11.938 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 22c-1.86 0-3.6-.508-5.092-1.388l-.364-.215-4.218 1.356 1.379-4.106-.237-.377A9.938 9.938 0 0 1 6 15c0-5.514 4.486-10 10.001-10C21.514 5 26 9.486 26 15s-4.486 10-9.999 10zm5.507-7.489c-.301-.151-1.779-.879-2.054-.979-.275-.1-.475-.151-.676.151-.2.301-.776.979-.951 1.18-.176.2-.351.226-.652.075-.301-.151-1.271-.468-2.421-1.494-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.463.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.151-.676-1.63-.926-2.23-.243-.583-.49-.503-.676-.512l-.577-.01c-.201 0-.527.075-.803.377-.275.301-1.053 1.029-1.053 2.507s1.078 2.908 1.229 3.109c.151.201 2.124 3.243 5.144 4.547.719.31 1.278.495 1.715.634.721.229 1.378.197 1.897.119.579-.086 1.779-.727 2.029-1.43.251-.703.251-1.305.176-1.43-.075-.126-.275-.201-.577-.352z"/>
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 bottom-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}