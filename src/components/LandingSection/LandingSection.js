import React from 'react';
import styles from './LandingSection.module.scss';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const New = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div>
      <div>
        <div className={styles.landingcontainer}>
          <div className={styles.laptop}>
            <img
              className={styles.backgroundShapeIcon}
              alt=""
              src="../assests/background-shape@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon1}
              alt=""
              src="../assests/background-shape1@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon2}
              alt=""
              src="../assests/background-shape2@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon3}
              alt=""
              src="../assests/background-shape3@2x.png"
              data-animate-on-scroll
            />
          </div>

          <div className={styles.mobile}>
            <img
              className={styles.backgroundShapeIcon4}
              alt=""
              src="../assests/background-shape4@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon5}
              alt=""
              src="../assests/background-shape5@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon6}
              alt=""
              src="../assests/background-shape6@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon7}
              alt=""
              src="../assests/background-shape7@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className={styles.hero}>
            <div className={styles.bg}> </div>
            <div className={styles.textdiv}>
              <b className={styles.landingPageTemplate}>Explore Your World ! </b>

              <div className={styles.paragraphDiv}>
                <div className={styles.velitOdioBibendumEuViver}>
                  We are dedicated to bringing you the latest in tech news, tips and tricks, gadgets and reviews by
                  experience users. We&#39;re all about the journey, so join us as we explore the tech industry as
                  it&#39;s evolving.
                </div>
              </div>
              <button className={styles.letsSellB}>Lets Explore</button>
            </div>
          </div>
        </div>

        <div className={styles.logosLineDiv}>
          <img className={styles.logoipsum28} alt="" src="../assests/logoipsum--28.svg" />
          <img className={styles.logoipsum28} alt="" src="../assests/logoipsum--01.svg" />

          <img className={styles.logoipsum28} alt="" src="../assests/logoipsum--04.svg" />

          <img className={styles.logoIcon1} alt="" src="../assests/logoipsum--01.svg" />
          <img className={styles.logoipsum28} alt="" src="../assests/logoipsum--27.svg" />

          <img className={styles.logoipsum28} alt="" src="../assests/logoipsum--02.svg" />
        </div>
      </div>
    </div>
  );
};

export default New;
