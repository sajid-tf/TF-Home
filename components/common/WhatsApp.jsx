"use client";

import { globalImages } from "@/utils/images/globaIImages";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "@/assets/animated-logo/logo-part-five.png";

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+1 616 271 8544"
      avatar={logo.src}
      accountName="TechForing"
      buttonClassName="!w-10 !h-10 after:!w-7 after:!h-7 !static"
    />
  )
}

export default WhatsApp