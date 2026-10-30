/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Domains } from './components/Domains';
import { HowItWorks } from './components/HowItWorks';
import { Timeline } from './components/Timeline';
import { TeamInfo } from './components/TeamInfo';
import { SubmissionRequirements } from './components/SubmissionRequirements';
import { JudgingCriteria } from './components/JudgingCriteria';
import { WhyParticipate } from './components/WhyParticipate';
import { Prizes } from './components/Prizes';
import { Organizers } from './components/Organizers';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { PosterModal } from './components/PosterModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  const handleOpenPoster = () => setIsPosterOpen(true);
  const handleClosePoster = () => setIsPosterOpen(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white flex flex-col">
      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenRegister={handleOpenRegister}
        onOpenPoster={handleOpenPoster}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenRegister={handleOpenRegister}
          onOpenPoster={handleOpenPoster}
        />

        {/* About HACKRISE ’26 */}
        <About 
          onOpenRegister={handleOpenRegister}
        />

        {/* 6 Hackathon Domains */}
        <Domains 
          onOpenRegister={handleOpenRegister}
        />

        {/* Step-by-Step Roadmap */}
        <HowItWorks 
          onOpenRegister={handleOpenRegister}
        />

        {/* 12-Hour Timeline with Connected Red Accent Line */}
        <Timeline />

        {/* Team Information & Squad Builder */}
        <TeamInfo 
          onOpenRegister={handleOpenRegister}
          onOpenPoster={handleOpenPoster}
        />

        {/* Submission Requirements Checklist */}
        <SubmissionRequirements />

        {/* Judging Criteria */}
        <JudgingCriteria />

        {/* Why Participate? */}
        <WhyParticipate 
          onOpenRegister={handleOpenRegister}
        />

        {/* Prizes & Recognition with Editable Pool Option */}
        <Prizes 
          onOpenRegister={handleOpenRegister}
        />

        {/* Organizers & Partners */}
        <Organizers 
          onOpenPoster={handleOpenPoster}
          onOpenRegister={handleOpenRegister}
        />

        {/* Frequently Asked Questions */}
        <FAQ 
          onOpenRegister={handleOpenRegister}
        />

        {/* Final CTA with repeated countdown */}
        <FinalCTA 
          onOpenRegister={handleOpenRegister}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenRegister={handleOpenRegister}
        onOpenPoster={handleOpenPoster}
      />

      {/* Official Registration Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />

      {/* Official Teaser Poster Modal */}
      <PosterModal 
        isOpen={isPosterOpen}
        onClose={handleClosePoster}
      />
    </div>
  );
}
