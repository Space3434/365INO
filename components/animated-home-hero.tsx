import Link from "next/link";
import styles from "./animated-home-hero.module.css";

const videoScenes = [
  {
    className: styles.sceneStrategy,
    src: "https://videos.pexels.com/video-files/5028622/5028622-uhd_3840_2160_25fps.mp4"
  },
  {
    className: styles.sceneBuild,
    src: "https://cdn.pixabay.com/video/2021/04/20/71696-540442444_large.mp4"
  },
  {
    className: styles.sceneModernize,
    src: "https://videos.pexels.com/video-files/10822505/10822505-uhd_3840_2160_25fps.mp4"
  },
  {
    className: styles.sceneCircuit,
    src: "https://cdn.pixabay.com/video/2016/09/21/5364-183788428_medium.mp4"
  },
  {
    className: styles.sceneNetwork,
    src: "https://cdn.pixabay.com/video/2025/04/07/270323_small.mp4"
  },
  {
    className: styles.sceneSecurity,
    src: "https://cdn.pixabay.com/video/2026/03/14/340193_small.mp4"
  }
];

export function AnimatedHomeHero() {
  return (
    <>
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroScenes} aria-hidden="true">
        <div className={`${styles.heroScene} ${styles.sceneBriefing}`}>
          {/* The first scene uses the approved, locally hosted leadership image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/homepage-header.png" alt="" />
          <span className={styles.briefingScan} />
          <span className={`${styles.briefingPulse} ${styles.pulseOne}`} />
          <span className={`${styles.briefingPulse} ${styles.pulseTwo}`} />
        </div>

        {videoScenes.map((scene) => (
          <div key={scene.src} className={`${styles.heroScene} ${scene.className}`}>
            <video autoPlay muted loop playsInline preload="metadata">
              <source src={scene.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      <div className={styles.sceneShade} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={`${styles.heroGlow} ${styles.heroGlowOne}`} aria-hidden="true" />
      <div className={`${styles.heroGlow} ${styles.heroGlowTwo}`} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.heroStage}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Strategy. Technology. Execution.
            </p>

            <h1 id="home-hero-title" className={styles.heading}>
              <span>We turn complex</span>
              <span>priorities into</span>
              <span className={styles.accentLine}>
                <span className={styles.rotatingWords} aria-hidden="true">
                  <span>measurable impact.</span>
                  <span>modern operations.</span>
                  <span>mission outcomes.</span>
                  <span>innovation in motion.</span>
                  <span>measurable impact.</span>
                </span>
                <span className="sr-only">measurable impact.</span>
              </span>
            </h1>

            <p className={styles.heroSummary}>
              365INO leads high-stakes programs from strategy through delivery—uniting experienced leadership,
              modern technology, and disciplined execution.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.buttonPrimary} href="/services">
                Explore our capabilities <span aria-hidden="true">→</span>
              </Link>
              <Link className={styles.buttonSecondary} href="/contact#contact-form">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.afterHero} aria-labelledby="home-outcomes-title">
      <div className={styles.afterHeroInner}>
        <h2 id="home-outcomes-title">
          Plan with clarity.
          <br />
          Deliver with discipline.
          <br />
          Modernize with purpose.
        </h2>
      </div>
    </section>
    </>
  );
}
