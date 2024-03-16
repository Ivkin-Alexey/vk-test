import React, {useEffect, useRef, useState} from 'react';
import {Button, FormItem, Group, PanelHeader, SimpleCell, Text, Textarea} from "@vkontakte/vkui";
import {fetchQuote} from "../api/api";

export const QuoteBlock = () => {

    const [quote, setQuote] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const ref = useRef<HTMLTextAreaElement | null>(null)

    function handleClick() {
        setIsError(false);
        fetchQuote()
            .then(data => setQuote(data))
            .catch(() => setIsError(true));
    }

    useEffect(() => {
        if(ref.current && quote) {
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
                {isError && <SimpleCell>
                    <Text style={{color: "red"}}>Ошибка: цитату не удалось загрузить</Text>
                </SimpleCell>}
            </Group>
        </>
    );
};