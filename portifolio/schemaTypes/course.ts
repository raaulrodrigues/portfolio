import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Curso',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Plataforma / Instituição',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Detalhes (opcional)',
      type: 'string',
    }),
    defineField({
     name: 'order',
     title: 'Ordem (menor aparece primeiro)',
     type: 'number',
     initialValue: 0,
    }),
  ],
  orderings: [
     { title: 'Ordem', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}] }
  ]
})