import React from 'react';
import { Hero } from '../src/components/Hero';

export const HeroComponent = () => <Hero />;

export const WithTitle = () => <Hero title="Custom Title" />;

export default {
  title: 'Hero',
  component: Hero,
};
