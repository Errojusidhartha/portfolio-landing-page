import type { NextPage } from "next";
import { useCallback } from "react";
import GroupComponent from "./group-component";
import GroupComponent1 from "./group-component1";
import Stars from "./stars";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const onFooterRightContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={[styles.testimonialDescriptionParent, className].join(" ")}
    >
      <div
        className={styles.testimonialDescription}
        data-scroll-to="testimonialDescriptionContainer"
      >
        <div className={styles.testimonialsDetails}>
          <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialsHeader}>
                <h1 className={styles.testimonials}>Testimonials</h1>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
          <div className={styles.paginationDot}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.authorImage} />
              <div className={styles.testimonialContent1}>
                <h3 className={styles.h3}>“</h3>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAuthorDetails}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.ceo}>CEO</div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialFeedback}>
                <div className={styles.loremIpsumDolorSitAmetConParent}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </div>
                  <div className={styles.testimonialTwoDetails}>
                    <h3 className={styles.h31}>“</h3>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent profileImages="/ellipse-10@2x.png" />
            <GroupComponent1 ellipse11="/ellipse-11@2x.png" />
          </div>
        </div>
        <div className={styles.testimonialNavigation}>
          <div className={styles.footerContent}>
            <div className={styles.footerLinks} />
            <div className={styles.footerLinks1} />
            <div className={styles.footerLinks} />
            <div className={styles.footerLinks} />
          </div>
        </div>
      </div>
      <div className={styles.footerRight} onClick={onFooterRightContainerClick}>
        <div
          className={styles.callToActionTitleParent}
          data-scroll-to="groupContainer"
        >
          <div className={styles.callToActionTitle}>
            <h1
              className={styles.letsDesignTogether}
              data-scroll-to="letsDesignTogether"
            >
              Lets Design Together
            </h1>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <Stars />
      </div>
    </section>
  );
};

export default FrameComponent4;
