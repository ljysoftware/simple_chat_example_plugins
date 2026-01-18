function onLoad() {
  registerPluginActions({
    confirmModal: function () {
      sendToFlutter({ type: "showSnackbar", message: "Confirmed!" });
    },
    cancelModal: function () {
      sendToFlutter({ type: "showSnackbar", message: "Canceled." });
    }
  });

  return {
    name: "Modal Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "modal",
          id: "sampleModal",
          title: "Sample Modal",
          body: "Use modal actions to confirm or cancel.",
          size: "small",
          actions: [
            { label: "OK", action: "confirmModal", role: "primary" },
            { label: "Cancel", action: "cancelModal", role: "secondary" }
          ],
          dismissible: true
        }
      ]
    }
  };
}
