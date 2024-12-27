export const isSafari = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1;
};

(() => {
  if (isSafari()) {
    document
      .querySelectorAll<HTMLLinkElement>("a[data-rss-feed]")
      .forEach((link) => {
        link.href = "feed:" + link.href;
      });
  }
})()