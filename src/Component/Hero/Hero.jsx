import React, { useState } from 'react';
import { miniTab, formTab } from '../data';
import { Icon } from '@iconify/react';
import './Hero.scss';
const Hero = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <section className="presentation">
      <div className="presentation_text">
        <div className="presentation_text-block">
          <h1>
            Find your best
            <br /> smart real estate
          </h1>
          <p>
            We provide a complete service for a sale.
            <br /> Purchase or rental of real state
          </p>
        </div>

        <div className="presentation_text-nav">
          <ul className="presentation_text-nav_tab">
            {miniTab.map((tab, index) => {
              return <li key={index}> {tab}</li>;
            })}
          </ul>
          <div className="presentation_text-nav_information">
            <form>
              {formTab.map((form, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="presentation_text-nav_information-detail"
                    >
                      <label htmlFor="">{form.item}</label>
                      <input
                        type="text"
                        name="text"
                        id=""
                        placeholder={form.placeholder}
                      />
                    </div>
                  </>
                );
              })}
              <div>
                <Icon icon="material-symbols:search" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="presentation_image"></div>
    </section>
  );
};

export default Hero;