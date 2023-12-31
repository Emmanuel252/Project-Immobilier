import { React, useEffect, useState, useMemo } from 'react';

import './HomeRental.scss';
import { appartements, categories } from '../data';
import { Icon } from '@iconify/react';

const HomeRental = () => {
  const [typeSelect, setTypeSelect] = useState([]);
  const [categorieFilter, setCategorieFilter] = useState();
  useEffect(() => {
    setTypeSelect(appartements);
  }, []);

  const getFilter = () => {
    if (!categorieFilter) {
      return typeSelect;
    }
    return typeSelect.filter(item => item.type === categorieFilter);
  };

  var filter = useMemo(getFilter, [typeSelect, categorieFilter]);

  // const filterHomme = () => {
  //   appartements.filter(appartement => appartement.type === 'Rental');
  //   console.log(appartement);
  // };

  const result = appartements.filter(
    appartement => appartement.type === 'Rental'
  );

  return (
    <section className="homeRental">
      <div className="hommeRental_buton">
        <div className="homeRental_button-first">
          {categories.map((categorie, index) => {
            return (
              <button
                key={index}
                className=" button first"
                // onClick={onChangeHandle}
              >
                {categorie}
              </button>
            );
          })}
          {/* console.log(button) */}
        </div>
        <div className="homeRental_button-second">
          <button className=" button second">
            Explore All learning <Icon icon="basil:arrow-right-solid" />
          </button>
        </div>
      </div>
      <div className="appartement">
        {appartements.map((appartement, index) => {
          return (
            <div key={index} className="appartementFirst">
              <div className="appartement_image">
                <img src={appartement.image} alt="" />
              </div>
              <div className="appartement_info">
                <h2>{appartement.title}</h2>
                <p>{appartement.location}</p>
                <div className="price_details">
                  <p className="price">{appartement.price}</p>
                  <div>
                    <p>Details</p>
                    <Icon
                      icon="basil:arrow-right-solid"
                      className="details_icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeRental;
