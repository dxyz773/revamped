export function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileDevice =
    /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );
  return isMobileDevice;
}
