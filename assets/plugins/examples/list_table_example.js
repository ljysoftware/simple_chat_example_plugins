function onLoad() {
  registerPluginActions({
    openItem: function (id) {
      sendToFlutter({ type: "showSnackbar", message: "Open item: " + id });
    }
  });

  return {
    name: "List/Table Component Example",
    version: "1.0.0",
    ui: {
      components: [
        {
          type: "table",
          id: "downloadsTable",
          columns: [
            { id: "file", label: "File" },
            { id: "size", label: "Size" }
          ],
          items: [
            { id: "readme", label: "README.md", description: "Docs", action: "openItem" },
            { id: "changelog", label: "CHANGELOG.md", description: "Release notes", action: "openItem" }
          ],
          emptyState: "No files found"
        }
      ]
    }
  };
}
