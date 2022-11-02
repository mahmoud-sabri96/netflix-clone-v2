import React from 'react'
import "./PlanScreen.css"
function PlanScreen() {
    return (
        <div className='planScreen'>
            <h4>Renewal date : 04/03/2021</h4>

            <div className='planScreen__standard'>
                <div className='planScreen__title'>
                    <h5>Netflix Standard</h5>
                    <small>1080p</small>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='planScreen__Basic'>
                <div className='planScreen__title'>
                    <h5>Netflix Basic</h5>
                    <small>480p</small>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='planScreen__Premium'>
                <div className='planScreen__title'>
                    <h5>Netflix Premium</h5>
                    <small>4k+HDR</small>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default PlanScreen
