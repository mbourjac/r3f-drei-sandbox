import { createFileRoute } from '@tanstack/react-router';
import { ScenesLayout } from '../layouts/ScenesLayout';

export const Route = createFileRoute('/_scene')({
  component: ScenesLayout,
});
