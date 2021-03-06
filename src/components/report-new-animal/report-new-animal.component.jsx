import React from 'react';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import axios from 'axios';

import { addAnimal } from '../../redux/animals/animals.actions';

import './report-new-animal.styles.scss';

class ReportNewAnimal extends React.Component {
    constructor() {
        super();
        this.state = {            
            id: '0',            
            imageUrl: '',
            name: '',
            family: '',
            specie: '',
            age: 0,
            medical_status: '',
            active: false                        
        };
        this.onDrop = this.onDrop.bind(this);
    };

    onDrop(pictureFiles, pictureDataURLs) {        
        this.setState({            
            imageUrl: this.state.imageUrl.concat(pictureDataURLs)
        });
    };

    handleChange =  (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();         
        axios.post('http://localhost:3142/api/animals', this.state)
        .then(res => {
            if (res.status === 200) {
                this.props.addNewAnimal(res.data);
                this.clearState();
                this.props.history.push('/');
            }
        }).catch(error => {
            alert(`Error: ${error}`);
        });
    };

    clearState = () => {
        this.setState({
            id: 0,            
            imageUrl: [],
            name: '',
            family: '',
            specie: '',
            age: 0,
            medical_status: '',
            active: false    
        });
    };

    render() {  
        const {name, family, specie, age, medical_status} = this.state;

        return (
            <div>
                <h1 className='report-title'>Who needs medical attention?</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Family</label>
                    <div>
                        <input 
                            name='family' 
                            value={family} 
                            type='text' 
                            onChange={this.handleChange} 
                            required/>
                    </div>
    
                    <label>Specie</label>
                    <div>
                        <input 
                            name='specie' 
                            value={specie} 
                            type='text' 
                            onChange={this.handleChange}
                            required/>
                    </div>
    
                    <label>Name</label>
                    <div>
                        <input 
                            name='name' 
                            value={name} 
                            type='text' 
                            onChange={this.handleChange}
                            required/>
                    </div>
    
                    <label>Photo</label>
                    <div>
                        <ImageUploader
                            withPreview={true}
                            withIcon={true}
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
                            maxFileSize={5242880}
                            singleImage={true}
                        />
                    </div>
    
                    <label>Age</label>
                    <div>
                        <input 
                            name='age' 
                            value={age} 
                            type='number' 
                            onChange={this.handleChange}
                            required />
                    </div>
    
                    <label>Medical status</label>
                    <div>
                        <input 
                            name='medical_status' 
                            value={medical_status} 
                            type='text' 
                            onChange={this.handleChange}
                            required />
                    </div>
    
                    <button type='submit' className='btnSave'>Report</button>
                </form>
            </div>        
        )
    }    
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAnimal: (animal) => dispatch(addAnimal(animal))
    }
};

export default connect(null, mapDispatchToProps)(ReportNewAnimal);
