function onLoad() {
  registerPluginActions({
    toggleBeta: function (checked) {
      sendToFlutter({
        type: "showSnackbar",
        message: checked ? "Beta access enabled" : "Beta access disabled"
      });
    }
  });

  return {
    name: "Checkbox Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "checkbox",
          id: "betaToggle",
          label: "Enable beta features",
          description: "Try experimental UI changes",
          defaultChecked: true,
          action: "toggleBeta"
        }
      ]
    }
  };
}
