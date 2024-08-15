import { css } from "@emotion/css";
import PropTypes from "prop-types";

const DesignCategories1 = ({
  className = "",
  websiteDesign,
  propColor,
  propWidth,
  propRight,
}) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-3xs);
          gap: var(--gap-mid);
          text-align: left;
          font-size: var(--small-heading-24-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          position: relative;
          letter-spacing: 0.03em;
          font-weight: 600;
          @media screen and (max-width: 450px) {
            font-size: var(--sub-p-19-size);
          }
          color: ${propColor};
        `}
      >
        {websiteDesign}
      </div>
      <div
        className={css`
          align-self: stretch;
          height: 12px;
          position: relative;
          border-radius: var(--br-7xs);
          background-color: var(--color-whitesmoke-200);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-7xs);
            background-color: var(--color-whitesmoke-200);
            width: 100%;
            height: 100%;
            display: none;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-7xs);
            background-color: var(--color-darkorange-100);
            width: 657px;
            height: 12px;
            z-index: 1;
            width: ${propWidth};
          `}
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 16px);
            right: 84px;
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            background-color: var(--color-whitesmoke-200);
            border: 0px solid var(--color-darkorange-100);
            box-sizing: border-box;
            width: 32px;
            height: 32px;
            z-index: 2;
            right: ${propRight};
          `}
        />
      </div>
    </div>
  );
};

DesignCategories1.propTypes = {
  className: PropTypes.string,
  websiteDesign: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default DesignCategories1;
