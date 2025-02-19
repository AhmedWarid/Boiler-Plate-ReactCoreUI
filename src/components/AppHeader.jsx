import  { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    CContainer,
    CHeader,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
    cilMenu,
} from '@coreui/icons';

const AppHeader = ({ setCurrentPage }) => {
    const headerRef = useRef();
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const handleNavigation = (path) => {
        navigate(path); // Use navigate instead of history.push
    };
    const handleLogout = () => {
        navigate('/home');
    }

    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarShow);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            headerRef.current &&
            headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
        });

        return () => {
            document.removeEventListener('scroll', () => {
                headerRef.current &&
                headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
            });
        };
    }, []);

    return (
        <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
            <CContainer className="border-bottom px-4" fluid>
                <CHeaderToggler
                    onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                    style={{ marginInlineStart: '-14px' }}
                >
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderNav className="d-none d-md-flex">
                    <CNavItem>
                        <CNavLink onClick={() => handleNavigation('/home')}>
                            HOME
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                             <CNavLink onClick={() => handleNavigation('/login')}>Se connecter</CNavLink>
                            <CNavLink onClick={handleLogout}>Déconnexion</CNavLink>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
};

export default AppHeader;
