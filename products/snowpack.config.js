// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mode: "development",
  mount: {
    // directory name: 'build directory'
    public: '/',
    // get everything form src to build
    src: "/dist",
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 8081,
  },
  buildOptions: {
    /* ... */
  },
};
