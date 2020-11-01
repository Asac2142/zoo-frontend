import React from 'react';

import './animals.styles.scss';

const Animals = (animals) => {    
    const { name, imageUrl, specie } = animals;
    
    return (                    
        <div className='animal-card'>
            <div className='thumbnail' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='animal-info'>
                <h2 className='name'>{name}</h2>
                <p className='specie'>{specie}</p>
            </div>
            <div className='badge'>                
                <p>Injured</p>
                <div className='cross'></div>
            </div>
        </div>                
    );
};

export default Animals;
