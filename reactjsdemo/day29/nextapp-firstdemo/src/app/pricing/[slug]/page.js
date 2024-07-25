import React from 'react'
import styles from './pricingslugpage.module.css'
import Image from 'next/image'

const PricingSlugPage = ({ params }) => {

    const slugchoosen = params.slug;
    console.log('slugchoosen ' + slugchoosen);
    let template = null;
    if (slugchoosen == 'seopricing') {
        template = 'SEO Pricing is as follows';
    } else if (slugchoosen == 'smopricing') {
        template = 'SMO Pricing is as follows';
    } else if (slugchoosen == 'ppcpricing') {
        template = 'PPC Pricing is as follows';
    } else if (slugchoosen == 'webdevpricing') {
        template = 'Web Dev Pricing is as follows';

    } else if (slugchoosen == 'ecommpricing') {
        template = 'EComm Pricing is as follows';
    } else {
        template = '';
    }


    return (
        <div>
            <h1 className={styles.main}>Pricing Slug Page</h1>
            <h1 className={styles.main2}>{template}</h1>
        </div>
    )
}

export default PricingSlugPage