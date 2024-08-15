import ServicesInner from "./services-inner";
import FrameComponent from "./frame-component";
import ProjectTypes from "./project-types";
import ProjectTypes1 from "./project-types1";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) 0px var(--padding-4xl);
          box-sizing: border-box;
          max-width: 100%;
          flex-shrink: 0;
          text-align: center;
          font-size: var(--h2-65-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 1423px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-87xl);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-34xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-7xl);
          }
        `}
      >
        <ServicesInner />
        <FrameComponent />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            padding: 0px 0px var(--padding-14xl);
            box-sizing: border-box;
            gap: var(--gap-25xl);
            max-width: 100%;
            text-align: left;
            font-size: var(--sub-p-19-size);
            color: var(--color-darkorange-100);
            @media screen and (max-width: 925px) {
              gap: var(--gap-3xl);
            }
          `}
        >
          <ProjectTypes
            webDesigns="/web-designs@2x.png"
            webDesigns1="/web-designs-1@2x.png"
          />
          <ProjectTypes1
            webDesigns="/web-designs-2@2x.png"
            webDesigns1="/web-designs-3@2x.png"
            businessLandingPageDesign="Business Landing Page Design "
          />
          <ProjectTypes1
            webDesigns="/web-designs-4@2x.png"
            webDesigns1="/web-designs-5@2x.png"
            businessLandingPageDesign="Ecom Web Page Design "
            propColor="#1e1e1e"
          />
        </div>
        <div
          className={css`
            width: 1412px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 932px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-base);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-xl) 0px var(--padding-3xl);
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: inherit;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-33xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-20xl);
                  }
                `}
              >
                Testimonials
              </h1>
            </div>
            <div
              className={css`
                align-self: stretch;
                height: 101px;
                position: relative;
                font-size: var(--nav-bar-text-21-size);
                letter-spacing: 0.03em;
                display: inline-block;
                flex-shrink: 0;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-mid);
                }
              `}
            >
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
