function onLoad() {
  registerPluginActions({});

  return {
    name: "Image Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "image",
          id: "bannerImage",
          src: "assets/plugins/examples/image.png",
          alt: "Random banner",
          fit: "cover",
          rounded: true
        }
      ]
    }
  };
}
