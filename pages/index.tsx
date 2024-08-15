import type { NextPage } from "next";
import { useCallback } from "react";
import Btn from "../components/btn";
import DesignCategories from "../components/design-categories";
import DesignCategories1 from "../components/design-categories1";
import ServicesInner from "../components/services-inner";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage1: NextPage = () => {
  const onBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavLinkHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavLinkHomeClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='servicesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkProjectsTestimonialsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkProjectsTestimonialsClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='testimonialDescriptionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContactContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landingPage}>
      <section className={styles.landingPageInner}>
        <div className={styles.frameParent}>
          <header className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  loading="lazy"
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.mumairWrapper}>
                  <a className={styles.mumair}>
                    <b>M</b>
                    <span>{`umair `}</span>
                  </a>
                </div>
              </div>
              <div className={styles.navLinkServices}>
                <div className={styles.frameContainer}>
                  <div className={styles.navLinkHomeParent}>
                    <div
                      className={styles.navLinkHome}
                      onClick={onNavLinkHomeClick}
                    >
                      <a className={styles.home}>Home</a>
                    </div>
                    <div
                      className={styles.navLinkHome}
                      onClick={onNavLinkHomeClick1}
                    >
                      <a className={styles.aboutMe}>About Me</a>
                    </div>
                  </div>
                  <div className={styles.servicesWrapper}>
                    <a
                      className={styles.services}
                      onClick={onServicesTextClick}
                    >
                      Services
                    </a>
                  </div>
                  <div className={styles.navLinkProjects}>
                    <div className={styles.navLinkProjectsTestimonials}>
                      <div
                        className={styles.navLinkHome}
                        onClick={onLinkProjectsTestimonialsClick}
                      >
                        <a className={styles.projects}>Projects</a>
                      </div>
                      <div
                        className={styles.linkProjectsTestimonials1}
                        onClick={onLinkProjectsTestimonialsClick1}
                      >
                        <a className={styles.testimonials}>Testimonials</a>
                      </div>
                    </div>
                    <div className={styles.linkContactWrapper}>
                      <div
                        className={styles.linkContact}
                        onClick={onLinkContactContainerClick}
                      >
                        <a className={styles.contact}>Contact</a>
                      </div>
                    </div>
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <a className={styles.downlaodCv}>Downlaod CV</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.testimonialsTitleWrapper}>
            <div className={styles.testimonialsTitle}>
              <div
                className={styles.hireMeButtonParent}
                data-scroll-to="groupContainer2"
              >
                <div className={styles.hireMeButton}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.hiIAmWrapper}>
                        <div className={styles.hiIAm}>{`Hi I am `}</div>
                      </div>
                      <div className={styles.imageContainer}>
                        <div className={styles.muhammadUmairWrapper}>
                          <h3
                            className={styles.muhammadUmair}
                          >{`Muhammad Umair `}</h3>
                        </div>
                        <div className={styles.nameContainer}>
                          <h1 className={styles.uiUx}>{`UI & UX`}</h1>
                          <div className={styles.designerWrapper}>
                            <h1 className={styles.designer}>{`Designer `}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.loremIpsumDolorSitAmetConWrapper}>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <div className={styles.hiIAmWrapper}>
                      <Btn onBtnContainerClick={onBtnContainerClick} />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-2@2x.png"
                  />
                  <div className={styles.socialMediaBackground} />
                </div>
              </div>
              <div className={styles.testimonialsTitleInner}>
                <div className={styles.facebookNegativeParent}>
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/linkedin--negative.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div
              className={styles.footerLogoParent}
              data-scroll-to="groupContainer1"
            >
              <div className={styles.footerLogo}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-7@2x.png"
                />
                <div className={styles.logoBackground} />
              </div>
              <div className={styles.aboutContentWrapper}>
                <div className={styles.aboutContent}>
                  <h1 className={styles.aboutMe1}>{`About Me `}</h1>
                  <div className={styles.aboutDetails}>
                    <div className={styles.aboutDescription}>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <DesignCategories
                      uX="UX"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="35px"
                    />
                    <DesignCategories1
                      websiteDesign="Website Design"
                      propColor="#fff"
                      propWidth="657px"
                      propRight="84px"
                    />
                    <DesignCategories1
                      websiteDesign="App Design "
                      propColor="#fff"
                      propWidth="721px"
                      propRight="20px"
                    />
                    <DesignCategories
                      uX="Graphic Design "
                      propColor="#fff"
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <ServicesInner
              propAlignSelf="unset"
              propPadding="unset"
              propFlex="1"
              propColor="#fff"
              propColor1="#fff"
            />
          </div>
          <FrameComponent3 />
        </div>
      </section>
      <FrameComponent4 />
      <Footer
        propBackgroundColor="#1e1e1e"
        propBackgroundColor1="#1e1e1e"
        propColor="#1e1e1e"
        propColor1="unset"
        propColor2="unset"
        propColor3="#fff"
        propColor4="#fff"
        propColor5="#fff"
        propColor6="#fff"
        propColor7="#fff"
        propColor8="#fff"
        facebookNegative="/facebook--negative.svg"
        twitterNegative="/twitter--negative.svg"
        instagramNegative="/instagram--negative.svg"
        linkedInNegative="/linkedin--negative.svg"
        propBackgroundColor2="#121212"
        propBackgroundColor3="#121212"
      />
    </div>
  );
};

export default LandingPage1;
