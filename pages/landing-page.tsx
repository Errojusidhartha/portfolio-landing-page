import FrameComponent1 from "../components/frame-component1";
import { css } from "@emotion/css";
import FrameComponent2 from "../components/frame-component2";
import Content from "../components/content";
import Reviewer from "../components/reviewer";
import Inputs from "../components/inputs";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 5600px;
        position: relative;
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-42xl) 0px var(--padding-672xl);
        box-sizing: border-box;
        gap: var(--gap-53xl);
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        font-size: var(--small-heading-24-size);
        color: var(--color-black);
        font-family: var(--nav-bar-text-21);
        @media screen and (max-width: 1350px) {
          height: auto;
          gap: var(--gap-17xl);
        }
        @media screen and (max-width: 925px) {
          gap: var(--gap-lg);
        }
      `}
    >
      <FrameComponent1 />
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-4xs) var(--padding-lgi);
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.03em;
            display: inline-block;
            min-width: 69px;
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
          `}
        >
          UI/UX
        </div>
      </div>
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-4xs) var(--padding-lgi);
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.03em;
            display: inline-block;
            min-width: 69px;
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
          `}
        >
          UI/UX
        </div>
      </div>
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-4xs) var(--padding-lgi);
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.03em;
            display: inline-block;
            min-width: 69px;
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
          `}
        >
          UI/UX
        </div>
      </div>
      <FrameComponent2 />
      <Content />
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0px 0px 619px;
          box-sizing: border-box;
          gap: var(--gap-68xl);
          max-width: 100%;
          flex-shrink: 0;
          @media screen and (max-width: 1350px) {
            gap: var(--gap-24xl);
            padding-bottom: 402px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 925px) {
            gap: var(--gap-3xl);
            padding-bottom: 261px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 450px) {
            padding-bottom: 170px;
            box-sizing: border-box;
          }
        `}
      >
        <Reviewer />
        <Inputs />
      </section>
      <Footer
        facebookNegative="/facebook--negative1.svg"
        twitterNegative="/twitter--negative1.svg"
        instagramNegative="/instagram--negative1.svg"
        linkedInNegative="/linkedin--negative1.svg"
      />
    </div>
  );
};

export default LandingPage;
