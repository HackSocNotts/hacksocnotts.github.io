const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      pages: allMarkdownRemark(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            id {
              fontmatter {
                slug
                template
              }
            }
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
    const { id, frontmatter } = page.node;
    const { slug, template } = frontmatter;

    createPage({
      path: slug,
      component: path.resolve(`src/templates/${String(template)}.js`),
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
