import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

// hide moon elements
// gsap.set(".moon-things",{display:"none"});
// gsap.set("#left-eye",{display:"none"});

export let moonZoomInTL = gsap.timeline();
moonZoomInTL.fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:14, y:"+=1200", x:"+=300",ease:"none"});
            // .from(".moon-things",{alpha:0});


// gsap.set(".moon-things",{display:"block"});
gsap.set(".moon-things",{transformOrigin:"center"});
gsap.set("#right-arm",{transformOrigin:"bottom left"});
gsap.set("#left-arm",{transformOrigin:"top right"});
gsap.set(".moon-legs",{transformOrigin:"top right"});

export let moonManTL = gsap.timeline();
moonManTL.fromTo("#left-eye",{opacity:0, scale:0},{display: "block", opacity: 1, duration:0.5, scale:1})
        .fromTo("#right-eye",{opacity:0, scale:0},{display: "block", opacity: 1, duration:0.5, scale:1})
        .to("#moon",{scale:5, duration:1, y:"-=800"})
        .fromTo("#mouth",{opacity:0, scale:0},{display: "block", opacity: 1, duration:0.5, scale:1}, "-=.75")
        .fromTo("#right-arm",{opacity:0, scale:0, rotate:90},{display: "block", opacity: 1, duration:0.5, scale:1, rotate:0}, "limbs")
        .fromTo("#left-arm",{opacity:0, scale:0, rotate:-90},{display: "block", opacity: 1, duration:0.5, scale:1, rotate:0}, "limbs")
        .fromTo(".moon-legs",{opacity:0, scale:0, rotate:45},{display: "block", opacity: 1, duration:0.5, scale:1, rotate:0}, "limbs")
        .to("#space-ship",{duration:5, rotate:75, x:"+=500", y:"-=250", scale:0}, "-=2")
        .fromTo("#cape",{opacity:0, scale:0, rotate:45},{display: "block", opacity: 1, duration:0.5, scale:1, rotate:0}, "-=3")
        .to("#left-eye",{scaleY:0.25, scaleX:1.75, duration:0.3}, "-=3")
        .to("#left-eye",{scaleY:1, scaleX:1, duration:0.3}, "-=2.7")
        .to("#moon-tongue",{scaleX:1.25, scaleY:0.75, duration:0.175, repeat: -1, yoyo:true}, "-=2.5")
        .to("#cape",{scaleX:1.25, scaleY:0.75, duration:1, repeat: -1, yoyo:true})
        .to("#moon",{duration:4, ease: "back.inOut(4)", y:"-=600", x:"+=600", scale:0}, "-=0.5");



            // .to(".moon-things",{display: "block", alpha:1, duration:3});

        // .to(".eyes", { display: "block", opacity: 1 });


// If the elem has display: none and opacity: 0
// gsap.to(".hiddenElem", { display: "block", opacity: 1 });

// If the elem has display: none and opacity: 1
// gsap.fromTo(".hiddenElem", { opacity: 0 }, { display: "block", opacity: 1 });


        // .from("#left-eye",{alpha:1, duration:1, scale:2});
        // .from("#left-eye",{alpha:1, duration:1, scale:2});
        // .fromTo("#moon-things",{alpha:0},{alpha:1, duration:2});


    // .to(".moon-things",{duration:2, alpha:1,}, "-=1");
    //   .from(".moon-things",{alpha:0})
    //     .to(".eyes",{duration:2, alpha:1});
        // .to("#right-eye",{duration:2, alpha:1}, "eyes");