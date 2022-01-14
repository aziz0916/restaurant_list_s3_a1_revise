function sortResult(option, response, Data) {
  switch (option) {
    case '1':
      return Data.find()
        .lean()
        .sort({ name: 'asc' })
        .then(restaurants => response.render('index', { restaurants, sort: option }))
        .catch(error => console.log(error))
    case '2':
      return Data.find()
        .lean()
        .sort({ name: 'desc' })
        .then(restaurants => response.render('index', { restaurants, sort: option }))
        .catch(error => console.log(error))
    case '3':
      return Data.find()
        .lean()
        .sort({ category: 'asc' })
        .then(restaurants => response.render('index', { restaurants, sort: option }))
        .catch(error => console.log(error))
    case '4':
      return Data.find()
        .lean()
        .sort({ location: 'asc' })
        .then(restaurants => response.render('index', { restaurants, sort: option }))
        .catch(error => console.log(error))
    default:
      response.redirect('/')
  }
}

module.exports = sortResult
