function onLoad() {
    registerPluginActions({
      openMessages: function () {
        sendToFlutter({
          type: "showModal",
          title: "Messages",
          options: [
            { label: "All Messages", value: "all" },
            { label: "Unread", value: "unread" }
          ],
          callback: "handleMessageAction"
        });
      },
      openPlugins: function () {
        sendToFlutter({
          type: "showModal",
          title: "Plugin Manager",
          options: [
            { label: "Installed Plugins", value: "installed" },
            { label: "Plugin Store", value: "store" }
          ],
          callback: "handlePluginAction"
        });
      },
      openSettings: function () {
        sendToFlutter({
          type: "showModal",
          title: "Settings",
          options: [
            { label: "General", value: "general" },
            { label: "Account", value: "account" },
            { label: "Theme", value: "theme" }
          ],
          callback: "handleSettingAction"
        });
      },
      handleMessageAction: function (action) {
        sendToFlutter({ type: "showSnackbar", message: "Messages: " + action });
      },
      handlePluginAction: function (action) {
        sendToFlutter({ type: "showSnackbar", message: "Plugins: " + action });
      },
      handleSettingAction: function (action) {
        sendToFlutter({ type: "showSnackbar", message: "Settings: " + action });
      }
    });
  
    return {
      name: "Menu Plugin",
      version: "1.0",
      ui: {
        bottomNavMode: "append",
        bottomNavItems: [
          { id: "msgNav", label: "Messages", icon: "message", action: "openMessages" },
          { id: "pluginNav", label: "Plugins", icon: "plugins", action: "openPlugins" },
          { id: "settingsNav", label: "Settings", icon: "settings", action: "openSettings" }
        ]
      }
    };
  }