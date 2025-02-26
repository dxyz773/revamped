type PropTypes = { url: string; children: React.ReactNode };

function SocialMediaLinkEl({ url, children }: PropTypes) {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
}

export default SocialMediaLinkEl;
