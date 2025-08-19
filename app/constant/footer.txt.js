import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { TbMessageCircleFilled } from "react-icons/tb"

export const footer = [
    {name: "Home", href : "/"},
        {name: "Careers", href : "/"},
            {name: "About", href : "/"},
                {name: "Security", href : "/"},

]

export const info = [
      { icon: <TbMessageCircleFilled size={20} />, text: "hello@skillbirdge.com", href: "mailto:hello@skillbirdge.com" },
  { icon: <FaPhone size={20} />, text: "1234567890", href: "tel:1234567890" },
  { icon: <FaLocationDot size={20} />, text: "Somewhere in the World", href: "https://maps.google.com" },
]