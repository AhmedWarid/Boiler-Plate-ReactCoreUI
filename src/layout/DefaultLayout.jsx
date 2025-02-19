import { Outlet} from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import {Suspense} from "react";


const loading = (
    <div className="pt-3 text-center">
        <CSpinner color="primary" variant="grow" />
    </div>
);

const DefaultLayout = () => {
    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <CContainer lg>
                        <Suspense fallback={loading}>
                            <Outlet/>
                        </Suspense>
                    </CContainer>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
