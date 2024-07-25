import React from 'react'
import Link from 'next/link'
import styles from './pricingpage.module.css'

const PricingPage = () => {
    return (
        <div>
            <h1>Pricing Page</h1>
            <Link href="/pricing/seopricing">SEO Pricing</Link><br />
            <Link href="/pricing/smopricing">SMO Pricing</Link><br />
            <Link href="/pricing/ppcpricing">PPC Pricing</Link><br />
            <Link href="/pricing/webdevpricing">Web Development Pricing</Link><br />
            <Link href="/pricing/ecommpricing">ECommerce Pricing</Link>
        </div>
    )
}

export default PricingPage