import ParticleField from '@/components/ParticleField';
import TopStatusBar from '@/components/TopStatusBar';
import HeroSection from '@/components/HeroSection';
import ActiveAssignments from '@/components/ActiveAssignments';
import DeployedSystems from '@/components/DeployedSystems';
import ServiceRecord from '@/components/ServiceRecord';
import Commendations from '@/components/Commendations';
import TrainingRecord from '@/components/TrainingRecord';
import EstablishComms from '@/components/EstablishComms';

export default function Home() {
  return (
    <>
      {/* Background starfield */}
      <ParticleField />

      {/* Fixed HUD status bar */}
      <TopStatusBar />

      {/* Main content */}
      <main className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ActiveAssignments />
        <DeployedSystems />
        <ServiceRecord />
        <Commendations />
        <TrainingRecord />
        <EstablishComms />

        {/* Footer */}
        <footer className="py-8 border-t border-[rgba(6,182,212,0.1)] text-center">
          <p className="font-mono text-[10px] uppercase tracking-wider text-text-dim">
            &copy; {new Date().getFullYear()} MUSTAFA ANSARI &nbsp;&bull;&nbsp;
            OPERATIVE PROFILE v2.0 &nbsp;&bull;&nbsp; ALL SYSTEMS NOMINAL
          </p>
        </footer>
      </main>
    </>
  );
}
