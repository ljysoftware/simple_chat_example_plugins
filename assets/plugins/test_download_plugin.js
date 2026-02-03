function onLoad() {
  registerPluginActions({
    testAction: function() {
      sendToFlutter({ 
        type: "showSnackbar", 
        message: "Download test successful!" 
      });
    }
  });

  return {
    name: "Download Test Plugin",
    version: "1.0.0",
    ui: {
      toolbarButtons: [
        { id: "testBtn", label: "Test", icon: "check_circle", action: "testAction" }
      ]
    }
  };
}
