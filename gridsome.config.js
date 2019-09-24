// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')
const postcssPlugins = [
  require('postcss-import'),
  tailwind('./tailwind.config.js'),
  require('postcss-preset-env')({ stage: 1 })
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'WorkMedLC',
  siteUrl: 'https://www.workmedlc.com/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    // {
    //   use: 'gridsome-plugin-tailwindcss',
    //   options: {
    //     tailwindConfig: './tailwind.config.js',
    //     purgeConfig: {},
    //     presetEnvConfig: {},
    //     shouldPurge: true,
    //     shouldImport: true,
    //     shouldTimeTravel: true,
    //   }
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me']
      }
    }
  ],
}
