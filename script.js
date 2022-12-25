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
  .to(".fa-5x", { duration: 3, y: "100vh" }, 8.5);
