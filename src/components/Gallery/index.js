import react from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from "../Photolist";

function Gallery({ currentCategory }) {

  const { name, description } = currentCategory;

  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery