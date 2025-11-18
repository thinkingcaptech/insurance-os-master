module.exports = function (eleventyConfig) {
  // Ensure static assets like CSS are available
  eleventyConfig.addPassthroughCopy("referancestyle");

  // Collection for Insurance OS modules
  eleventyConfig.addCollection("insuranceModules", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/modules/**/*.md")
  );

  // Create a custom collection for navigation
  eleventyConfig.addCollection("navigationData", function(collectionApi) {
    const allItems = collectionApi.getAll().map(item => {
      if (item.data.eleventyNavigation && item.data.eleventyNavigation.key) {
        return {
          key: item.data.eleventyNavigation.key,
          parent: item.data.eleventyNavigation.parent,
          order: item.data.eleventyNavigation.order || 0,
          url: item.url
        };
      }
      return null;
    }).filter(Boolean);

    const itemMap = {};
    const roots = [];

    // First pass: create a map
    allItems.forEach(item => {
      itemMap[item.key] = { 
        label: item.key,
        path: item.url,
        order: item.order,
        children: [] 
      };
    });

    // Second pass: build hierarchy
    allItems.forEach(item => {
      if (item.parent && itemMap[item.parent]) {
        itemMap[item.parent].children.push(itemMap[item.key]);
      } else {
        roots.push(itemMap[item.key]);
      }
    });
    
    // Sort children by order
    Object.values(itemMap).forEach(item => {
      if (item && item.children) {
        item.children.sort((a, b) => (a.order || 0) - (b.order || 0));
      }
    });

    // The template expects a 'sections' property which are the children of the root "Insurance OS"
    const insuranceOsRoot = roots.find(item => item && item.label === "Insurance OS");
    const sections = insuranceOsRoot ? insuranceOsRoot.children : [];
    
    // Sort top-level sections
    sections.sort((a, b) => (a.order || 0) - (b.order || 0));

    return {
      sections: sections
    };
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};