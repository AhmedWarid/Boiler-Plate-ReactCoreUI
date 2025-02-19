import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    CCloseButton,

    CNavItem,

    CSidebar,
    CSidebarBrand,
    CSidebarFooter,
    CSidebarHeader,
    CSidebarNav,
    CSidebarToggler,
} from '@coreui/react';
import nav from '../_nav';
import Logo from "./Logo.jsx";

const AppSidebar = () => {
    const location = useLocation();
    const [unfoldable, setUnfoldable] = React.useState(false);
    const [sidebarShow, setSidebarShow] = React.useState(true);

    return (
        <CSidebar
            className="border-end unfoldable"
            colorScheme="dark"
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => setSidebarShow(visible)}
        >
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand to="/">
                    <Logo />
                </CSidebarBrand>
                <CCloseButton
                    className="d-lg-none"
                    dark
                    onClick={() => setSidebarShow(false)}
                />
            </CSidebarHeader>
            <CSidebarNav>
                {nav.map((item, index) => (
                    <CNavItem
                        key={index}
                        href={item.to}
                        to={item.to}
                        className={` ${location.pathname === item.to ? 'active' : ''}`}
                    >
                        {item.icon}
                        {item.name}
                    </CNavItem>
                ))}
            </CSidebarNav>
            <CSidebarFooter className="border-top d-none d-lg-flex">
                <CSidebarToggler
                    onClick={() => setUnfoldable(!unfoldable)}
                />
            </CSidebarFooter>
        </CSidebar>
    );
};

export default AppSidebar;
