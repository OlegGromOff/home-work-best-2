import React, { Component, useState } from 'react';

const pets = [
  {
    key: 1,
    isDog: true,
    image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
  },
  {
    key: 2,
    isDog: false,
    image:
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg',
  },
  {
    key: 3,
    isDog: true,
    image:
      'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381',
  },
  {
    key: 4,
    isDog: false,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136638860%2F960x0.jpg%3Ffit%3Dscale',
  },
];



const Dog = (props) => (
  <img alt="img" style={{ display: props.none }} src={props.image} className="animal-pic" />
);

const Cat = (props) => (
  <img alt="img" style={{ display: props.none }} src={props.image} className="animal-pic" />
);

const Pet = ({ isDog, image, onlyDogs, onlyCats }) => {
  return (
    <div className="animal-img">
      {isDog ? (
        <Dog none={!onlyDogs ? 'block' : 'none'} image={image} />
      ) : (
          <Cat none={!onlyCats ? 'block' : 'none'} image={image} />
        )
      }

    </div>
  );
};
const Button = (props) => {
  return (
    <button className="animals-btn"
      onClick={() => {
        props.changeAnimal();
      }}>
      {props.value}

    </button>
  );
};
const Task3 = () => {
  const [onlyDogs, setDogs] = useState(false);
  const [onlyCats, setCats] = useState(false);

  const showCats = () => {
    setCats(true);
    setDogs(false)
  };
  const showDogs = () => {
    setDogs(true);
    setCats(false);
  };
  const showAll = () => {
    setDogs(false);
    setCats(false);
  };

  return (
    <div className="animalWrapper">
      <h2>Welcome to the world of pets</h2>
      <div className="df">
        {pets.map((el, i) => (
          <Pet onlyDogs={onlyDogs} onlyCats={onlyCats} key={el.key} {...el} />
        ))}
      </div>
      <div>
        <Button value="Dogs" className="dogs" changeAnimal={showCats} />
        <Button value="Cats" className="cats" changeAnimal={showDogs} />
        <Button value="Cats and Dogs" className="all-animals" changeAnimal={showAll} />
      </div>
    </div>
  );
}
export default Task3;