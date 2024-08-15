import { css } from "@emotion/css";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) var(--padding-29xl);
          box-sizing: border-box;
          max-width: 100%;
          flex-shrink: 0;
          text-align: left;
          font-size: var(--font-size-29xl);
          color: var(--bg-gray);
          font-family: var(--font-montserrat);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-21xl);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-xl);
          }
        `}
      >
        <div
          className={css`
            width: 375px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-79xl) 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-xl);
            max-width: 100%;
            @media screen and (max-width: 450px) {
              padding-right: var(--padding-xl);
              box-sizing: border-box;
            }
          `}
        >
          <img
            className={css`
              height: 67px;
              width: 67px;
              position: relative;
            `}
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-9xs) 0px 0px;
            `}
          >
            <a
              className={css`
                text-decoration: none;
                align-self: stretch;
                height: 59px;
                position: relative;
                display: inline-block;
                white-space: nowrap;
                color: inherit;
              `}
            >
              <b className={css``}>M</b>
              <span
                className={css`
                  color: var(--color-dimgray);
                `}
              >{`umair `}</span>
            </a>
          </div>
        </div>
        <nav
          className={css`
            margin: 0;
            width: 469px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-mid) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
            @media screen and (max-width: 1350px) {
              display: none;
            }
          `}
        >
          <nav
            className={css`
              margin: 0;
              align-self: stretch;
              height: 32px;
              position: relative;
              text-align: left;
              font-size: var(--nav-bar-text-21-size);
              color: var(--color-black);
              font-family: var(--nav-bar-text-21);
            `}
          >
            <a
              className={css`
                text-decoration: none;
                position: absolute;
                top: 0px;
                left: 0px;
                letter-spacing: 0.03em;
                color: inherit;
                display: inline-block;
                min-width: 66px;
              `}
            >
              Home
            </a>
            <a
              className={css`
                text-decoration: none;
                position: absolute;
                top: 0px;
                left: 105px;
                letter-spacing: 0.03em;
                color: inherit;
                display: inline-block;
                min-width: 105px;
                white-space: nowrap;
              `}
            >
              About Me
            </a>
            <a
              className={css`
                text-decoration: none;
                position: absolute;
                top: 0px;
                left: 249px;
                letter-spacing: 0.03em;
                color: inherit;
                display: inline-block;
                min-width: 92px;
              `}
            >
              Services
            </a>
            <a
              className={css`
                text-decoration: none;
                position: absolute;
                top: 0px;
                left: 381px;
                letter-spacing: 0.03em;
                color: inherit;
                display: inline-block;
                min-width: 89px;
              `}
            >
              Projects
            </a>
          </nav>
        </nav>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-6xs) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
            font-size: var(--nav-bar-text-21-size);
            color: var(--color-black);
            font-family: var(--nav-bar-text-21);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-20xl);
              @media screen and (max-width: 925px) {
                gap: var(--gap-lgi);
              }
              @media screen and (max-width: 450px) {
                display: none;
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-3xs) 0px 0px;
              `}
            >
              <a
                className={css`
                  text-decoration: none;
                  position: relative;
                  letter-spacing: 0.03em;
                  color: inherit;
                `}
              >
                Testimonials
              </a>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-3xs) 0px 0px;
              `}
            >
              <a
                className={css`
                  text-decoration: none;
                  position: relative;
                  letter-spacing: 0.03em;
                  color: inherit;
                  display: inline-block;
                  min-width: 90px;
                `}
              >
                Contact
              </a>
            </div>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: var(--padding-mid) var(--padding-lg) var(--padding-lg);
                background-color: var(--color-darkorange-100);
                border-radius: var(--br-8xs);
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                white-space: nowrap;
                &:hover {
                  background-color: var(--color-orangered);
                }
              `}
            >
              <div
                className={css`
                  height: 52px;
                  width: 188px;
                  position: relative;
                  border-radius: var(--br-8xs);
                  background-color: var(--color-darkorange-100);
                  display: none;
                `}
              />
              <a
                className={css`
                  text-decoration: none;
                  height: 17px;
                  position: relative;
                  font-size: var(--nav-bar-text-21-size);
                  letter-spacing: 0.03em;
                  font-family: var(--nav-bar-text-21);
                  color: var(--color-white);
                  text-align: justify;
                  display: inline-block;
                  z-index: 1;
                `}
              >
                Downlaod CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
