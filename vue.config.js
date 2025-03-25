const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,  // Asegura que Vue Options API funcione
        __VUE_PROD_DEVTOOLS__: false, // Desactiva devtools en producción
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false // 🔥 Solución para el error
      })
    ]
  }
});