const baseHref = BASE_HREF; // eslint-disable-line no-undef

const network = {
  userIsOnline: () => window && window.navigator && window.navigator.onLine,
  getBaseHrefUrl: (url) => `${baseHref}${url}`,
};

module.exports = network;
