import icon from 'react-icons/lib/md/collections'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subhead',
      type: 'string',
      title: 'Subhead'
    },
    {
      name: 'publishedAt',
      title: 'Published',
      type: 'datetime'
    },
    {
      title: 'Feature on front page',
      name: 'featured',
      type: 'boolean'
    },
    {
      title: 'Ongoing project',
      name: 'ongoing',
      type: 'boolean'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'projectType',
      type: 'string',
      title: 'Project type',
      options: {
        list: [
          {value: 'journalism', title: 'Journalism'},
          {value: 'design', title: 'Design'}
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Lead'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
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
      projectType: 'projectType',
      media: 'image'
    },
    prepare ({title, media, projectType}) {
      return {
        title,
        media,
        subtitle: `${projectType}`
      }
    }
  }
}
