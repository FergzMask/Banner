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
      strength: 0.1,
      squash: 2,
    },
    2.1
  )
  .from(
    ".fa-5x",
    { duration: 2, ease: "power2.in", x: "100vw", stagger: 0.5 },
    2.5
  );
