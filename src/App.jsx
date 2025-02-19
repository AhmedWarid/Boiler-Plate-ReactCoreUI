import React, {Suspense} from 'react';
import { Route, Routes} from 'react-router-dom';
import {CSpinner} from '@coreui/react';
import './scss/style.scss';

import Missing from "./views/Missing.jsx";

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login = React.lazy(() => import('./views/Login'));

const loading = (
    <div className="pt-3 text-center">
        <CSpinner color="primary" variant="grow"/>
    </div>
);

const App = () => {
    return (


            <Suspense fallback={loading}>
                <Routes>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<DefaultLayout/>}>
                        {/* things to up on home*/}
                    </Route>
                    <Route path="*" element={<Missing/>}/>
                </Routes>
            </Suspense>


    );
}

export default App;
