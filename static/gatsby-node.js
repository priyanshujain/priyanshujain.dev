/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const routes = require("./src/routes");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  Object.keys(routes).forEach(route => createPage(routes[route]));
}