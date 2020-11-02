import React from 'react';
import { connect } from 'react-redux';

import { setHealthyAnimal } from '../../redux/animals/animals.actions';

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
        this.setState({ [name]: value });
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
                    <p>{this.state.animal.name.toUpperCase()}</p>
                    <div className='close-icon' onClick={() => this.setState({ show: !this.state.show })}/>
                    <div className='modal-header'>
                        <label>Family</label>
                        <div className='input-block'>
                            <input type='text' name='family' value={family} onChange={this.handleChange}/>
                        </div>
    
                        <label>Specie</label>
                        <div className='input-block'>
                            <input type='text' name='specie' value={specie} onChange={this.handleChange}/>
                        </div>
    
                        <label>Name</label>
                        <div className='input-block'>
                            <input type='text' name='name' value={name} onChange={this.handleChange}/>
                        </div>
    
                        <label>Age</label>
                        <div className='input-block'>
                            <input type='number' name='age' value={age} onChange={this.handleChange}/>
                        </div>
    
                        <label>Medical Status</label>
                        <div className='input-block'>
                            <input type='text' name='medical_status' value={medical_status} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn-delete'>Delete</button>
                        <button className='btn-update'>Update</button>
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
        setHealthy: (id) => dispatch(setHealthyAnimal(id))
    }
};

export default connect(null, mapDispatchToProps)(AnimalModal);
