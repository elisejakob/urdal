import icon from 'react-icons/lib/md/av-timer'

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
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
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