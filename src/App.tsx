import React, { useState } from 'react';
import { NavTab, PurposeArchetype } from './types';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { VocationalTest } from './components/VocationalTest';
import { DegreesCatalog } from './components/DegreesCatalog';
import { PurposeManifestoLab } from './components/PurposeManifestoLab';
import { CareerHorizons } from './components/CareerHorizons';
import { UnedCentersFinder } from './components/UnedCentersFinder';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('inicio');
  const [selectedDegreeId, setSelectedDegreeId] = useState<string | null>(null);
  const [initialArchetype, setInitialArchetype] = useState<PurposeArchetype | null>(null);
  const [isCentersModalOpen, setIsCentersModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTest = () => {
    setActiveTab('brujula');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreDegrees = () => {
    setActiveTab('grados');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDegree = (degreeId: string) => {
    setSelectedDegreeId(degreeId);
    setActiveTab('grados');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToManifestoWithArchetype = (archetype: PurposeArchetype) => {
    setInitialArchetype(archetype);
    setActiveTab('manifiesto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* 3-Zone Top Navigation Bar */}
      <TopBar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onStartTest={handleStartTest}
      />

      {/* Main Screen Content Router */}
      <main className="flex-1 w-full">
        {activeTab === 'inicio' && (
          <HeroSection
            onStartTest={handleStartTest}
            onExploreDegrees={handleExploreDegrees}
            onOpenManifesto={() => handleSelectTab('manifiesto')}
            onOpenCenters={() => setIsCentersModalOpen(true)}
          />
        )}

        {activeTab === 'brujula' && (
          <VocationalTest
            onSelectDegree={handleSelectDegree}
            onGoToManifestoWithArchetype={handleGoToManifestoWithArchetype}
          />
        )}

        {activeTab === 'grados' && (
          <DegreesCatalog
            selectedDegreeId={selectedDegreeId}
            onSelectDegree={handleSelectDegree}
            onOpenCenters={() => setIsCentersModalOpen(true)}
          />
        )}

        {activeTab === 'manifiesto' && (
          <PurposeManifestoLab initialArchetype={initialArchetype} />
        )}

        {activeTab === 'horizontes' && (
          <CareerHorizons
            onSelectDegree={handleSelectDegree}
            onStartCompass={handleStartTest}
          />
        )}
      </main>

      {/* UNED Associated Centers Finder Modal */}
      <UnedCentersFinder
        isOpen={isCentersModalOpen}
        onClose={() => setIsCentersModalOpen(false)}
      />

      {/* Institutional Academic Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenCenters={() => setIsCentersModalOpen(true)}
      />
    </div>
  );
}
