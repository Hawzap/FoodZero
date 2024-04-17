const linksWay = [
    { linkTitle: "home", href: "mainPage" },
    { linkTitle: "menu", href: "menu" },
    { linkTitle: "one column", href: "blogsOneColumn" },
    { linkTitle: "two columns", href: "blogsTwoColumns" },
    { linkTitle: "sidebar post", href: "article" },
    { linkTitle: "without sidebar post", href: "articleAnother" },
    { linkTitle: "who we are", href: "aboutUs" },
    { linkTitle: "portfolio", href: "portfolio" },
    { linkTitle: "contact", href: "getInTouch" },
];
const pageLocation = window.location.pathname.split("/")[2];
const linkIndex = linksWay.findIndex((e) => e.href == pageLocation);
const burgerMenu = document.querySelector(".burgerMenu");
const routes = document.querySelector(".routes");
const links = document.querySelectorAll(".links li");
const extendedList = document.querySelectorAll(".containSubList");
const routesCloseBtn = document.querySelector(".close");
const body = document.querySelector("body");
links.forEach((e) => {
    const linkItem = e.querySelector("A");
    const linkBlock = e.children[0];
    const link = linkBlock.children[1].textContent.toLowerCase();
    if (linkItem) {
        const hrefIndex = linksWay.findIndex(
            (el) => el.linkTitle == linkItem.textContent.toLowerCase()
        );
        const hrefName = linksWay[hrefIndex].href;
        linkItem.href = `http://127.0.0.1:5500/foodZero/${hrefName}/${hrefName}.html`;
    }
    if (!(linkIndex == 0) && !linksWay[linkIndex]) return;
    if (link == linksWay[linkIndex].linkTitle) {
        linkBlock.classList.add("activeLink");
        if (e.parentNode.classList.contains("subLinks")) {
            e.parentNode.parentNode.children[0].classList.add("activeLink");
        }
    }
});
burgerMenu.addEventListener("click", () => {
    const scrolled = window.pageYOffset;
    body.style.overflowY = "hidden";
    routes.style.top = scrolled + "px";
});
routesCloseBtn.addEventListener("click", () => {
    const routesHeight = routes.getBoundingClientRect().height;
    body.style.overflowY = "auto";
    routes.style.top = -routesHeight + "px";
});
extendedList.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("activeSubList");
        const liHeight = e.offsetHeight;
        const linkTitle = [
            +window
                .getComputedStyle(e.children[1], null)
                .getPropertyValue("margin-top")
                .slice(0, 2),
            +window
                .getComputedStyle(e.children[1], null)
                .getPropertyValue("margin-bottom")
                .slice(0, 2),
        ];

        const subListHeight = e.children[1].offsetHeight;
        if (e.classList.contains("activeSubList")) {
            const listHeight =
                liHeight + subListHeight + linkTitle[0] + linkTitle[1];
            e.style.height = listHeight + "px";
        } else {
            e.style.height = "57px";
        }
    });
});
