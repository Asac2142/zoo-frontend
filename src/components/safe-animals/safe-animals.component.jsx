import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Animal from '../animals/animals.component';
import { selectAllHealthyAnimals } from '../../redux/animals/animals.selectors';

import './safe-animals.styles.scss';

const Safe = ({ healthyAnimals }) => {
    return (
        <div className='safe-container'>
        {
            healthyAnimals.length > 0 ? 
                <div className='safe-container'>
                    <h1>These animals are healthy!</h1>
                    <div className='animal-container'>
                        {
                            healthyAnimals.map(({id, ...animals}) => {
                            return (
                                <Animal key={id} {...animals} id={id} />
                            )
                        })
                        }
                    </div>
                </div> :
                <h1>No animals here yet!</h1>
        }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    healthyAnimals: selectAllHealthyAnimals
})

export default connect(mapStateToProps, null)(Safe);
