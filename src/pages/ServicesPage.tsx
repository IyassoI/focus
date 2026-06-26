import React from 'react';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Projects from '../components/Projects';
import SuccessStories from '../components/SuccessStories';

export default function ServicesPage(): React.JSX.Element {
  return (
    <div className="pt-20 bg-slate-50">
      <Services />
      <HowItWorks />
      <Projects />
      <SuccessStories />
    </div>
  );
}