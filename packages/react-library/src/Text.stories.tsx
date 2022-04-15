import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text } from './Text';
import type { Properties } from "./Text"

const Template: Story<Properties> = ( properties: Properties = {}) => {
    return (
        <Text input={properties.input}/>
    );
}

export const Component = Template.bind({});
Component.args = {
    input: "Test Primary Text"
};

export default {
    title: "Components/Text",
    component: Text
};
