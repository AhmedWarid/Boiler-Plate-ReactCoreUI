import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'core-js';
import "@coreui/coreui/dist/css/coreui.min.css";



import App from './App';
import store from './store';
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
    </Provider>,
);