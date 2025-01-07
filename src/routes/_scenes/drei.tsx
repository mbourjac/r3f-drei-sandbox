import { createFileRoute } from '@tanstack/react-router';
import { Drei } from '../../pages/Drei/Drei';

export const Route = createFileRoute('/_scenes/drei')({
  component: Drei,
});
