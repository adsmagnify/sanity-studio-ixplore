import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Ixplore Content')
    .items([
      // Main content sections
      S.listItem()
        .title('Destinations')
        .child(
          S.documentTypeList('destination')
            .title('All Destinations')
            .defaultOrdering([{field: 'name', direction: 'asc'}])
        ),
      S.listItem()
        .title('Tours & Packages')
        .child(
          S.documentTypeList('tour')
            .title('Tours & Packages')
            .defaultOrdering([{field: 'title', direction: 'asc'}])
        ),
      S.listItem()
        .title('Blog Posts')
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
        ),
      
      // Divider
      S.divider(),
      
      // Media
      S.listItem()
        .title('Media')
        .child(S.documentTypeList('sanity.imageAsset').title('Images')),
      
      // Settings
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
            ])
        ),
    ])

