import { createFileRoute } from '@tanstack/react-router';
import { Text3D } from '../../pages/Text3D/Text3D';

export const Route = createFileRoute('/_scenes/text-3d')({
  component: Text3D,
});
