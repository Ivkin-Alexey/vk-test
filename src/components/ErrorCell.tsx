import React from 'react';
import {SimpleCell, Text} from "@vkontakte/vkui";
import {IErrorCell} from "../types/types";

const ErrorCell = ({errorMsg}: IErrorCell) => {

    return (
            <SimpleCell>
                <Text style={{color: "red"}}>{errorMsg}</Text>
            </SimpleCell>
    );
};

export default ErrorCell;