const Encore = require('@symfony/webpack-encore');

// Configure runtime environment
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // Output configuration
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    
    /*
     * ENTRY CONFIG
     * Chaque entrée produit un JS (et un CSS si SCSS est importé).
     */
    .addEntry('app', './assets/app.js')                    // JS principal
    .addEntry('app_styles', './assets/styles/app.scss')    // SCSS principal
    .addEntry('datatables', './assets/datatables.js')
    .addEntry('articles_list', './assets/articles_list.js')
    .addEntry('like', './assets/like.js')
    .addEntry('article', './assets/article.js')
    .addEntry('article_list', './assets/article_list.js')

    // Optimisations
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()

    // Optional: notifications
    //.enableBuildNotifications()

    // Debug & prod
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Babel
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // SCSS
    .enableSassLoader()

    // Uncomment if needed
    //.enableTypeScriptLoader()
    //.enableReactPreset()
    //.enableIntegrityHashes(Encore.isProduction())
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
