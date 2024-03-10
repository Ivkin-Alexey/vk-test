import React, {useEffect, useState} from 'react';
import {IActivePanel} from "../types";
import {View, Panel} from '@vkontakte/vkui';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import {QuoteBlock} from "../blocks";

export const HomePage = () => {

    const [activePanel, setActivePanel] = useState<IActivePanel>('main');

    return (
        <View activePanel={activePanel}>
            <Panel id="main">
                <QuoteBlock/>
            </Panel>
        </View>
    );
};
