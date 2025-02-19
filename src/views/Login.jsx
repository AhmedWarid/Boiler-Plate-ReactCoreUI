import  {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';


const Login = () => {
    const userRef = useRef()
    const errorRef = useRef()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

            navigate('/home');
    }

    return (
        <div className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#fff' }}>
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6} lg={5} xl={4}>
                        <CCard className="border-0 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#ff7900' }}>
                            <CCardBody className="p-5">
                                <CForm onSubmit={handleSubmit}>
                                    <h1 className="text-center mb-4" style={{ color: '#000', fontWeight: 'bold' }}>Login</h1>
                                    <p ref={errorRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText style={{ backgroundColor: '#fff', border: '2px solid #000' }}>
                                            <CIcon icon={cilUser} style={{ color: '#000' }} />
                                        </CInputGroupText>
                                        <CFormInput
                                            id="username"
                                            placeholder="Nom d'utilisateur"
                                            autoComplete="off"
                                            ref={userRef}
                                            value={username}
                                            required
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{ border: '2px solid #000', borderLeft: 'none', color: '#000' }}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText style={{ backgroundColor: '#fff', border: '2px solid #000' }}>
                                            <CIcon icon={cilLockLocked} style={{ color: '#000' }} />
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            placeholder="Mot de passe"
                                            id='password'
                                            autoComplete="off"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ border: '2px solid #000', borderLeft: 'none', color: '#000' }}
                                        />
                                    </CInputGroup>
                                    <CButton
                                        color="primary"
                                        className="px-4 w-100 mb-3"
                                        type="submit"
                                        style={{ backgroundColor: '#000', border: 'none', color: '#fff', fontWeight: 'bold', transition: 'all 0.3s' }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
                                    >
                                        Se connecter
                                    </CButton>
                                    <div className="text-center">
                                        <CButton
                                            color="link"
                                            className="px-0"
                                            style={{ color: '#000', textDecoration: 'none' }}
                                            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                        >
                                            Mot de passe oublié ?
                                        </CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;