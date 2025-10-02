import { createFileRoute } from '@tanstack/react-router';
import { LoadModels } from '../../pages/LoadModels/LoadModels';

export const Route = createFileRoute('/_scenes/load-models')({
  component: LoadModels,
});
