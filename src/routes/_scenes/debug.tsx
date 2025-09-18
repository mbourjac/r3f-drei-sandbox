import { createFileRoute } from '@tanstack/react-router';
import { Debug } from '../../pages/Debug/Debug';

export const Route = createFileRoute('/_scenes/debug')({
  component: Debug,
});
