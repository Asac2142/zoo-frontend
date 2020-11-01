import React from 'react';

import './report-new-animal.styles.scss';

const ReportNewAnimal = () => {
    return (
        <div>
            <h1 className='report-title'>Who needs medical attention?</h1>
            <div className='form'>
                <label>Family</label>
                <div>
                    <input type='text'/>
                </div>

                <label>Specie</label>
                <div>
                    <input type='text'/>
                </div>

                <label>Name</label>
                <div>
                    <input type='text'/>
                </div>

                <label>Photo</label>
                <div>
                    <input type='text'/>
                </div>

                <label>Age</label>
                <div>
                    <input type='number'/>
                </div>

                <label>Medical status</label>
                <div>
                    <input type='text'/>
                </div>

                <button className='btnSave'>Report</button>
            </div>
        </div>        
    )
};

export default ReportNewAnimal;
