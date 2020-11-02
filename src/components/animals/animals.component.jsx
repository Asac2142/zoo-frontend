import React from 'react';

import AnimalModal from '../modal-animal/modal-animal.component';

import './animals.styles.scss';

class Animals extends React.Component {
    constructor(props) {        
        super(props);        
        this.state = {
            show: false,
            animal: this.props,
            id: this.props.id
        }
    }

    setShowModal = () => {
        if (!this.state.animal.active) {
            this.setState({ show: !this.state.show });
        }
    }

    render() {
        const { name, imageUrl, specie } = this.props; //this.state.animal; 
        return ( 
            <div>
                <div 
                    className='animal-card' 
                    onClick={() => this.setShowModal()}>
                    <div className='thumbnail' style={{backgroundImage: `url(${imageUrl})`}}/>
                    <div className='animal-info'>
                        <h2 className='name'>{name}</h2>
                        <p className='specie'>{specie}</p>
                    </div>
                    {
                        !this.state.animal.active ?
                        <div className='badge'>                
                            <p>Injured</p>
                            <div className='cross'/>
                        </div> :
                        <div className='badge-safe'>
                            <p>Healthy</p>
                            <div className='green-icon'/>
                        </div>
                    }
                </div>
                {
                    this.state.show ? <AnimalModal animal={this.state.animal} id={this.state.id}/> : null
                }
            </div>
        );
    }    
};

export default Animals;
