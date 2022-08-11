import * as R from 'ramda'
import { generatePath } from 'react-router-dom'

const generateUrl = R.curry(generatePath)

export default generateUrl
