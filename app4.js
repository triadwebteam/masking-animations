let tl = gsap.timeline();

tl.to('.scaryImg', 
{
   duration:3,
   clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
   scale:1.1,
   ease:'expo.out'
})

tl.to('.hide',
 {
    duration:1.4,
    y:0,
    stagger:0.2,
    ease:'expo.out'
 }, '-=2.5');