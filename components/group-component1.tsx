import { css } from "@emotion/css";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", ellipse11 }) => {
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
          position: relative;
          gap: var(--gap-2xs);
          flex-shrink: 0;
          max-width: 100%;
          text-align: justify;
          font-size: var(--small-heading-24-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
          @media screen and (max-width: 925px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 450px) {
            padding-left: var(--padding-xl);
            padding-right: var(--padding-xl);
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
          z-index: 0;
        `}
      />
      <img
        className={css`
          height: 235px;
          width: 235px;
          position: relative;
          border-radius: 50%;
          object-fit: cover;
          min-height: 235px;
          z-index: 1;
          @media screen and (max-width: 925px) {
            flex: 1;
          }
        `}
        loading="lazy"
        alt=""
        src={ellipse11}
      />
      <div
        className={css`
          position: absolute;
          margin: 0 !important;
          bottom: 81px;
          left: 312px;
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
          width: 85px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          min-width: 85px;
          font-size: var(--font-size-13xl);
          color: var(--color-darkorange-100);
          @media screen and (max-width: 925px) {
            flex: 1;
          }
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
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-6xl) 0px 0px;
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
              gap: var(--gap-9xl);
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px 0px;
              `}
            >
              <div
                className={css`
                  width: 698px;
                  height: 146px;
                  position: relative;
                  letter-spacing: 0.02em;
                  display: inline-block;
                  flex-shrink: 0;
                  max-width: 1042%;
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
                  align-self: stretch;
                  height: 48px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 0px 0px var(--padding-431xl);
                  box-sizing: border-box;
                  margin-top: -40px;
                  font-size: var(--font-size-13xl);
                  color: var(--color-darkorange-100);
                  @media screen and (max-width: 925px) {
                    padding-left: var(--padding-206xl);
                    box-sizing: border-box;
                  }
                `}
              >
                <h3
                  className={css`
                    margin: 0;
                    align-self: stretch;
                    width: 18px;
                    position: relative;
                    font-size: inherit;
                    letter-spacing: 0.02em;
                    font-weight: 700;
                    font-family: inherit;
                    display: inline-block;
                    flex-shrink: 0;
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
                position: relative;
                font-size: var(--sub-p-19-size);
                letter-spacing: 0.02em;
                color: var(--color-black);
                display: inline-block;
                min-width: 41px;
                z-index: 1;
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

GroupComponent1.propTypes = {
  className: PropTypes.string,
  ellipse11: PropTypes.string,
};

export default GroupComponent1;
