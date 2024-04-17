gsap.registerPlugin(ScrollTrigger);

// COMMON FUNCTIONS

const splitText = (element) => {
    const elementText = element.textContent.replace(/\s+/g, " ").trim();
    element.innerHTML = "";
    const splitedText = elementText.split(" ");
    const divArr = [];
    splitedText.forEach((e) => {
        const div = document.createElement("div");
        div.style.display = "inline-block";
        e.split("").forEach((el) => {
            const span = document.createElement("span");
            span.style.display = "inline-block";
            span.textContent = el;
            div.append(span);
        });
        divArr.push(div);
    });
    divArr.forEach((el, i) => {
        if (i !== divArr.length - 1) {
            element.append(el);
            element.innerHTML += "&nbsp;";
        } else {
            element.append(el);
        }
    });
};

const propertiesRemove = (el, properties) => {
    try {
        properties.forEach((e) => {
            el.style.removeProperty(e);
        });
    } catch (err) {
        console.log(err);
    }
};

// HELLOBLOCK ANIMATIONS
let tl = gsap.timeline();
gsap.set("header .title", { opacity: 0 });
gsap.to("body", {
    overflowY: "hidden",
});
tl.to(".preloaderTitle", {
    y: 0,
    stagger: 0.35,
    duration: 0.7,
})
    .from(
        ".titleWrapper span",
        {
            scaleX: 0,
            duration: 0.5,
        },
        "-=0.3"
    )
    .from(".subLine", {
        display: "none",
        scaleY: 0,
        duration: 0.4,
    })
    .call(() => {
        const headerTitleEl = document.querySelector(".title");
        const headerTitle = headerTitleEl.getBoundingClientRect();
        const ghostTitle = document
            .querySelector(".ghostTitle")
            .getBoundingClientRect();
        const preloaderTitle = document.querySelector(".titleWrapper");
        const wrapper = document
            .querySelector(".wrapper")
            .getBoundingClientRect();
        gsap.to(".titleWrapper", {
            y: -(ghostTitle.top - headerTitle.top),
            x: -(preloaderTitle.offsetLeft - wrapper.left),
            duration: 1,
            onComplete: () => {
                gsap.set("header .title", { opacity: 1 });
            },
        });
        gsap.to(".preloaderTitle", {
            fontSize: "52px",
            duration: 1,
        });
        gsap.to(".mainLine", {
            width: 150,
            duration: 1,
        });
        gsap.to("body", {
            overflow: "auto",
        });
    })
    .to(".bg", {
        opacity: 0,
        duration: 1.7,
    })
    .to(".preloader", {
        display: "none",
    });

gsap.from(".spices img", {
    scrollTrigger: {
        trigger: ".spices",
        start: "-50% 70%",
    },
    xPercent: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
});

gsap.from(".firstBlock img", {
    scrollTrigger: {
        trigger: ".firstBlock",
        start: "-10% 70%",
    },
    transformOrigin: "top center",
    scaleY: 0,
    opacity: 0,
    duration: 0.6,
});
gsap.from(".secondBlock p", {
    scrollTrigger: {
        trigger: ".secondBlock",
        start: "-10% 70%",
    },
    opacity: 0,
    x: -70,
    duration: 0.6,
});

const splitingText = document.querySelector(".firstBlock h2");

splitText(splitingText);

gsap.from(".firstBlock h2 span", {
    opacity: 0,
    y: 35,
    rotate: 40,
    stagger: 0.03,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".firstBlock h2",
        start: "-55% 70%",
    },
});
gsap.from(".firstBlock p", {
    opacity: 0,
    x: -85,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".firstBlock p",
        start: "-75% 80%",
    },
});
gsap.from(".secondBlock img", {
    transformOrigin: "top center",
    scaleY: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".secondBlock img",
        start: "0 80%",
    },
});

// MENU ANIMATIONS

gsap.from(".menu-title h2", {
    x: -85,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".menu-title",
        start: "-100% 60%",
    },
});
gsap.from(".menu-title p", {
    y: -45,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".menu-title",
        start: "-100% 60%",
    },
});

const items = document.querySelector(".items");
const item = document.querySelectorAll(".item");

items.style.height = items.getBoundingClientRect().height + "px";
items.style.position = "relative";

item.forEach((el) => {
    const itemPositionX = el.offsetTop;
    const itemPositionY = el.offsetLeft;
    setTimeout(() => {
        el.style.position = "absolute";
    }, 0);
    gsap.fromTo(
        el,
        {
            xPercent: -50,
            yPercent: -50,
            top: "50%",
            left: "50%",
            opacity: 0,
            duration: 0,
        },
        {
            top: itemPositionX,
            left: itemPositionY,
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".items",
                start: "-20% center",
            },
            onComplete: () => {
                propertiesRemove(el, ["position", "top", "left"]);
            },
        }
    );
});

// COOKINGPROCESS

const cookBlockTitle = document.querySelector(".process h2");
splitText(cookBlockTitle);

gsap.from(".process h2 span", {
    x: -35,
    opacity: 0,
    duration: 0.25,
    stagger: 0.04,
    scrollTrigger: {
        trigger: ".process h2",
        start: "-30% 70%",
    },
});
gsap.from(".process p", {
    y: -85,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".process p",
        start: "-30% 65%",
    },
});
gsap.from(".plate", {
    y: 120,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".chef",
        start: "20% center",
    },
});
gsap.from(".cookingMan", {
    y: -85,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".chef",
        start: "35% center",
    },
});

// BENEFITS

const benefitTitle = document.querySelectorAll(".benefit h3");
benefitTitle.forEach((e) => {
    splitText(e);
});
const benefitScrollTrigger = {
    trigger: ".benefits",
    scrub: 1,
};

gsap.from(".benefit .benefit-icon", {
    borderRadius: 20,
    opacity: 0.2,
    scrollTrigger: {
        start: " 10%",
        trigger: ".benefits",
        pin: true,
        scrub: 1,
    },
});
gsap.from(".benefit .benefit-icon img", {
    scale: 0,
    transformOrigin: "center",
    scrollTrigger: benefitScrollTrigger,
});
gsap.from(".benefit h3 div:nth-child(odd)", {
    y: 45,
    opacity: 0,
    scrollTrigger: benefitScrollTrigger,
});
gsap.from(".benefit h3 div:nth-child(even)", {
    y: -45,
    opacity: 0,
    scrollTrigger: benefitScrollTrigger,
});

// FOOD POSTS

const foodPostsImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".dishPost",
        start: "top center",
    },
});

foodPostsImgTl
    .from(".dishPhoto", {
        scaleY: 0,
        transformOrigin: "top center",
        opacity: 0,
        duration: 0.6,
    })
    .from(
        ".dishPhotoWrapper p",
        {
            scaleX: 0,
            transformOrigin: "center center",
            opacity: 0,
            duration: 0.4,
        },
        "-=0.3"
    );

gsap.from(".userPhoto", {
    x: -35,
    borderRadius: 20,
    scale: 0.4,
    opacity: 0,
    transformOrigin: "center",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".postInfo",
        start: "-150% 70%",
    },
});
gsap.from(".additionalInfo", {
    x: 35,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".postInfo",
        start: "-150% 70%",
    },
});

gsap.from(".mainPostInfo h3", {
    y: -45,
    opacity: 0,
    duration: 0.55,
    scrollTrigger: {
        trigger: ".mainPostInfo h3",
        start: "-30% 60%",
    },
});
gsap.from(".mainPostInfo .line", {
    scaleX: 0,
    transformOrigin: "center",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo h3",
        start: "-30% 60%",
    },
});
gsap.from(".mainPostInfo .postText", {
    x: -55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo .postText",
        start: "-20% 80%",
    },
});
gsap.from(".mainPostInfo .readMore", {
    x: -35,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainPostInfo .readMore",
        start: "-35% 80%",
    },
});

// MAKING RESERVATION

const field = document.querySelectorAll(".field");
const fieldBorder = document.querySelectorAll(".fieldBorder");
const fieldsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".reservation",
        start: "-30% 50%",
    },
    onComplete: () => {
        field.forEach((e) => {
            e.style.border = "2px solid black";
        });
        fieldBorder.forEach((e) => {
            e.style.display = "none";
        });
    },
});

gsap.from(".reservationTitle h2", {
    y: -60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".reservationTitle",
        start: "-30% 50%",
    },
});
gsap.from(".reservationTitle p", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".reservationTitle",
        start: "-30% 50%",
    },
});

fieldsTl
    .from(".top", {
        scaleX: 0,
        duration: 0.4,
    })
    .from(".right", {
        scaleY: 0,
        duration: 0.4,
    })
    .from(".bottom", {
        scaleX: 0,
        duration: 0.4,
    })
    .from(".left", {
        scaleY: 0,
        duration: 0.4,
    });

gsap.from(".booking", {
    y: -55,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".booking",
        start: "30% 70%",
    },
});

// MAIN MEALS

gsap.from(".mainMeals-title h2", {
    y: -60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainMeals-title",
        start: "-30% 50%",
    },
});
gsap.from(".mainMeals-title p", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".mainMeals-title",
        start: "-30% 50%",
    },
});

gsap.from(".meal", {
    xPercent: -33,
    opacity: 0,
    scrollTrigger: {
        trigger: ".meals",
        scrub: 1,
        start: "-40% 50%",
        end: "35% 60%",
    },
});

// COMMENTS
const commentText = document.querySelector(".commenText");
splitText(commentText);

gsap.from(".commenText span", {
    y: -25,
    opacity: 0,
    duration: 0.24,
    stagger: 0.015,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".commenText",
        start: "-45% 70%",
    },
});
gsap.from(".author img", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".commentInfo",
        start: "-30% 70%",
    },
});
gsap.from(".author div", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".commentInfo",
        start: "-30% 70%",
    },
});

gsap.from(".arrows img:first-child", {
    x: -60,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".commentInfo",
        start: "-30% 70%",
    },
});
gsap.from(".arrows img:last-child", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".commentInfo",
        start: "-30% 70%",
    },
});
