import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

const Header = () => {
    return (

        <nav className={styles.navstyle}>
            <div className={styles.flex_h}>
                <Link href="/"><button>Home</button></Link>
                <Link href="/about"><button>About</button></Link>
                <Link href="/services"><button>Services</button></Link>
                <Link href="/pricing"><button>Pricing</button></Link>
                <Link href="/blog"><button>Blog</button></Link>
                <Link href="/contactus"><button>Contact Us</button></Link>
            </div>
        </nav>

    )
}

export default Header