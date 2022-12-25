const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  //   .from(".intro", {
  //     duration: 2,
  //     ease: "elastic.out(.4, 0.3)",
  //     x: "-100vw",
  //   })
  .to(
    ".intro",
    {
      opacity: 0,
    },
    2
  )
  .to(".experience", { opacity: 1 })
  .from(
    ".fa-react",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    4
  )
  .from(
    ".fa-php",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    4.5
  )
  .from(
    ".fa-square-js",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    5
  )
  .from(
    ".fa-wordpress-simple",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    5.5
  )
  .from(
    ".fa-html5",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    6
  )
  .from(
    ".fa-css3-alt",
    { duration: 2, ease: "power2.in", opacity: 1, x: "100vw" },
    6.5
  );
