const pages = [
  {
    faviconUrl: "www.youtube.com",
    name: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    faviconUrl: "www.crunchyroll.com",
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/",
  },
  {
    faviconUrl: "www.funimation.com",
    name: "Funimation",
    url: "https://www.funimation.com/",
  },
  {
    faviconUrl: "https://mail.google.com/mail/u/0/#inbox",
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    faviconUrl: "www.bancofalabella.cl",
    name: "Banco Falabella",
    url: "https://www.bancofalabella.cl/",
  },
  {
    faviconUrl: "www.lectormanga.com",
    name: "LectorManga",
    url: "https://lectormanga.com/",
  },
  {
    faviconUrl: "play.hbomax.com",
    name: "HBO Max",
    url: "https://play.hbomax.com/",
  },
  {
    faviconUrl: "www.disneyplus.com",
    name: "Disney+",
    url: "https://www.disneyplus.com/",
  },
  {
    faviconUrl: "www.starplus.com",
    name: "Star+",
    url: "https://www.starplus.com/",
  },
  {
    faviconUrl:
      "login.portal.bancochile.cl/bancochile-web/persona/login/index.html#/login",
    name: "Banco de Chile",
    url: "https://login.portal.bancochile.cl/bancochile-web/persona/login/index.html#/login",
  },
];

const container = document.querySelector("#shortcut-container");

pages.forEach((page) => {
  // https://s2.googleusercontent.com/s2/favicons?domain=${page.faviconUrl}&sz=24
  // chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2F${page.faviconUrl}%2F
  const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${page.faviconUrl}&sz=24`;
  const favicon = document.createElement("img");
  const tileText = document.createElement("div");
  const span = document.createElement("span");
  const shortcutContainer = document.createElement("a");
  const tile = document.createElement("div");
  const tileIcon = document.createElement("div");
  tile.className = "tile";
  tileIcon.className = "tile-icon";
  span.innerText = page.name;
  tileText.className = "tile-text";
  shortcutContainer.href = page.url;
  favicon.src = faviconUrl;
  favicon.className = "pages-icons";
  tileText.appendChild(span);
  tileIcon.appendChild(favicon);
  tile.appendChild(tileIcon);
  tile.appendChild(tileText);
  shortcutContainer.appendChild(tile);
  container.appendChild(shortcutContainer);
});
