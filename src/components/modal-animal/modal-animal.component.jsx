import React from 'react';
import { connect } from 'react-redux';

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
        const animal = {...this.state.animal, [name]: value};
        this.setState({animal});
    }

    handleSubmit = (event) => {        
        if (event.target.id === 'btn-update') {            
            this.props.updateAnimal(this.state.animal);
        } else {
            this.props.deleteAnimal(this.state.animal);
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
                        style={{backgroundImage: `url(${this.state.animal.imageUrl})`}}/>
                    <p>{name.toUpperCase()}</p>
                    <div className='close-icon' onClick={() => this.setState({ show: !this.state.show })}/>
                    <form className='modal-header'>
                        <label>Family</label>
                        <div className='input-block'>
                            <input type='text' name='family' value={family} onChange={this.handleChange.bind(this)} required/>
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
                        <button 
                            className='btn-safe' 
                            onClick={() => {
                                    this.props.setHealthy(this.state.id)
                                    this.setState({ show: !this.state.show })
                                }}>
                                Report healthy
                        </button>
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
