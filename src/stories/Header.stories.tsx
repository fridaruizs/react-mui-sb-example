import React from 'react';
import Header from '@/components/molecules/Header';

import { Meta } from '@storybook/react';

export const Default = () => <Header />;

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

