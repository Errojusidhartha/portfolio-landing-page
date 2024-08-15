import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import ProjectTypes from "./project-types";
import ProjectTypes1 from "./project-types1";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-scroll-to="frameContainer"
    >
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <FrameComponent propColor="#fff" propColor1="#fff" />
      <div className={styles.projectExamples}>
        <ProjectTypes
          webDesigns="/web-designs@2x.png"
          webDesigns1="/web-designs-1@2x.png"
          propColor="#fff"
        />
        <ProjectTypes1
          webDesigns="/web-designs-2@2x.png"
          webDesigns1="/web-designs-3@2x.png"
          businessLandingPageDesign="Business Landing Page Design "
          propColor="#fff"
        />
        <ProjectTypes1
          webDesigns="/web-designs-4@2x.png"
          webDesigns1="/web-designs-5@2x.png"
          businessLandingPageDesign="Ecom Web Page Design "
          propColor="#fff"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
