import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setHealthyAnimal, updateAnimal, deleteAnimal } from '../../redux/animals/animals.actions';

import './modal-animal.styles.scss';

class AnimalModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: this.props.animal,
            show: false,
            id: this.props.id
        }        
    }

    handleChange = (event) => {                
        const { name, value } = event.target;
        let animal = null;

        if (name === 'age') {
            animal = {...this.state.animal, [name]: parseInt(value)};
        } else {
            animal = {...this.state.animal, [name]: value};
        }
        
        this.setState({animal});
    }

    handleSubmit = (event) => {        
        if (event.target.id === 'btn-update') {
            axios.put('http://localhost:3142/api/animals', this.state.animal)
                .then(response => {
                    if (response.status === 200) this.props.updateAnimal(response.data);
                }).catch(error => {
                    alert(`Error: ${error}`);
                });
        } 
        
        if (event.target.id === 'btn-delete') {
            axios.delete(`http://localhost:3142/api/animals/delete/${this.state.animal.id}`)
            .then(response => {
                if (response.status === 200) this.props.deleteAnimal({...response.data.animalDeleted[0]});
            }).catch(error => {
                alert(`Error: ${error}`);
            });
        }

        if (event.target.id === 'btn-safe') {
            axios.patch(`http://localhost:3142/api/animals/${this.state.animal.id}`)
            .then(response => {
                if (response.status === 200) this.props.setHealthy(response.data.id);
            }).catch(error => {
                alert(`Error: ${error}`);
            });
        }

        this.setState({ show: !this.state.show });
    }

    render() {
        const { family, specie, name, age, medical_status } = this.state.animal;
        
        return (
            !this.state.show ? 
            <div className='modal-container'>
                <div className='backdrop'/>
                <div className='modal'>
                    <div 
                        className='profile-photo' 
                        style={{backgroundImage: `url(${this.props.animal.imageUrl})`}}/>
                    <p>{name.toUpperCase()}</p>
                    <div className='close-icon' onClick={() => this.setState({ show: !this.state.show })}/>
                    <form className='modal-header'>
                        <label>Family</label>
                        <div className='input-block'>
                            <input type='text' name='family' value={family} onChange={this.handleChange} required/>
                        </div>
    
                        <label>Specie</label>
                        <div className='input-block'>
                            <input type='text' name='specie' value={specie} onChange={this.handleChange} required/>
                        </div>
    
                        <label>Name</label>
                        <div className='input-block'>
                            <input type='text' name='name' value={name} onChange={this.handleChange} required/>
                        </div>
    
                        <label>Age</label>
                        <div className='input-block'>
                            <input type='number' name='age' value={age} onChange={this.handleChange} required/>
                        </div>
    
                        <label>Medical Status</label>
                        <div className='input-block'>
                            <input type='text' name='medical_status' value={medical_status} onChange={this.handleChange}/>
                        </div>
                    </form>
                    <div className='modal-footer'>
                        <button id='btn-delete' className='btn-delete' onClick={this.handleSubmit}>Delete</button>
                        <button id='btn-update' className='btn-update' onClick={this.handleSubmit}>Update</button>
                        <button id='btn-safe' className='btn-safe' onClick={this.handleSubmit}>Report healthy</button>
                    </div>
                </div>
            </div> :
            null
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setHealthy: (id) => dispatch(setHealthyAnimal(id)),
        updateAnimal: (animal) => dispatch(updateAnimal(animal)),
        deleteAnimal: (animal) => dispatch(deleteAnimal(animal))
    }
};

export default connect(null, mapDispatchToProps)(AnimalModal);
