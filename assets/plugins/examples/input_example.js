function onLoad() {
  registerPluginActions({
    submitName: function (value) {
      sendToFlutter({ type: "showSnackbar", message: "Hello, " + value });
    }
  });

  return {
    name: "Input Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "input",
          id: "nameInput",
          label: "Your Name",
          placeholder: "Enter a name",
          keyboard: "text",
          validation: { required: true, minLength: 2 },
          action: "submitName"
        }
      ]
    }
  };
}
