import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: UncontrolledOnOff,
}

const callback = action('OnOff is rendering')

export const On = () => <UncontrolledOnOff on={true} onClick={callback} />
export const Off = () => <UncontrolledOnOff on={false} onClick={callback} />


export const ChangeOnOff = () => {
    const [onOff, setOnOff] = useState(true)
    return <UncontrolledOnOff on={onOff} onClick={setOnOff}/>
}