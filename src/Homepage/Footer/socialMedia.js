import { ReactComponent as GithubLogo } from "./../../common/logos/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "./../../common/logos/facebookLogo.svg";
import { ReactComponent as LinkedinLogo } from "./../../common/logos/linkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "./../../common/logos/instagramLogo.svg";
import { styleLogo } from "./styled";

export const socialMedia = [
  {
    name: "GitHub",
    link: "https://github.com/KalinaJakubowska",
    Icon: styleLogo(GithubLogo),
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kaljakubowska",
    Icon: styleLogo(FacebookLogo),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/kalinajakubowska",
    Icon: styleLogo(LinkedinLogo),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kalina.jakubowska",
    Icon: styleLogo(InstagramLogo),
  },
];
