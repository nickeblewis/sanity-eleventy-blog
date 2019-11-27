export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dde8fa118e1b6883b2cffeb',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-93831s7p',
                  apiId: '0d4f4a8b-d160-46c5-91bc-ba5bc48af9b6'
                },
                {
                  buildHookId: '5dde8fa16d571551786a89d0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-uxjgu5q9',
                  apiId: '5dbad04a-4875-439a-934a-023100ee660d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-uxjgu5q9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
