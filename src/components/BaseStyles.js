import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const BaseStyles = () => injectGlobal`
  ${reset}
`

export default BaseStyles
