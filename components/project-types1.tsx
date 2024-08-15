import { css } from "@emotion/css";
import PropTypes from "prop-types";

const ProjectTypes1 = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
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
          padding: 0px var(--padding-9xl) 0px var(--padding-20xl);
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
              width: 273px;
              object-fit: cover;
              z-index: 1;
            `}
            alt=""
            src={webDesigns}
          />
          <img
            className={css`
              position: absolute;
              top: 77px;
              left: 0px;
              width: 273px;
              height: 412px;
              object-fit: cover;
              z-index: 2;
            `}
            alt=""
            src={webDesigns1}
          />
        </div>
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
            color: var(--bg-gray);
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
            color: ${propColor};
          `}
        >
          {businessLandingPageDesign}
        </b>
      </div>
    </div>
  );
};

ProjectTypes1.propTypes = {
  className: PropTypes.string,
  webDesigns: PropTypes.string,
  webDesigns1: PropTypes.string,
  businessLandingPageDesign: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default ProjectTypes1;
