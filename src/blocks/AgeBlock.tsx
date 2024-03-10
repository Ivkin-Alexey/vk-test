import React, {useEffect, useRef, useState} from 'react';
import {fetchAge, fetchQuote} from "../api/api";
import {Button, FormItem, Group, PanelHeader, SimpleCell, Textarea, FormLayoutGroup, Input, Text,} from "@vkontakte/vkui";
import {memoize} from "../utils/utils";

export const AgeBlock = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [age, setAge] = useState<string | null>(null);

    function handleChange(e: any) {
        const {value} = e.target;
        setInputValue(value);
    }

    const memoizedAge = memoize(fetchAge);

    function handleClick() {
        try {
            memoizedAge(inputValue).then(age => setAge(age));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if(inputValue !== "") {
            const timeOutId = setTimeout(handleClick, 3000);
            return () => clearTimeout(timeOutId);
        }
    }, [inputValue]);

    return (
        <>
            <Group>
                <FormItem htmlFor="name" top="Имя">
                    <Input id="name" placeholder="Введите имя" onChange={handleChange} value={inputValue}/>
                </FormItem>
                <SimpleCell>
                    <Button onClick={handleClick} size="l" appearance="accent" mode="outline" disabled={!inputValue}>
                        Отправить
                    </Button>
                </SimpleCell>
                <SimpleCell>
                    <Text>Возраст: {age}</Text>
                </SimpleCell>
            </Group>
        </>
    );
};