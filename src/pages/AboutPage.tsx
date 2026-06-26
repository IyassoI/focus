import React from 'react';
import About from '../components/About';
import MeetTeam from '../components/MeetTeam';

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="pt-20 bg-white">
      <About />
      <MeetTeam />
    </div>
  );
}