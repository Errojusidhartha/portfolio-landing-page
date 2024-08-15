import { css } from "@emotion/css";
import Stars from "./stars";
import PropTypes from "prop-types";

const Inputs = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          width: 1838px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl);
          box-sizing: border-box;
          max-width: 100%;
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
          width: 932px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-29xl);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-5xl);
          }
        `}
      >
        <div
          className={css`
            width: 849px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) var(--padding-72xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 255px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-4xs);
            `}
          >
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-darkorange-100);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
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
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-3xl) 0px var(--padding-xl);
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
              `}
            >
              Lets Design Together
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
        <Stars />
      </div>
    </div>
  );
};

Inputs.propTypes = {
  className: PropTypes.string,
};

export default Inputs;
