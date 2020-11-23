export default {
  name: 'journal',
  type: 'document',
  title: 'Journal',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug is the end of the URL for this page. It should be short and can not contain any spaces or special characters. Ex. theaurdal.com/journal/slug-goes-here',
      validation: Rule => Rule.error('The page needs a slug.').required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published',
      type: 'datetime'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Lead'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body text'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'richText',
          title: 'Text'
        },
        {
          type: 'mainImage',
          title: 'Image'
        },
        {
          type: 'pdf',
          title: 'PDF'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare ({title, media}) {
      return {
        title,
        media
      }
    }
  }
}
