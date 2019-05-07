exports.decorateConfig = config => {
  const colors = {
    black: '#21252B',
    red: '#E06C75',
    green: '#98C379',
    yellow: '#D19A66',
    blue: '#61AFEF',
    magenta: '#B57EDC',
    cyan: '#56B6C2',
    white: '#A9B2C3',
    lightBlack: '#5F6672',
    lightRed: '#E34234',
    lightGreen: '#66FF00',
    lightYellow: '#E5C07B',
    lightBlue: '#007FFF',
    lightMagenta: '#8B00FF',
    lightCyan: '#08E8DE',
    lightWhite: '#D4D7D9',
  }

  const backgroundColor = '#21252b'
  const foregroundColor = '#A9B2C3'
  const borderColor = '#080A0F'
  const cursorColor = '#A9B2C3'
  const cursorAccentColor = '#21252b'
  const selectionColor = '#A9B2C333'

  const css = `
    ${config.css || ''}

    .tabs_nav {
      background-color: #181A1F;
    }

    .tab_tab {
      border-bottom: 1px solid #080A0F;
      border-left: 1px solid #080A0F;
      background-color: transparent;
      color: #5F6672;
    }

    .tab_active {
      background-color: #21252b;
      color: #A9B2C3;
    }
  `

  return Object.assign({}, config, {
    colors,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    css,
  })
}
