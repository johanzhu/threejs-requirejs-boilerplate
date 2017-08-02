({
    appDir: './',
    baseUrl: './',
    dir: '../dist',
    modules: [
        {
            name: 'app/main',
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    optimize:'none',
    removeCombined: true,
    keepBuildDir: false,
    findNestedDependencies:true,

    paths: {
        three: 'lib/three',
        MTLLoader: 'lib/MTLLoader',
        OBJLoader: 'lib/OBJLoader'
       },
    shim: {
    	three: {
      	 	exports: 'three'
      	 },
        MTLLoader: {
          deps: ['three'],
          exports: 'MTLLoader'
        },
        OBJLoader: {
          deps: ['three'],
          exports: 'OBJLoader'
        }
    },
    wrap: {
        start: "(function() {",
        end: "}());"
    }
})