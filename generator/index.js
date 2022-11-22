module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vrf': '^0.62.0'
    }
  })
  api.render('./templates')
  api.injectImports(api.entryFile, "import './plugins/vrf'")
}