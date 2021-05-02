import { css } from '@emotion/react'

const Hello = () => {
  return (
    <div css={hello}>
      <h1>Hello!</h1>
    </div>
  )
}

const hello = css`
  color: red;

  @media (max-width: 768px) {
    color: blue;
  }
`

export default Hello
