import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Animal from '../animals/animals.component';
import { selectAllInjuredAnimals, selectSearchField } from '../../redux/animals/animals.selectors';
import { searchAnimal } from '../../redux/animals/animals.actions';

import './main.styles.scss';

const Main = ({animals, filterAnimals, searchField}) => {      
    const result = getFilteredAnimals(animals, searchField);    
    
    return (
        <div className='main-container'>            
            <div className='search-container'>
                <h1>Search</h1>
                <div>
                    <input className='searchField' onChange={(event) => filterAnimals(event.target.value)}/>
                </div>
            </div>
            <div className='animal-container'>                    
            {                                                
                result.map(({id, ...animalProperties}) => {
                    return (
                        <Animal key={id} {...animalProperties} id={id} />
                    )
                })
            }
            </div>
        </div>
    );
};

const getFilteredAnimals = (animals, searchedAnimal) => {
    return animals.filter((animal) => animal.name.toLowerCase().includes(searchedAnimal.toLowerCase()));    
};

const mapStateToProps = createStructuredSelector({
    animals: selectAllInjuredAnimals,
    searchField: selectSearchField
});

const mapDispatchToProps = (dispatch) => {
    return {        
        filterAnimals: (name) => dispatch(searchAnimal(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
