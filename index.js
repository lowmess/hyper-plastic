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
    lightRed: '#D74E42',
    lightGreen: '#69C52E',
    lightYellow: '#E9D16C',
    lightBlue: '#1085FF',
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

    .header_header {
      background-color: #181A1F;
      border-bottom: 1px solid #080A0F;
    }

    .tabs_borderShim {
      border: 0;
    }

    .tab_tab {
      border: 0;
      border-left: 1px solid #080A0F;
      background-color: transparent;
      color: #5F6672;
    }

    .tab_active {
      border-top: 1px solid #1085FF;
      background-color: #21252b;
      color: #D4D7D9;
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
