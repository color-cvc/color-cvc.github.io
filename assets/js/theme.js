// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle through light, dark, and system theme settings.
// let toggleThemeSetting = () => {
//   let themeSetting = determineThemeSetting();
//   if (themeSetting == "system") {
//     setThemeSetting("light");
//   } else if (themeSetting == "light") {
//     setThemeSetting("dark");
//   } else {
//     setThemeSetting("system");
//   }
// };

// Change the theme setting and apply the theme.
// let setThemeSetting = (themeSetting) => {
//   localStorage.setItem("theme", themeSetting);

//   document.documentElement.setAttribute("data-theme-setting", themeSetting);

//   applyTheme();
// };

// Apply the computed dark or light theme to the website.
let applyTheme = () => {
  let theme = "light"; // Fixed to "light" or change to "dark"

  document.documentElement.setAttribute("data-theme", theme);

  // Optional: Update other components (e.g., tables, mermaid, etc.)
};

let addMermaidZoom = (records, observer) => {
  var svgs = d3.selectAll(".mermaid svg");
  svgs.each(function () {
    var svg = d3.select(this);
    svg.html("<g>" + svg.html() + "</g>");
    var inner = svg.select("g");
    var zoom = d3.zoom().on("zoom", function (event) {
      inner.attr("transform", event.transform);
    });
    svg.call(zoom);
  });
  observer.disconnect();
};

let setMermaidTheme = (theme) => {
  if (theme == "light") {
    // light theme name in mermaid is 'default'
    // https://mermaid.js.org/config/theming.html#available-themes
    theme = "default";
  }

  /* Re-render the SVG, based on https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_includes/mermaid.html */
  document.querySelectorAll(".mermaid").forEach((elem) => {
    // Get the code block content from previous element, since it is the mermaid code itself as defined in Markdown, but it is hidden
    let svgCode = elem.previousSibling.childNodes[0].innerHTML;
    elem.removeAttribute("data-processed");
    elem.innerHTML = svgCode;
  });

  mermaid.initialize({ theme: theme });
  window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));

  const observable = document.querySelector(".mermaid svg");
  if (observable !== null) {
    var observer = new MutationObserver(addMermaidZoom);
    const observerOptions = { childList: true };
    observer.observe(observable, observerOptions);
  }
};

let setDiff2htmlTheme = (theme) => {
  document.querySelectorAll(".diff2html").forEach((elem) => {
    // Get the code block content from previous element, since it is the diff code itself as defined in Markdown, but it is hidden
    let textData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    const configuration = { colorScheme: theme, drawFileList: true, highlight: true, matching: "lines" };
    const diff2htmlUi = new Diff2HtmlUI(elem, textData, configuration);
    diff2htmlUi.draw();
  });
};

let setEchartsTheme = (theme) => {
  document.querySelectorAll(".echarts").forEach((elem) => {
    // Get the code block content from previous element, since it is the echarts code itself as defined in Markdown, but it is hidden
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    echarts.dispose(elem);

    if (theme === "dark") {
      var chart = echarts.init(elem, "dark-fresh-cut");
    } else {
      var chart = echarts.init(elem);
    }

    chart.setOption(JSON.parse(jsonData));
  });
};

let setVegaLiteTheme = (theme) => {
  document.querySelectorAll(".vega-lite").forEach((elem) => {
    // Get the code block content from previous element, since it is the vega lite code itself as defined in Markdown, but it is hidden
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    if (theme === "dark") {
      vegaEmbed(elem, JSON.parse(jsonData), { theme: "dark" });
    } else {
      vegaEmbed(elem, JSON.parse(jsonData));
    }
  });
};

let setSearchTheme = (theme) => {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) return;

  if (theme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
// let determineThemeSetting = () => {
//   let themeSetting = localStorage.getItem("theme");
//   if (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") {
//     themeSetting = "system";
//   }
//   return themeSetting;
// };

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
// let determineComputedTheme = () => {
//   let themeSetting = determineThemeSetting();
//   if (themeSetting == "system") {
//     const userPref = window.matchMedia;
//     if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
//       return "dark";
//     } else {
//       return "light";
//     }
//   } else {
//     return themeSetting;
//   }
// };

let initTheme = () => {
  // Force a fixed theme (e.g., "light")
  document.documentElement.setAttribute("data-theme", "light");

  // Optional: Remove event listeners for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", applyTheme);
};
