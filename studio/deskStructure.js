import S from '@sanity/desk-tool/structure-builder'
import MdPerson from 'react-icons/lib/md/person'
import MdEventNote from 'react-icons/lib/md/event'
import MdInfo from 'react-icons/lib/md/info-outline'

const hiddenDocTypes = listItem =>
  !['project', 'about'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('About')
        .icon(MdPerson)
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
