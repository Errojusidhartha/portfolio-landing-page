import { css } from "@emotion/css";
import PropTypes from "prop-types";

const ServicesInner = ({
  className = "",
  propAlignSelf,
  propPadding,
  propFlex,
  propColor,
  propColor1,
}) => {
  return (
    <div
      className={[
        css`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 0px 0px var(--padding-14xl);
box-sizing: border-box;
gap: var(--gap-5xl);
max-width: 100%;
text-align: center;
font-size: var(--h2-65-size);
color: var(--color-black);
font-family: var(--nav-bar-text-21);
align-self: ${propAlignSelf}
padding: ${propPadding}
flex: ${propFlex}
`,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-4xl) 0px var(--padding-xl);
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
                color: ${propColor};
              `}
            >
              Services
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
              color: ${propColor1};
            `}
          >
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          gap: var(--gap-12xl);
          max-width: 100%;
          text-align: left;
          font-size: var(--font-size-13xl);
          @media screen and (max-width: 925px) {
            gap: var(--gap-mini);
          }
        `}
      >
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-sm);
            background-color: var(--color-whitesmoke-100);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-38xl) var(--padding-lg) var(--padding-3xs);
            box-sizing: border-box;
            gap: var(--gap-7xl);
            min-width: 304px;
            max-width: 100%;
            text-align: center;
          `}
        >
          <div
            className={css`
              width: 330px;
              height: 346px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-whitesmoke-100);
              display: none;
              max-width: 100%;
            `}
          />
          <div
            className={css`
              width: 70px;
              height: 70px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              position: relative;
            `}
          >
            <div
              className={css`
                height: 100%;
                width: 100%;
                position: absolute;
                margin: 0 !important;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  z-index: 1;
                `}
                alt=""
                src="/service-icon-image.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 23.8px;
                  left: 56.3px;
                  width: 2.7px;
                  height: 2.7px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-1.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 20.5px;
                  left: 6.6px;
                  width: 12.3px;
                  height: 9.3px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 20.5px;
                  left: 22.7px;
                  width: 16.9px;
                  height: 2.7px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 27.1px;
                  left: 22.7px;
                  width: 16.9px;
                  height: 2.7px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-4.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 46.8px;
                  left: 30.3px;
                  width: 12.3px;
                  height: 9.3px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-5.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 46.8px;
                  left: 46.5px;
                  width: 16.9px;
                  height: 2.7px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-6.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 53.3px;
                  left: 46.5px;
                  width: 16.9px;
                  height: 2.7px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-7.svg"
              />
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-mini);
            `}
          >
            <h3
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                letter-spacing: 0.03em;
                font-weight: 600;
                font-family: inherit;
                display: inline-block;
                min-width: 96px;
                z-index: 1;
                @media screen and (max-width: 925px) {
                  font-size: var(--font-size-7xl);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >
              UI/UX
            </h3>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-9xs);
                text-align: left;
                font-size: var(--sub-p-19-size);
              `}
            >
              <div
                className={css`
                  height: 120px;
                  flex: 1;
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  z-index: 1;
                `}
              >
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-sm);
            background-color: var(--color-whitesmoke-100);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-35xl) var(--padding-lg) var(--padding-3xs);
            box-sizing: border-box;
            gap: var(--gap-base);
            min-width: 304px;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 330px;
              height: 346px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-whitesmoke-100);
              display: none;
              max-width: 100%;
            `}
          />
          <img
            className={css`
              width: 72px;
              height: 82px;
              position: relative;
              overflow: hidden;
              flex-shrink: 0;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/layer-1.svg"
          />
          <h3
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              letter-spacing: 0.03em;
              font-weight: 600;
              font-family: inherit;
              z-index: 1;
              @media screen and (max-width: 925px) {
                font-size: var(--font-size-7xl);
              }
              @media screen and (max-width: 450px) {
                font-size: var(--sub-p-19-size);
              }
            `}
          >{`Web Design `}</h3>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px 0px 0px var(--padding-9xs);
              font-size: var(--sub-p-19-size);
            `}
          >
            <div
              className={css`
                height: 120px;
                flex: 1;
                position: relative;
                letter-spacing: 0.03em;
                display: inline-block;
                z-index: 1;
              `}
            >
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-sm);
            background-color: var(--color-whitesmoke-100);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-32xl) var(--padding-lg) var(--padding-3xs);
            box-sizing: border-box;
            gap: var(--gap-lgi-5);
            min-width: 304px;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 330px;
              height: 346px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-whitesmoke-100);
              display: none;
              max-width: 100%;
            `}
          />
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-9xs);
            `}
          >
            <img
              className={css`
                height: 82.5px;
                width: 47px;
                position: relative;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/group-18.svg"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-mini);
            `}
          >
            <h3
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                letter-spacing: 0.03em;
                font-weight: 600;
                font-family: inherit;
                z-index: 1;
                @media screen and (max-width: 925px) {
                  font-size: var(--font-size-7xl);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >
              App Design
            </h3>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-9xs);
                font-size: var(--sub-p-19-size);
              `}
            >
              <div
                className={css`
                  height: 120px;
                  flex: 1;
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  z-index: 1;
                `}
              >
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-sm);
            background-color: var(--color-whitesmoke-100);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-38xl) var(--padding-lg) var(--padding-3xs);
            box-sizing: border-box;
            gap: var(--gap-7xl);
            min-width: 304px;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 330px;
              height: 346px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-whitesmoke-100);
              display: none;
              max-width: 100%;
            `}
          />
          <div
            className={css`
              width: 82px;
              height: 70px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              position: relative;
            `}
          >
            <div
              className={css`
                height: 100%;
                width: 100%;
                position: absolute;
                margin: 0 !important;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  z-index: 1;
                `}
                alt=""
                src="/vector-8.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 6.8px;
                  left: 19.6px;
                  width: 9.7px;
                  height: 10.2px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-9.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 6.8px;
                  left: 6.6px;
                  width: 9.7px;
                  height: 10.2px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-10.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 6.8px;
                  left: 32.7px;
                  width: 9.7px;
                  height: 10.2px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-11.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 36.3px;
                  left: 39.4px;
                  width: 3.2px;
                  height: 3.4px;
                  z-index: 2;
                `}
                alt=""
                src="/vector-12.svg"
              />
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-mini);
            `}
          >
            <h3
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                letter-spacing: 0.03em;
                font-weight: 600;
                font-family: inherit;
                z-index: 1;
                @media screen and (max-width: 925px) {
                  font-size: var(--font-size-7xl);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >{`Graphic Design `}</h3>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-9xs);
                font-size: var(--sub-p-19-size);
              `}
            >
              <div
                className={css`
                  height: 120px;
                  flex: 1;
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  z-index: 1;
                `}
              >
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesInner.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
};

export default ServicesInner;
