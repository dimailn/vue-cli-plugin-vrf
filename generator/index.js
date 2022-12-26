module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vrf': 'latest'
    }
  })
  api.render('./templates')
  api.injectImports(api.entryFile, "import './plugins/vrf'")
}