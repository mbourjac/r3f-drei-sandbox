import { createFileRoute } from '@tanstack/react-router';
import { EnvironmentAndStaging } from '../../pages/EnvironmentAndStaging/EnvironmentAndStaging';

export const Route = createFileRoute('/_scenes/environment-and-staging')({
  component: EnvironmentAndStaging,
});
