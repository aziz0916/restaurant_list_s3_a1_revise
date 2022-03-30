function getSortQuery(condition) {
  //Object.freeze()是用來「凍結」一個物件的，防止物件被改變，所以無法去修改sortEnum的內容
  const sortEnum = Object.freeze({
    NAME_ASC: 1,
    NAME_DESC: 2,
    CATEGORY_ASC: 3,
    LOCATION_ASC: 4
  })
  const result = {}

  switch (condition) {
    case sortEnum.NAME_ASC:
      result.name = 'asc'
      break
    case sortEnum.NAME_DESC:
      result.name = 'desc'
      break
    case sortEnum.CATEGORY_ASC:
      result.category = 'asc'
      break
    case sortEnum.LOCATION_ASC:
      result.location = 'asc'
      break
  }
  return result
}

module.exports = getSortQuery