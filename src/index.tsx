import React from 'react';
import ReactDOM from 'react-dom/client';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root')!);


root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App/>
        </AdaptivityProvider>
    </ConfigProvider>
);

