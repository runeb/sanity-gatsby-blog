export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e3294e7bb0210bd7bb2e47a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3tfxds5o',
                  apiId: 'c71c638e-c769-4448-9866-b41caae605c3'
                },
                {
                  buildHookId: '5e3294e834a5ac1059e7cf3b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8t94555p',
                  apiId: '4a8243f5-1f82-42ca-af5b-60d73ff7103b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8t94555p.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
