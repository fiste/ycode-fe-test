export function defaultLayer() {
  const layer = {
    id: Date.now(),
    name: `Layer ${this.layers.length + 1}`,
    text: "Add some text",
    selected: false,
    design: [
      {
        name: "font",
        list: ["arial", "verdana", "helvetica"],
        selected: "arial",
      },
      {
        name: "align",
        list: ["left", "center", "right"],
        selected: "left",
      },
      {
        name: "size",
        list: ["sm", "base", "lg"],
        selected: "sm",
      },
      {
        name: "color",
        list: ["current", "black", "white"],
        selected: "current",
      },
    ],
  };

  return layer;
}
