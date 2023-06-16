const { ValidationError } = require('../mappers/custom.exception').errorMappers

exports.calculatePagination = async (transaction, page, limit, sortCritteria, itemName) => {
    let response = ""

    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
        throw new ValidationError("Pagination values are not valid")
    }

    if(sortCritteria !== "asc" && sortCritteria !== "desc") {
        console.log(sortCritteria)
        throw new ValidationError("sort value is not valid")
    }

    let count = await transaction.countElements()
    if (count <= 0) {
        return response
    }

    const items = await transaction.readElements(limit, page, sortCritteria, itemName)
    return {
        items,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    }
}