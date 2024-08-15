import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Btn = ({ className = "", onBtnContainerClick }) => {
  return (
    <div
      className={[
        css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mid) var(--padding-34xl) var(--padding-10xs);
          position: relative;
          white-space: nowrap;
          text-align: justify;
          font-size: var(--nav-bar-text-21-size);
          color: var(--color-white);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
      onClick={onBtnContainerClick}
    >
      <div
        className={css`
          height: 100%;
          width: 100%;
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 1px;
          bottom: 0px;
          left: 0px;
          border-radius: var(--br-8xs);
          background-color: var(--color-darkorange-100);
        `}
      />
      <div
        className={css`
          position: relative;
          letter-spacing: 0.03em;
          display: inline-block;
          min-width: 83px;
          z-index: 1;
        `}
      >{`Hire Me `}</div>
    </div>
  );
};

Btn.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onBtnContainerClick: PropTypes.func,
};

export default Btn;
