import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        
                            <div className="situation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Orléans</span>
                            </div>
                            <div className="tel">
                                <i className="fas fa-mobile-alt"></i>
                                <span>06.21.75.48.92</span>
                            </div>
                            
                            <div className="mail">
                            <i class="fas fa-at"></i>
                                <span>ipweb966@gmail.com</span>
                            </div>
                            
                            <div className="adresse">
                                <i className="far fa-envelope"></i>
                                <span>23 rue du petit pont - 45750 - st pryvé st mesmin</span>
                            </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Contact;