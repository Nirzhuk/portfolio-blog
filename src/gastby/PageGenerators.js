
const generator = ({
  type: typeGenerator,
  node,
  template,
  config,
  extraContext
}) => {
  typeGenerator({
    path: `${ config ? config.prefix : '' }${ node.node.fields.slug }`,
    component: template,
    context: {
      slug: node.node.fields.slug,
      ...extraContext
    },
  })
}
module.exports = { generator }
