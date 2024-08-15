import { css } from "@emotion/css";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", propColor, propColor1 }) => {
  return (
    <div
      className={[
        css`
          width: 1404px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl);
          box-sizing: border-box;
          max-width: 100%;
          text-align: left;
          font-size: var(--h2-65-size);
          color: var(--bg-gray);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 936px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-54xl);
          max-width: 100%;
          @media screen and (max-width: 1350px) {
            gap: var(--gap-17xl);
          }
          @media screen and (max-width: 925px) {
            gap: var(--gap-lg);
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px 0px var(--padding-mini);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-3xl);
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
                padding: 0px var(--padding-2xl) 0px var(--padding-xl);
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  height: 98px;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: inherit;
                  display: inline-block;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-33xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-20xl);
                  }
                  color: ${propColor};
                `}
              >
                My Projects
              </h1>
            </div>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--nav-bar-text-21-size);
                letter-spacing: 0.03em;
                color: var(--color-black);
                text-align: center;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-mid);
                }
                color: ${propColor1};
              `}
            >
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: var(--gap-mid);
            max-width: 100%;
            text-align: center;
            font-size: var(--small-heading-24-size);
            color: var(--color-black);
            @media screen and (max-width: 925px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-8xs) 0px 0px;
            `}
          >
            <div
              className={css`
                border-radius: var(--br-xs);
                background-color: var(--color-whitesmoke-100);
                border: 0.4px solid var(--color-dimgray);
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-4xs) var(--padding-lgi);
              `}
            >
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 31px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--sub-p-19-size);
                  }
                `}
              >
                All
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-xs);
              background-color: var(--color-whitesmoke-100);
              border: 0.4px solid var(--color-dimgray);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-4xs) var(--padding-lgi);
              z-index: 3;
            `}
          >
            <div
              className={css`
                position: relative;
                letter-spacing: 0.03em;
                display: inline-block;
                min-width: 69px;
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >
              UI/UX
            </div>
          </div>
          <button
            className={css`
              cursor: pointer;
              border: 0.4px solid var(--color-dimgray);
              padding: var(--padding-4xs) var(--padding-xl);
              background-color: var(--color-darkorange-100);
              border-radius: var(--br-xs);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              white-space: nowrap;
              &:hover {
                background-color: var(--color-orangered);
                border: 0.4px solid var(--color-gray-100);
                box-sizing: border-box;
              }
            `}
          >
            <div
              className={css`
                position: relative;
                font-size: var(--small-heading-24-size);
                letter-spacing: 0.03em;
                font-family: var(--nav-bar-text-21);
                color: var(--color-white);
                text-align: center;
              `}
            >
              Web Design
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 0.4px solid var(--color-dimgray);
              padding: var(--padding-4xs) var(--padding-lgi);
              background-color: var(--color-whitesmoke-100);
              border-radius: var(--br-xs);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              white-space: nowrap;
              &:hover {
                background-color: var(--color-gainsboro-100);
                border: 0.4px solid var(--color-gray-100);
                box-sizing: border-box;
              }
            `}
          >
            <div
              className={css`
                height: 36px;
                position: relative;
                font-size: var(--small-heading-24-size);
                letter-spacing: 0.03em;
                font-family: var(--nav-bar-text-21);
                color: var(--color-black);
                text-align: center;
                display: inline-block;
              `}
            >
              App Design
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 0.4px solid var(--color-dimgray);
              padding: var(--padding-4xs) var(--padding-lgi);
              background-color: var(--color-whitesmoke-100);
              border-radius: var(--br-xs);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              white-space: nowrap;
              &:hover {
                background-color: var(--color-gainsboro-100);
                border: 0.4px solid var(--color-gray-100);
                box-sizing: border-box;
              }
            `}
          >
            <div
              className={css`
                height: 36px;
                position: relative;
                font-size: var(--small-heading-24-size);
                letter-spacing: 0.03em;
                font-family: var(--nav-bar-text-21);
                color: var(--color-black);
                text-align: center;
                display: inline-block;
              `}
            >
              Graphic Design
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
};

export default FrameComponent;
