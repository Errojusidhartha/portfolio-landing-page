import { css } from "@emotion/css";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "", profileImages }) => {
  return (
    <div
      className={[
        css`
          width: 1087px;
          border-radius: var(--br-sm);
          background-color: var(--color-whitesmoke-100);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-36xl) var(--padding-29xl) var(--padding-34xl);
          box-sizing: border-box;
          flex-shrink: 0;
          row-gap: 20px;
          max-width: 100%;
          text-align: justify;
          font-size: var(--font-size-13xl);
          color: var(--color-darkorange-100);
          font-family: var(--nav-bar-text-21);
          @media screen and (max-width: 1825px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 1350px) {
            padding-left: var(--padding-5xl);
            padding-right: var(--padding-5xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          height: 344px;
          width: 1087px;
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
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-2xs) 0px 0px;
        `}
      >
        <img
          className={css`
            width: 235px;
            height: 235px;
            position: relative;
            border-radius: 50%;
            object-fit: cover;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src={profileImages}
        />
      </div>
      <h3
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          letter-spacing: 0.02em;
          font-weight: 700;
          font-family: inherit;
          display: inline-block;
          min-width: 18px;
          z-index: 1;
          @media screen and (max-width: 925px) {
            font-size: var(--font-size-7xl);
          }
          @media screen and (max-width: 450px) {
            font-size: var(--sub-p-19-size);
          }
        `}
      >
        “
      </h3>
      <div
        className={css`
          width: 698px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-6xl) 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
          font-size: var(--nav-bar-text-21-size);
          color: var(--color-darkslategray);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              max-width: 100%;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                height: 146px;
                position: relative;
                letter-spacing: 0.02em;
                display: inline-block;
                flex-shrink: 0;
                z-index: 1;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-mid);
                }
              `}
            >
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio
              accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices.
            </div>
            <div
              className={css`
                width: 478px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-xl);
                box-sizing: border-box;
                max-width: 100%;
                margin-top: -40px;
                font-size: var(--font-size-13xl);
                color: var(--color-darkorange-100);
              `}
            >
              <h3
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.02em;
                  font-weight: 700;
                  font-family: inherit;
                  display: inline-block;
                  min-width: 18px;
                  z-index: 2;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-7xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--sub-p-19-size);
                  }
                `}
              >
                “
              </h3>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              margin-top: -8px;
              font-size: var(--small-heading-24-size);
              color: var(--color-black);
            `}
          >
            <div
              className={css`
                position: relative;
                letter-spacing: 0.02em;
                font-weight: 500;
                display: inline-block;
                min-width: 76px;
                z-index: 1;
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >
              Name
            </div>
            <div
              className={css`
                position: relative;
                font-size: var(--sub-p-19-size);
                letter-spacing: 0.02em;
                display: inline-block;
                min-width: 41px;
                z-index: 1;
                margin-top: -1px;
              `}
            >
              CEO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  profileImages: PropTypes.string,
};

export default GroupComponent;
