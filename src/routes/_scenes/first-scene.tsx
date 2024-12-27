import { createFileRoute } from '@tanstack/react-router';
import { FirstScene } from '../../pages/FirstScene/FirstScene';

export const Route = createFileRoute('/_scenes/first-scene')({
  component: FirstScene,
});
