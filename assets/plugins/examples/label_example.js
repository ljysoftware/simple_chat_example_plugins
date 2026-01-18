function onLoad() {
  // No actions needed for static labels, but the structure shows how to declare one.
  registerPluginActions({});

  return {
    name: "Label Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "label",
          id: "welcomeLabel",
          text: "This is a label!!",
          variant: "title",
          align: "center"
        },
        {
          type: "label",
          id: "helperLabel",
          text: "Labels can include icons",
          icon: "info",
          variant: "caption"
        }
      ]
    }
  };
}
