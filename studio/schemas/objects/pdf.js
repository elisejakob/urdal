export default {
  name: 'pdf',
  type: 'object',
  title: 'PDF',
  fields: [
    {
      name: 'pdfFile',
      type: 'file',
      title: 'File'
    },
    {
      name: 'downloadText',
      type: 'string',
      title: 'Download text',
      description: 'The text label for the link visitors click on to download the file.'
    }
  ],
  preview: {
    select: {
      title: 'downloadText'
    }
  }
}
