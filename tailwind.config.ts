/** @type {import('tailwindcss').Config} */
const {
  Setup,
  ColorTokens,
  ApplyColorVariables,
  Typography,
  Container,
  DevTools,
  GridGap,
  GridLayout,
  Spacing,
  Layout,
  GridLine
} = require("@area17/a17-tailwind-plugins")
const styleConfig = require("./style.config.json")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  plugins: [
    Setup,
    ColorTokens,
    ApplyColorVariables,
    Typography,
    Container,
    DevTools,
    GridGap,
    GridLayout,
    Spacing,
    Layout,
    GridLine
  ],
  corePlugins: {
    container: false
  },
  theme: {
    screens: styleConfig.structure.breakpoints,
    columnCount: styleConfig.structure.columns,
    mainColWidths: styleConfig.structure.container,
    innerGutters: styleConfig.structure.gutters.inner,
    outerGutters: styleConfig.structure.gutters.outer,
    typesets: styleConfig.typography.typesets,
    spacingGroups: styleConfig.spacing.groups,
    colors: styleConfig.color.tokens,
    borderColor: ApplyColorVariables(
      styleConfig.color.tokens,
      styleConfig.color.border
    ),
    textColor: ApplyColorVariables(
      styleConfig.color.tokens,
      styleConfig.color.text
    ),
    backgroundColor: ApplyColorVariables(
      styleConfig.color.tokens,
      styleConfig.color.background
    )
  }
}
