import React from 'react';

import SectionHeader from '../components/SectionHeader';


function ContactPage() {
    return (
        <div className="page-container">
            <div className="page-content">
                <SectionHeader title="Let's Chat!"/>

                <div className="contact-content">
                    <div className="contact-body">
                        I'm open to new opportunities, if you want to work together or just say hi I'd love to get in touch!
                    </div>

                    <h3 className="contact-email">
                        ianjones <span className="contact-highlight">[at]</span> alumni <span className="contact-highlight">[dot]</span> stanford <span className="contact-highlight">[dot]</span> edu
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;