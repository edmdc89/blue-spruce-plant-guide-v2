import React from 'react';
import { IPlantDetails } from '../../types/app';
import styles from './PlantCard.module.scss';

type PlantCardProps = {
  plant: IPlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  const formatName = (plant: IPlantDetails): JSX.Element => {
    const name = plant.commonName ? plant.commonName : plant.scientificName;
    if (name.length > 23) {
      const splitName = name.split(' ');
      return (
        <h3 className={styles.plantName}>
          {splitName[0]}
          <br />
          {splitName[1]}
        </h3>
      );
    }
    return <h3 className={styles.plantName}>{name}</h3>;
  };

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
        {formatName(plant)}
      </div>
      <div className={styles.back}>
        <h5>Common Name:</h5>
        <h6>{plant.commonName ? plant.commonName : 'None Found'}</h6>
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
