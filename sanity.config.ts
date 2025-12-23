import {defineConfig, buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {themePlugin} from './plugins/themePlugin'
import {theme} from 'https://themer.sanity.build/api/hues?preset=verdant&default=5c9199;950;lightest:e5fff1'



export default defineConfig({
  name: 'default',
  title: 'Ixplore',
  theme,
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


