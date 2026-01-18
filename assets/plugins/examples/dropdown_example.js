function onLoad() {
  registerPluginActions({
    chooseTheme: function (value) {
      sendToFlutter({ type: "showSnackbar", message: "Theme: " + value });
    }
  });

  return {
    name: "Dropdown Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "dropdown",
          id: "themeDropdown",
          label: "Select Theme",
          placeholder: "Pick one",
          options: [
            { label: "System", value: "system", icon: "phone_iphone" },
            { label: "Light", value: "light", icon: "light_mode" },
            { label: "Dark", value: "dark", icon: "dark_mode" }
          ],
          action: "chooseTheme",
          defaultValue: "system"
        }
      ]
    }
  };
}
