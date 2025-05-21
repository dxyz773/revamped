import SocialMediaLinkEl from "./SocialMediaLinkEl";

type SocialMediaPlatform = {
  name: string;
  url: string;
};

const socialMediaPlatforms: SocialMediaPlatform[] = [
  {
    name: "github",
    url: "https://github.com/dxyz773",
  },
  { name: "medium", url: "https://medium.com/@dxyz773" },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/demitryedwards",
  },
  {
    name: "discord",
    url: "https://discord.com/users/1108391346907127899",
  },
  { name: "email", url: "mailto:dxyz773@gmail.com" },
];

function SocialMediaLinkList() {
  return (
    <ul className="flex gap-2 mt-30 items-end">
      {socialMediaPlatforms.map((platform) => (
        <SocialMediaLinkEl
          key={platform.name}
          url={platform.url}
          name={platform.name}
        />
      ))}
    </ul>
  );
}

export default SocialMediaLinkList;
