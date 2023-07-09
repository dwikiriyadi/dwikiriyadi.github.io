import SocialType from "@/lib/types/social_type";
import { faLinkedinIn, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

const Socials : SocialType[] = [
    {
        name: "Github",
        icon: faGithub,
        url: "https://github.com/dwikiriyadi"
    },
    {
        name: "LinkedIn",
        icon: faLinkedinIn,
        url: "https://www.linkedin.com/in/dwiki-riyadi-a944b66b/"
    },
    {
        name: "Medium",
        icon: faMedium,
        url: "https://medium.com/@wikinotes"
    }
]

export default Socials;