import { css } from "@emotion/css";
import PropTypes from "prop-types";

const ProjectTypes = ({
  className = "",
  webDesigns,
  webDesigns1,
  propColor,
}) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-18xl);
          min-width: 334px;
          max-width: 100%;
          text-align: left;
          font-size: var(--sub-p-19-size);
          color: var(--color-darkorange-100);
          font-family: var(--nav-bar-text-21);
          @media screen and (max-width: 450px) {
            gap: var(--gap-lg);
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          border-radius: var(--br-xs);
          background-color: var(--color-antiquewhite);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-8xl) 0px var(--padding-20xl);
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            width: 445px;
            position: relative;
            border-radius: var(--br-xs);
            background-color: var(--color-antiquewhite);
            display: none;
            max-width: 100%;
          `}
        />
        <div
          className={css`
            height: 489px;
            flex: 1;
            position: relative;
            max-width: 100%;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              bottom: 0px;
              left: 105px;
              max-height: 100%;
              width: 274px;
              object-fit: cover;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src={webDesigns}
          />
          <img
            className={css`
              position: absolute;
              top: 84px;
              left: 0px;
              width: 274px;
              height: 405px;
              object-fit: cover;
              z-index: 2;
            `}
            alt=""
            src={webDesigns1}
          />
        </div>
        <div
          className={css`
            height: 533px;
            width: 445px;
            position: relative;
            border-radius: var(--br-xs);
            background: linear-gradient(
              179.83deg,
              rgba(255, 235, 219, 0),
              #ffebdb,
              #545454
            );
            display: none;
            max-width: 100%;
          `}
        />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-3xs);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.03em;
            display: inline-block;
            min-width: 119px;
          `}
        >{`Web Design `}</div>
        <b
          className={css`
            position: relative;
            font-size: var(--small-heading-24-size);
            letter-spacing: 0.03em;
            color: var(--color-black);
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
            color: ${propColor};
          `}
        >{`AirCalling Landing Page Design `}</b>
      </div>
    </div>
  );
};

ProjectTypes.propTypes = {
  className: PropTypes.string,
  webDesigns: PropTypes.string,
  webDesigns1: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default ProjectTypes;
