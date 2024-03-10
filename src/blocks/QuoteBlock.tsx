import React, {useEffect, useRef, useState} from 'react';
import {Button, FormItem, Group, PanelHeader, SimpleCell, Textarea} from "@vkontakte/vkui";
import {fetchQuote} from "../api/api";

export const QuoteBlock = () => {

    const [quote, setQuote] = useState<string>("");
    const ref = useRef<HTMLTextAreaElement | null>(null)

    function handleClick() {
        fetchQuote()
            .then(data => setQuote(data))
            .catch(() => setQuote("не удалось загрузить (произошла ошибка)"));
    }

    useEffect(() => {
        if(ref.current) {
            ref.current?.focus();
            ref.current.selectionEnd = quote.substring(0, quote.indexOf(" ")).length;
        }
    }, [quote])

    return (
        <>
            <PanelHeader>
                Цитаты
            </PanelHeader>
            <Group>
                <SimpleCell>
                    <Button onClick={handleClick} size="l" appearance="accent">
                        Получить цитату
                    </Button>
                </SimpleCell>
                    <FormItem top="Цитата">
                        <Textarea placeholder="Здесь появится цитата" value={quote} getRef={ref}/>
                    </FormItem>
            </Group>
        </>
    );
};