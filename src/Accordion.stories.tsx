import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {ControlledAccordion} from "./ControlledAccordion";

export default {
    title: 'Accordion',
    component: ControlledAccordion,
}

const callback = action('OnOff is rendering')

export const collaapsed = () => <ControlledAccordion title={'Menu'} onClick={callback} collapsed={true}/>
export const noCollaapsed = () => <ControlledAccordion title={'Menu'} onClick={callback} collapsed={false}/>

export const SwitchCollaps = () => {
    const [accordion, setAccordion] = useState<boolean>(true)
    return <ControlledAccordion title={'Menu'} onClick={() => setAccordion(!accordion)} collapsed={accordion}/>
}