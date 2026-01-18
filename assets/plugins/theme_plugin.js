function onLoad() {
  registerPluginActions({
    setTheme: function (value) {
      sendToFlutter({
        type: "updateStyle",
        target: "app",
        style: { theme: value }
      });
      sendToFlutter({ type: "showSnackbar", message: "Theme changed to " + value });
    }
  });

  return {
    name: "Theme Plugin",
    version: "1.0",
    ui: {
      toolbarItems: [
        {
          id: "themeToggle",
          icon: "palette",
          tooltip: "Change Theme",
          action: "openThemeModal"
        }
      ]
    }
  };
}
