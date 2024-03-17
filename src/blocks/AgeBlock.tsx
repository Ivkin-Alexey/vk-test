import React, {useEffect, useRef, useState} from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm, Controller, UseControllerProps, useController} from "react-hook-form";
import {fetchAge, fetchQuote} from "../api/api";
import {
    Button,
    FormItem,
    Group,
    PanelHeader,
    SimpleCell,
    Textarea,
    FormLayoutGroup,
    Input,
    Text,
} from "@vkontakte/vkui";
import {memoize, validate} from "../utils/utils";
import ErrorCell from "../components/ErrorCell";
import constants from "../constants";
import {IAgeForm} from "../types/types";

export const AgeBlock: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [age, setAge] = useState<string | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>(constants.errors.ageBlock);

    const memoizedAge = memoize(fetchAge);

    function handleClick() {
        try {
            if (inputValue != null) {
                memoizedAge(inputValue)
                    .then(age => setAge(age))
                    .catch((e) => {
                        setIsError(e)
                    })
            }
        } catch (e) {
            console.log(e);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsError(false);
        let value = e.target.value;
        setInputValue(() => value);
        const result = validate(value);
        if(!result.isValid) {
            setIsError(true);
            setErrorMsg(result.msg);
        }
    }

    useEffect(() => {
        if (!isError) {
            const timeOutId = setTimeout(handleClick, 3000);
            return () => clearTimeout(timeOutId);
        }
    }, [inputValue]);

    return (
        <>
            <Group>
                    <FormItem htmlFor="name" top="Имя">
                        <Input value={inputValue} onChange={handleChange} placeholder="Введите имя"></Input>
                    </FormItem>
                    <FormItem>
                        <Button size="l"
                                appearance="accent"
                                mode="outline"
                                onClick={handleClick}
                                disabled={isError || !inputValue}
                        >
                            Отправить
                        </Button>
                    </FormItem>
                {isError ?
                    <ErrorCell errorMsg={errorMsg}/>
                    : <SimpleCell>
                        <Text>Возраст: {age}</Text>
                    </SimpleCell>}
            </Group>
        </>
    );
};