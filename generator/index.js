module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vrf': '>=0.68'
    }
  })
  api.render('./templates')
  api.injectImports(api.entryFile, "import './plugins/vrf'")
}