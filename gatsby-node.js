const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      pages: allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                slug
                template
              }
            }
          }
        }
      }
      events: allMarkdownRemark(filter: { fields: { sourceName: { eq: "events" } } }) {
        nodes {
          id
          frontmatter {
            start(formatString: "YYYY/MM/DD")
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  const pages = result.data.pages.edges;
  pages.forEach((page) => {
    const { id, frontmatter } = page.node.childMarkdownRemark;
    const { slug, template } = frontmatter;

    createPage({
      path: slug,
      component: path.resolve(`src/templates/${String(template)}.jsx`),
      context: {
        id,
      },
    });
  });

  const events = result.data.events.nodes;
  events.forEach(({ id, frontmatter }) => {
    const slug = `${frontmatter.start}/${frontmatter.id}`;

    createPage({
      path: `/event/${slug}`,
      component: path.resolve(`src/templates/event-page.jsx`),
      context: {
        id,
      },
    });

    createPage({
      path: `/events/${slug}`,
      component: path.resolve(`src/templates/event-page.jsx`),
      context: {
        id,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ]);
};
