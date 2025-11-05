import * as projects from './projects';
import { ProjectConfig } from '@/types';

export const projectRegistry: Record<string, ProjectConfig> =
  Object.fromEntries(
    Object.entries(projects).map(([key, mod]) => [key, mod.project])
  );
