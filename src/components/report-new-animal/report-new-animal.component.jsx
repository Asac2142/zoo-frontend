import React from 'react';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';

import { addAnimal } from '../../redux/animals/animals.actions';
import { selectAllInjuredAnimals } from '../../redux/animals/animals.selectors';

import './report-new-animal.styles.scss';

class ReportNewAnimal extends React.Component {
    constructor() {
        super();        
        this.state = {            
            id: 0,            
            imageUrl: [],
            name: '',
            family: '',
            specie: '',
            age: 0,
            medical_status: '',
            active: false                        
        };
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() {
        this.setState({ id: this.props.id.length + 1 });
    }

    onDrop(pictureFiles, pictureDataURLs) {
        console.log('URL', pictureDataURLs.toString())
        this.setState({            
            imageUrl: this.state.imageUrl.concat(pictureFiles)
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {  
        const {name, family, specie, age, medical_status} = this.state;

        return (
            <div>
                <h1 className='report-title'>Who needs medical attention?</h1>
                <div className='form'>
                    <label>Family</label>
                    <div>
                        <input 
                            name='family' 
                            value={family} 
                            type='text' 
                            onChange={this.handleChange}/>
                    </div>
    
                    <label>Specie</label>
                    <div>
                        <input 
                            name='specie' 
                            value={specie} 
                            type='text' 
                            onChange={this.handleChange}/>
                    </div>
    
                    <label>Name</label>
                    <div>
                        <input 
                            name='name' 
                            value={name} 
                            type='text' 
                            onChange={this.handleChange}/>
                    </div>
    
                    <label>Photo</label>
                    <div>
                        <ImageUploader
                            withPreview={true}
                            withIcon={true}
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
                        />
                    </div>
    
                    <label>Age</label>
                    <div>
                        <input 
                            name='age' 
                            value={age} 
                            type='number' 
                            onChange={this.handleChange}/>
                    </div>
    
                    <label>Medical status</label>
                    <div>
                        <input 
                            name='medical_status' 
                            value={medical_status} 
                            type='text' 
                            onChange={this.handleChange}/>
                    </div>
    
                    <button className='btnSave' onClick={() => {
                        console.log('state:', this.state);
                        console.log('thisProps:', this.props)
                        this.props.addNewAnimal(this.state)                        
                        }}>Report</button>
                </div>
            </div>        
        )
    }
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAnimal: (animal) => dispatch(addAnimal(animal))
    }
}

const mapStateToProps = (state) => {
    return {
        id: selectAllInjuredAnimals(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportNewAnimal);
