import React from 'react';
import {Group, FormItem, Textarea, PanelHeader, Button, SimpleCell} from "@vkontakte/vkui";

export const QuoteBlock = () => {
    return (
        <>
            <PanelHeader>
                Цитаты
            </PanelHeader>
            <Group>
                <SimpleCell>
                    <Button onClick={() => {}} size="l" appearance="accent">
                        Получить цитату
                    </Button>
                </SimpleCell>
                    <FormItem top="Цитата">
                        <Textarea placeholder=""/>
                    </FormItem>
            </Group>
        </>
    );
};