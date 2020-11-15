export default {
  name: 'general',
  type: 'document',
  title: 'General',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'journal',
      type: 'text',
      title: 'Journal lead',
      description: 'Intro text displayed in the header of the journal page.'
    },
    {
      name: 'footer',
      type: 'footer',
      title: 'Footer'
    },
    {
      name: 'mainColor',
      type: 'color',
      title: 'Main color',
      description: 'Used when hovering the cursor over links in the main menu and footer, plus on the border of the front page bio.'
    },
    {
      name: 'ogimg',
      type: 'image',
      title: 'Facebook image',
      description: 'Displayed when sharing the website on Facebook and other social media platforms if no other image is available.'
    }
  ],
  preview: {
    select: {
      body: 'lead'
    },
    prepare ({body = []}) {
      const block = body.find(block => block._type === 'block')
      return {
        title: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title'
      }
    }
  }
}
