import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

import Animal from '../animals/animals.component';
import { selectAllInjuredAnimals, selectSearchField } from '../../redux/animals/animals.selectors';
import { searchAnimal, addAnimalData } from '../../redux/animals/animals.actions';

import './main.styles.scss';

class Main extends React.Component {
    result = null;

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() { 
        axios.get('http://localhost:3142/api/animals/')
            .then(response => this.props.addAnimalData(response.data.animals));
    }

    render() {
        const result = getFilteredAnimals(this.props.animals, this.props.searchField);
        return (
            <div className='main-container'>            
                <div className='search-container'>
                    <h1>Search</h1>
                    <div>
                        <input className='searchField' onChange={(event) => this.props.filterAnimals(event.target.value)}/>
                    </div>
                </div>
                <div className='animal-container'>                    
                {                                                
                    result.length > 0 ?
                    result.map(({id, ...animalProperties}) => {
                        return (
                            <Animal key={id} {...animalProperties} id={id} />
                        )
                    }) : <h2 className='no-animals'>There are no animals who need medical assistance. Whoaa!</h2>                
                }
                </div>
            </div>
        );
    }
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
        filterAnimals: (name) => dispatch(searchAnimal(name)),
        addAnimalData: (animalDataArray) => dispatch(addAnimalData(animalDataArray))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
