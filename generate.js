module.exports = function() {
    var faker = require('faker')
    var _ = require('lodash')

    return {
        products: _.times(100, function(n) {
            return {
                id: n,
                title: faker.lorem.sentence(),
                category: faker.lorem.sentence(2),
                price: faker.finance.amount(10, 100, 2, '$'),
                photo: faker.image.imageUrl(320, 240, 'technics')
            }
        }),
        categories: _.times(20, function(n) {
            return {
                id: n,
                category_name: faker.lorem.sentence(2)
            }
        })
    }
}

