function onLoad() {
  registerPluginActions({
    saveLayout: function () {
      sendToFlutter({ type: "showSnackbar", message: "Layout saved" });
    }
  });

  return {
    name: "Container/Layout Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "label",
          id: "containerTitle",
          text: "Container nests child components",
          variant: "subtitle"
        },
        {
          type: "button",
          id: "saveLayoutButton",
          label: "Save",
          style: "primary",
          action: "saveLayout"
        },
        {
          type: "container",
          id: "columnContainer",
          direction: "column",
          gap: 8,
          padding: 12,
          children: ["containerTitle", "saveLayoutButton"]
        }
      ]
    }
  };
}
