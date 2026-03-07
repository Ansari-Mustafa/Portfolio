import type { Metadata } from 'next';
import { AchievementsPage } from './AchievementsPage';

export const metadata: Metadata = {
  title: 'Achievements & Projects',
  description:
    'Academic achievements, competition wins, and university projects in ML, robotics, and embedded systems.',
};

export default function Page() {
  return <AchievementsPage />;
}
