import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experiência',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Cargo',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Empresa',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Período',
      type: 'string',
      description: 'Ex: jan de 2024 - presente',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tasks',
      title: 'Tarefas / Responsabilidades',
      type: 'array',
      of: [{type: 'string'}],
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