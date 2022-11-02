import React from 'react'
import "./PlanScreen.css"
function PlanScreen() {
    return (
        <div className='planScreen'>
            <h4>Renewal date : 04/03/2021</h4>

            <div className='planScreen__standard'>
                <div className='planScreen__title'>
                    <h5>Netflix Standard</h5>
                    <samll>1080p</samll>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='planScreen__Basic'>
                <div className='planScreen__title'>
                    <h5>Netflix Basic</h5>
                    <samll>480p</samll>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='planScreen__Premium'>
                <div className='planScreen__title'>
                    <h5>Netflix Premium</h5>
                    <samll>4k+HDR</samll>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default PlanScreen
