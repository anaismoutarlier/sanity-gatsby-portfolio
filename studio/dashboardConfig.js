export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61b73ddcaa4aa5f52a4a21aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g4qcgpkm',
                  apiId: '4a8e2022-124f-4783-bf3a-7d3ba9fb0d50'
                },
                {
                  buildHookId: '61b73ddc1fc60bfcc232a6e0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ecohdz3b',
                  apiId: '5829e74f-6cd9-470d-bdb6-af83630ac833'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anaismoutarlier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ecohdz3b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
