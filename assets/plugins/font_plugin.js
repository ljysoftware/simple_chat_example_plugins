function onLoad() {
  // Register actions with central registry provided by engine
  registerPluginActions({
    openFontPicker: function () {
      sendToFlutter({
        type: "showModal",
        title: "Select Font",
        options: [
          { label: "Default", value: "default" },
          { label: "Serif", value: "serif" },
          { label: "Monospace", value: "monospace" },
          { label: "Cursive", value: "cursive" },
          { label: "Roboto", value: "Roboto" },
          { label: "Courier New", value: "Courier New" }
        ],
        callback: "setFont"
      });
    },
    setFont: function (fontFamily) {
      sendToFlutter({
        type: "updateStyle",
        target: "chatMessage",
        style: { fontFamily: fontFamily }
      });
    }
  });

  return {
    name: "Font Plugin",
    version: "1.0",
    ui: {
      toolbarButtons: [
        { id: "fontButton", label: "Aa", icon: "format_size", action: "openFontPicker" }
      ]
    },
    messages: [
      "Hello plugin world!",
      "This message is from the plugin!",
      "Plugins can provide content too!"
    ]
  };
}