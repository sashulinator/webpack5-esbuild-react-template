import { IParseOptions } from 'qs'

export const booleanDecoder: IParseOptions['decoder'] = (str, defaultDecoder, charset, type) => {
  if (type === 'value' && (str === 'true' || str === 'false')) {
    return str === 'true'
  }

  return defaultDecoder(str, defaultDecoder, charset)
}
