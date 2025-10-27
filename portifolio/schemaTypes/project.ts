import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descrição Curta (para cards)',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição Completa (para página de detalhes)',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imageUrl', 
      title: 'URL da Imagem Principal',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
     name: 'order',
     title: 'Ordem (menor aparece primeiro)',
     type: 'number',
     initialValue: 0,
    }),
    defineField({
      name: 'tags',
      title: 'Tecnologias (Tags)',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'liveUrl',
      title: 'URL do Projeto Online (Deploy)',
      type: 'url',
    }),
    defineField({
      name: 'repoUrl',
      title: 'URL do Repositório (GitHub)',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'É Projeto em Destaque (aparece na home)?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [ 
     {
       title: 'Ordem de Exibição',
       name: 'displayOrder',
       by: [
         {field: 'order', direction: 'asc'}
       ]
     },
     {
       title: 'Título',
       name: 'titleAsc',
       by: [
         {field: 'title', direction: 'asc'}
       ]
     }
  ]
})