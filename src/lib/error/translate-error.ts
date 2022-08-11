import getErrorKey from './get-error-key'

import { i18n } from '@/app/i18n'

export default function translateError(error: unknown): string {
  const key = getErrorKey(error)

  return i18n.t(`t.errors.${key}`, key)
}
