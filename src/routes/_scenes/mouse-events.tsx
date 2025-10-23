import { createFileRoute } from '@tanstack/react-router';
import { MouseEvents } from '../../pages/MouseEvents/MouseEvents';

export const Route = createFileRoute('/_scenes/mouse-events')({
  component: MouseEvents,
});
