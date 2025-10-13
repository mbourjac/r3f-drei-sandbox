import { createFileRoute } from '@tanstack/react-router';
import { PortalScene } from '../../pages/PortalScene/PortalScene';

export const Route = createFileRoute('/_scenes/portal-scene')({
  component: PortalScene,
});
