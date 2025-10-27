import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillGroup',
  title: 'Grupo de Habilidade',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Grupo (ex: Frontend)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'className',
      title: 'Classe CSS Adicional (opcional, ex: softSkills)',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Habilidades',
      type: 'array',
      of: [
        defineField({
          name: 'skill',
          title: 'Habilidade',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Nome', type: 'string', validation: Rule => Rule.required()}),
            defineField({name: 'icon', title: 'URL do Ícone (opcional)', type: 'url'}),
          ],
        }),
      ],
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