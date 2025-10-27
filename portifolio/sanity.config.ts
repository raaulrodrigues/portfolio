import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import project from './schemaTypes/project'
import experience from './schemaTypes/experience'
import course from './schemaTypes/course'
import skillGroup from './schemaTypes/skillGroup'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Raul Studio',

  projectId: 'ed8h2w31',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [project, experience, course, skillGroup],
  },
})