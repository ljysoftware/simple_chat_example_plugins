function onLoad() {
  registerPluginActions({
    setVolume: function (value) {
      sendToFlutter({ type: "showSnackbar", message: "Volume: " + value });
    }
  });

  return {
    name: "Slider Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "slider",
          id: "volumeSlider",
          label: "Volume",
          min: 0,
          max: 100,
          step: 5,
          defaultValue: 50,
          action: "setVolume"
        }
      ]
    }
  };
}
