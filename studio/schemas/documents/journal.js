import icon from 'react-icons/lib/md/library-books'

export default {
  name: 'journal',
  type: 'document',
  title: 'Journal',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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