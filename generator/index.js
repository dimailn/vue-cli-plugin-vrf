module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vrf': '^0.57.0'
    }
  })
  api.render('./templates')
  api.injectImports(api.entryFile, "import './plugins/vrf'")
}