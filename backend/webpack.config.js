const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // JS principal
    .addEntry('app', './assets/app.js')

    // SCSS en style séparé (évite conflit d'entrée)
    .addStyleEntry('app_styles', './assets/styles/app.scss')

    // Autres entrées JS
    .addEntry('datatables', './assets/datatables.js')
    .addEntry('articles_list', './assets/articles_list.js')
    // .addEntry('like', './assets/like.js')
    .addEntry('article', './assets/article.js')
    // .addEntry('article_list', './assets/article_list.js')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();