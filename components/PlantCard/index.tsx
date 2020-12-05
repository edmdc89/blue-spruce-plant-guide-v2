import React from 'react';
// import { IPlantDetails } from '../../../types/app';
import styles from './PlantCard.module.scss';

// type PlantCardProps = {
//   plant: IPlantDetails;
// };

const PlantCard = (): JSX.Element => {
  const plant = {
    commonName: 'plant',
    scientificName: 'herbaceous material',
    familyCommonName: 'plant family',
    familyScientificName: 'family genus',
    imageUrl: 'none',
  };

  return (
    <article className={styles.plantCard}>
      <div className={styles.front}>
        {plant.imageUrl && <div> </div>}
        <h4>{plant.commonName}</h4>
      </div>
      <div className={styles.back}>
        <h5>Scientific Name:</h5>
        <h6>{plant.scientificName}</h6>
        <h5>Family Name:</h5>
        <h6>{plant.familyCommonName}</h6>
        <h6>{plant.familyScientificName}</h6>
      </div>
    </article>
  );
};

export default PlantCard;
