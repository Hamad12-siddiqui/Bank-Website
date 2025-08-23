import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { TbMessageCircleFilled } from "react-icons/tb"
3
export const footer = [
    {name: "Home", href : "/"},
        {name: "Careers", href : "/Careers"},
            {name: "About", href : "/about"},
                {name: "Security", href : "/Security"},

]

export const info = [
      { icon: <TbMessageCircleFilled size={20} />, text: "testingproject@gmail.com", href: "mailto:hello@skillbirdge.com" },
  { icon: <FaPhone size={20} />, text: "1234567890", href: "tel:1234567890" },
  { icon: <FaLocationDot size={20} />, text: "Somewhere in the World", href: "https://maps.google.com" },
]