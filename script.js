const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .to(
    ".intro",
    {
      opacity: 0,
    },
    2
  )
  .from(
    ".experience",
    {
      duration: 1.5,
      ease: "bounce.out",
      opacity: 1,
      y: "-100vh",
    },
    2.1
  )
  .from(
    ".fa-5x",
    { duration: 2, ease: "power2.in", x: "100vw", stagger: 0.5 },
    2.5
  )
  .to(
    ".experience",
    {
      y: "100vh",
    },
    8.5
  )
  .from(".sarah", { y: "-100vh" }, 8)
  .to(".fa-5x", { duration: 3, y: "100vh" }, 8.5)
  .to(".hiring", { opacity: 1, stagger: 0.9 }, 9.6)
  .to(".lto", { opacity: 0 }, 12)
  .to(".lto", { opacity: 1 }, 12.5)
  .to(".lto", { opacity: 0 }, 13)
  .to(".lto", { opacity: 1 }, 13.5)
  .to(".lto", { opacity: 0 }, 14)
  .to(".lto", { opacity: 1 }, 14.5)
  .to(".hiring", { duration: 3, opacity: 1, x: "100vw" }, 16.5)
  .from(".reach", { y: "-100vh" }, 16.5)
  .from(".contact", { y: "100vh", stagger: 0.3 }, 17);
