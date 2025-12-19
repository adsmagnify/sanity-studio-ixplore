import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {themePlugin} from './plugins/themePlugin'

export default defineConfig({
  name: 'default',
  title: 'Ixplore',

  projectId: 'r8vvgwgu',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    themePlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})
