import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Stars = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-10xl);
          box-sizing: border-box;
          max-width: 100%;
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-6xl);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-sm);
            background-color: var(--color-whitesmoke-100);
            border: 1px solid var(--color-darkgray);
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-xl) var(--padding-7xl) var(--padding-lgi);
            min-width: 178px;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              height: 75px;
              width: 627px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-whitesmoke-100);
              border: 1px solid var(--color-darkgray);
              box-sizing: border-box;
              display: none;
              max-width: 100%;
            `}
          />
          <input
            className={css`
              width: 178px;
              border: none;
              outline: none;
              font-family: var(--nav-bar-text-21);
              font-size: var(--nav-bar-text-21-size);
              background-color: transparent;
              height: 32px;
              position: relative;
              letter-spacing: 0.03em;
              color: var(--color-gray-200);
              text-align: center;
              display: inline-block;
              padding: 0;
              z-index: 1;
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-mid);
              }
            `}
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-xl) var(--padding-17xl) var(--padding-lgi);
            background-color: var(--color-darkorange-100);
            border-radius: var(--br-sm);
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
              height: 75px;
              width: 222px;
              position: relative;
              border-radius: var(--br-sm);
              background-color: var(--color-darkorange-100);
              display: none;
            `}
          />
          <div
            className={css`
              position: relative;
              font-size: var(--small-heading-24-size);
              letter-spacing: 0.03em;
              font-weight: 600;
              font-family: var(--nav-bar-text-21);
              color: var(--color-white);
              text-align: center;
              z-index: 1;
            `}
          >{`Contact Me `}</div>
        </button>
      </div>
    </div>
  );
};

Stars.propTypes = {
  className: PropTypes.string,
};

export default Stars;
