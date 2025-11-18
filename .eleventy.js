module.exports = function (eleventyConfig) {
  // Ensure static assets like CSS are available
  eleventyConfig.addPassthroughCopy("referancestyle");

  // Collection for Insurance OS modules
  eleventyConfig.addCollection("insuranceModules", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/modules/**/*.md")
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
