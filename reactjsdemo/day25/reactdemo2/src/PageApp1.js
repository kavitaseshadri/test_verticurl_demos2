import React from 'react'
import Header from './pages/header';
import Footer from './pages/footer';
import Content from './pages/content';
import Menu from './pages/menu';
import Sidebar from './pages/sidebar';


const PageApp1 = () => {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <Content></Content>
            <Sidebar></Sidebar>
            <Footer></Footer>
        </div>
    )
}

export default PageApp1