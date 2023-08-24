import React from 'react';
import MediaCard from '@/components/molecules/MediaCard';

import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';


/* export default {
  title: 'MediaCard',
  component: MediaCard,
}; */

export const Default = () => 
<MediaCard 
    heading={'title'}
    text={'subtitle'}
    main={{text:'button', onclick:action('button-click')}}
/>;

const meta: Meta<typeof MediaCard> = {
  component: MediaCard,
};

export default meta;

type Story = StoryObj<typeof MediaCard>;


/*  export const Primary: Story = {
    args: {
      variant: 'primary',
    },
  }; */
