import { css } from "@emotion/css";
import PropTypes from "prop-types";

const DesignCategories = ({
  className = "",
  uX,
  propColor,
  propDisplay,
  propMinWidth,
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
          gap: var(--gap-6xs);
          max-width: 100%;
          text-align: left;
          font-size: var(--small-heading-24-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`position: relative;
letter-spacing: 0.03em;
font-weight: 600;
display: inline-block;
min-width: 35px;
@media screen and (max-width: 450px) {
font-size: var(--sub-p-19-size);

}
color: ${propColor}
display: ${propDisplay}
min-width: ${propMinWidth}
`}
      >
        {uX}
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            height: 32px;
            flex: 1;
            position: relative;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 10px;
              left: 0px;
              border-radius: var(--br-7xs);
              background-color: var(--color-whitesmoke-200);
              width: 753px;
              height: 12px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 10px;
              left: 0px;
              border-radius: var(--br-7xs);
              background-color: var(--color-darkorange-100);
              width: 687px;
              height: 12px;
              z-index: 1;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 669px;
              box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
              border-radius: 50%;
              background-color: var(--color-whitesmoke-200);
              border: 0px solid var(--color-darkorange-100);
              box-sizing: border-box;
              width: 32px;
              height: 32px;
              z-index: 2;
            `}
          />
        </div>
      </div>
    </div>
  );
};

DesignCategories.propTypes = {
  className: PropTypes.string,
  uX: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default DesignCategories;
