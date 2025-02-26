import { discord, email, github, linkedIn, medium } from "./NonPhosphorIcons";
import SocialMediaLinkEl from "./SocialMediaLinkEl";

type SocialMediaPlatform = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const socialMediaPlatforms: SocialMediaPlatform[] = [
  {
    name: "github",
    url: "https://github.com/dxyz773",
    icon: github,
  },
  { name: "medium", url: "https://medium.com/@dxyz773", icon: medium },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/demitryedwards",
    icon: linkedIn,
  },
  {
    name: "discord",
    url: "https://discord.com/users/1108391346907127899",
    icon: discord,
  },
  { name: "email", url: "mailto:dxyz773@gmail.com", icon: email },
];

function SocialMediaLinkList() {
  return (
    <ul className="flex gap-2 mt-20 mb-4">
      {socialMediaPlatforms.map((platform) => (
        <li key={platform.url} className="dark:hover:text-[#84cc16]">
          <SocialMediaLinkEl url={platform.url}>
            {platform.icon}
          </SocialMediaLinkEl>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaLinkList;
