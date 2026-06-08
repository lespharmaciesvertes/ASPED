'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'APSED — Administration',
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    // Vision : outil d'exploration GROQ (utile en admin).
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
