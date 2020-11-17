export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    },
    {
      name: 'document-list',
      options: {title: 'Recent journal entries', order: '_createdAt desc', types: ['journal']},
      layout: {width: 'medium'}
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '',
                  title: 'Studio',
                  name: 'urdal-studio',
                  apiId: '697ccadb-36cc-4100-94d3-a038fa158c14'
                },
                {
                  buildHookId: '5f63660eb9988c00a14defde',
                  title: 'Website',
                  name: 'urdal',
                  apiId: '50c69441-a550-44d6-86d3-c0dc19ac19a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elisejakob/urdal',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://urdal.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ]
}
