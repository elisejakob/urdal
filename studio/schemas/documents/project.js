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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug is the end of the URL for this page. It should be short and can not contain any spaces or special characters. Ex. theaurdal.com/projects/slug-goes-here',
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
      title: 'In Norwegian',
      name: 'norwegian',
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
    },
    {
      name: 'bgColor',
      type: 'color',
      title: 'Background color',
      description: 'Used as text background in the list of projects on the front page and project page.'
    },
    {
      name: 'textColor',
      type: 'color',
      title: 'Text color',
      description: 'Used as text and border color.'
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
