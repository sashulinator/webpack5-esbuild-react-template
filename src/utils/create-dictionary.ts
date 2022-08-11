// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createDictionary<TListItem extends Record<string, any>>(
  key: keyof TListItem,
  list: TListItem[]
): Record<TListItem[typeof key], TListItem> {
  return list.reduce<Record<string, TListItem>>((acc, item) => {
    const name = item[key] as string
    acc[name] = item
    return acc
  }, {})
}

export default createDictionary
