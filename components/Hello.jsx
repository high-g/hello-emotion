import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

const Hello = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <_H1>Hello!</_H1>
      </div>
    </ThemeProvider>
  )
}

const theme = {
  fonts: {
    mainFont: 'Avenir Next, sans-serif',
    subFont: 'Hira Kaku Pro N, sans-serif',
    textFont: 'Hiragino Sans',
    numberFont: 'Avenir Next, sans-serif',
  },
  colors: {
    mainColor: '#64363C',
    subTextColor: '#8E354A',
    lineColor: '#E6E5E4',
    backgroundColor: '#F8C3CD',
    titleBackgroudColor: '#F8F4F4',
    accentColor: '#EB7A77',
    stageColor: '#CB1B45',
  },
}

const _H1 = styled.h1`
  font-weight: 500;
  font-family: ${theme.fonts.mainFont};
  font-size: 28px;
  text-align: center;
  color: ${theme.colors.accentColor};
  margin-top: 8px;
  margin-bottom: 0;
`

export default Hello
