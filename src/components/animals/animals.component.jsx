import React from 'react';

import AnimalModal from '../modal-animal/modal-animal.component';

import './animals.styles.scss';

class Animals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            animal: this.props
        }
    }

    render() {
        const { name, imageUrl, specie } = this.state.animal;

        return ( 
            <div>
                <div className='animal-card' onClick={() => this.setState({ show: !this.state.show }) }>
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
                {
                    this.state.show ? <AnimalModal animal={this.state.animal}/> : null
                }
            </div>
        );
    }    
};

export default Animals;
