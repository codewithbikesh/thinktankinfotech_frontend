import React from "react";
import chatImage from "../../assets/images/lets_chat.svg";
import whatsappLogo from "../../assets/images/whatsapp.svg";
function WhatsAppChat() {
  return (
    <div className="fixed bottom-[9%] right-[3.5%] z-[99]">
    {/* <img
      src={chatImage}
      className="absolute top-[-3.0625rem] left-[-100%] w-[7.5rem] object-contain transition-all duration-500 ease-in-out"
      alt="chat"
    /> */}
    <a href="https://api.whatsapp.com/send?phone=9779856017621" target="_blank" rel="noopener noreferrer">
      <img
        src={whatsappLogo}
        className="w-20 h-20" // You can adjust the size here
        alt="whatsapp"
      />
    </a>
  </div>  
  );
}

export default WhatsAppChat;
