function onLoad() {
  registerPluginActions({
    sayHello: function () {
      sendToFlutter({ type: "showSnackbar", message: "Button clicked!" });
    }
  });

  return {
    name: "Button Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "button",
          id: "helloButton",
          label: "Say Hello",
          icon: "thumb_up",
          style: "primary",
          action: "sayHello"
        }
      ]
    }
  };
}
