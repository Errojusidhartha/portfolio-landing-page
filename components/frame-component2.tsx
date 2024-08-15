import { css } from "@emotion/css";
import Btn from "./btn";
import DesignCategories from "./design-categories";
import DesignCategories1 from "./design-categories1";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={[
        css`
          width: 1870px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) var(--padding-48xl);
          box-sizing: border-box;
          max-width: 100%;
          flex-shrink: 0;
          text-align: left;
          font-size: var(--small-heading-24-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
          @media screen and (max-width: 1350px) {
            padding-bottom: var(--padding-25xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 925px) {
            padding-bottom: var(--padding-10xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 1470px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-50xl-5);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-16xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-mid);
          }
        `}
      >
        <div
          className={css`
            width: 1440px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-129xl);
              max-width: 100%;
              @media screen and (max-width: 1350px) {
                flex-wrap: wrap;
                gap: var(--gap-55xl);
              }
              @media screen and (max-width: 925px) {
                gap: var(--gap-18xl);
              }
              @media screen and (max-width: 450px) {
                gap: var(--gap-lg);
              }
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-75xl);
                box-sizing: border-box;
                min-width: 464px;
                min-height: 590px;
                max-width: 100%;
                @media screen and (max-width: 925px) {
                  padding-bottom: var(--padding-42xl);
                  box-sizing: border-box;
                  min-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-94xl-8);
                  max-width: 100%;
                  @media screen and (max-width: 925px) {
                    gap: var(--gap-38xl);
                  }
                  @media screen and (max-width: 450px) {
                    gap: var(--gap-9xl);
                  }
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-46xl-1);
                    max-width: 100%;
                    @media screen and (max-width: 450px) {
                      gap: var(--gap-14xl);
                    }
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px var(--padding-9xs);
                      box-sizing: border-box;
                      max-width: 100%;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: var(--gap-5xs-9);
                        max-width: 100%;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          padding: 0px var(--padding-10xs);
                        `}
                      >
                        <div
                          className={css`
                            position: relative;
                            letter-spacing: 0.03em;
                            font-weight: 600;
                            display: inline-block;
                            min-width: 89px;
                            @media screen and (max-width: 450px) {
                              font-size: var(--sub-p-19-size);
                            }
                          `}
                        >{`Hi I am `}</div>
                      </div>
                      <h3
                        className={css`
                          margin: 0;
                          height: 41px;
                          position: relative;
                          font-size: var(--font-size-13xl);
                          letter-spacing: 0.03em;
                          font-weight: 600;
                          font-family: inherit;
                          color: var(--color-darkorange-100);
                          display: inline-block;
                          @media screen and (max-width: 925px) {
                            font-size: var(--font-size-7xl);
                          }
                          @media screen and (max-width: 450px) {
                            font-size: var(--sub-p-19-size);
                          }
                        `}
                      >{`Muhammad Umair `}</h3>
                    </div>
                  </div>
                  <h1
                    className={css`
                      margin: 0;
                      width: 386px;
                      height: -27px;
                      position: relative;
                      font-size: var(--main-heading-h1-size);
                      letter-spacing: 0.03em;
                      line-height: 120%;
                      font-weight: 700;
                      font-family: inherit;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 925px) {
                        font-size: var(--font-size-31xl);
                        line-height: 72px;
                      }
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-11xl);
                        line-height: 48px;
                      }
                    `}
                  >{`UI & UX`}</h1>
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px var(--padding-6xs);
                    box-sizing: border-box;
                    max-width: 100%;
                    font-size: var(--main-heading-h1-size);
                  `}
                >
                  <div
                    className={css`
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: var(--gap-8xl);
                      max-width: 100%;
                    `}
                  >
                    <div
                      className={css`
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: var(--gap-56xl-5);
                        max-width: 100%;
                        @media screen and (max-width: 925px) {
                          gap: var(--gap-19xl);
                        }
                        @media screen and (max-width: 450px) {
                          gap: var(--gap-lgi);
                        }
                      `}
                    >
                      <div
                        className={css`
                          align-self: stretch;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-end;
                          max-width: 100%;
                        `}
                      >
                        <h1
                          className={css`
                            margin: 0;
                            width: 484px;
                            position: relative;
                            font-size: inherit;
                            letter-spacing: 0.03em;
                            line-height: 7.6px;
                            font-weight: 700;
                            font-family: inherit;
                            display: inline-block;
                            max-width: 100%;
                            z-index: 2;
                            @media screen and (max-width: 925px) {
                              font-size: var(--font-size-31xl);
                              line-height: 72px;
                            }
                            @media screen and (max-width: 450px) {
                              font-size: var(--font-size-11xl);
                              line-height: 48px;
                            }
                          `}
                        >{`Designer `}</h1>
                      </div>
                      <div
                        className={css`
                          align-self: stretch;
                          position: relative;
                          font-size: var(--nav-bar-text-21-size);
                          letter-spacing: 0.03em;
                          text-align: justify;
                          @media screen and (max-width: 450px) {
                            font-size: var(--font-size-mid);
                          }
                        `}
                      >
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 538px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-17xl-8);
                min-width: 538px;
                max-width: 100%;
                @media screen and (max-width: 1350px) {
                  flex: 1;
                }
                @media screen and (max-width: 925px) {
                  gap: var(--gap-lg);
                  min-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  height: 617.2px;
                  position: relative;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  `}
                  loading="lazy"
                  alt=""
                  src="/group-21@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: 78px;
                    left: 82px;
                    background-color: var(--color-darkorange-200);
                    width: 374px;
                    height: 83px;
                    z-index: 1;
                  `}
                />
              </div>
              <div
                className={css`
                  width: 517px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: center;
                  padding: 0px var(--padding-xl);
                  box-sizing: border-box;
                  max-width: 100%;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-6xl);
                  `}
                >
                  <img
                    className={css`
                      height: 32.5px;
                      width: 32.5px;
                      position: relative;
                      overflow: hidden;
                      flex-shrink: 0;
                      min-height: 33px;
                    `}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative1.svg"
                  />
                  <img
                    className={css`
                      height: 32.5px;
                      width: 32.5px;
                      position: relative;
                      overflow: hidden;
                      flex-shrink: 0;
                      min-height: 33px;
                    `}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative1.svg"
                  />
                  <img
                    className={css`
                      height: 32.5px;
                      width: 32.5px;
                      position: relative;
                      overflow: hidden;
                      flex-shrink: 0;
                      min-height: 33px;
                    `}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative1.svg"
                  />
                  <img
                    className={css`
                      height: 32.5px;
                      width: 32.5px;
                      position: relative;
                      overflow: hidden;
                      flex-shrink: 0;
                      min-height: 33px;
                    `}
                    loading="lazy"
                    alt=""
                    src="/linkedin--negative1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            gap: var(--gap-14xl);
            max-width: 100%;
            font-size: var(--h2-65-size);
            @media screen and (max-width: 1350px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 925px) {
              gap: var(--gap-base);
            }
          `}
        >
          <div
            className={css`
              height: 675px;
              width: 681px;
              position: relative;
              min-width: 681px;
              max-width: 100%;
              @media screen and (max-width: 1350px) {
                flex: 1;
              }
              @media screen and (max-width: 925px) {
                min-width: 100%;
              }
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
              loading="lazy"
              alt=""
              src="/group-7@2x.png"
            />
            <div
              className={css`
                position: absolute;
                top: 111px;
                left: 153px;
                background-color: var(--color-darkorange-200);
                width: 374px;
                height: 83px;
                z-index: 1;
              `}
            />
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px 0px var(--padding-23xl);
              box-sizing: border-box;
              min-width: 491px;
              min-height: 620px;
              max-width: 100%;
              @media screen and (max-width: 925px) {
                padding-bottom: var(--padding-8xl);
                box-sizing: border-box;
                min-width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-mini);
                max-width: 100%;
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: inherit;
                  display: inline-block;
                  max-width: 100%;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-33xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-20xl);
                  }
                `}
              >{`About Me `}</h1>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-mini);
                  max-width: 100%;
                  font-size: var(--small-heading-24-size);
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px var(--padding-8xs);
                    box-sizing: border-box;
                    max-width: 100%;
                    font-size: var(--nav-bar-text-21-size);
                  `}
                >
                  <div
                    className={css`
                      flex: 1;
                      position: relative;
                      letter-spacing: 0.03em;
                      display: inline-block;
                      max-width: 100%;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-mid);
                      }
                    `}
                  >
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                </div>
                <DesignCategories uX="UX" />
                <DesignCategories1 websiteDesign="Website Design" />
                <DesignCategories1
                  websiteDesign="App Design "
                  propColor="#000"
                  propWidth="721px"
                  propRight="20px"
                />
                <DesignCategories
                  uX="Graphic Design "
                  propColor="#000"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
