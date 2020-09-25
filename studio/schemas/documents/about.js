export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'About'
    }
  ],
  preview: {
    select: {
      body: 'body'
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
