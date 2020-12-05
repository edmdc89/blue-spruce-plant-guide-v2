import React from 'react';
import { IPlantDetails } from '../../types/app';
import styles from './PlantCard.module.scss';

type PlantCardProps = {
  plant: IPlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  return (
    <article className={styles.plantCard}>
      <div className={styles.front}>
        <div
          className={styles.plantImage}
          style={{ backgroundImage: `url(${plant.imageUrl})` }}
          role="img"
          aria-label={`${plant.scientificName} in the wild`}
        >
          {' '}
        </div>
        <h3 className={styles.plantName}>{plant.commonName}</h3>
      </div>
      <div className={styles.back}>
        <h5>Scientific Name:</h5>
        <h6 className={styles.italic}>{plant.scientificName}</h6>
        <h5>Family Name:</h5>
        <h6>{plant.familyCommonName}</h6>
        <h6 className={styles.italic}>{plant.familyScientificName}</h6>
      </div>
    </article>
  );
};

export default PlantCard;
