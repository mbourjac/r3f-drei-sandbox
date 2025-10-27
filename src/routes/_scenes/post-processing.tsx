import { createFileRoute } from '@tanstack/react-router';
import { PostProcessing } from '../../pages/PostProcessing/PostProcessing';

export const Route = createFileRoute('/_scenes/post-processing')({
  component: PostProcessing,
});
