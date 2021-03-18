function findMatching(drivers, name) {
    let foundDriver = drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return foundDriver
}
function fuzzyMatch(drivers, ab) {
    let fuzzyDriver = drivers.filter(function(driver){
        let firstTwo = driver.substring(0, 2)
        if (firstTwo === ab)
            return driver
    })
    return fuzzyDriver
}
function matchName(drivers, name) {
    let matchedName = drivers.filter(function(driver) {
        if (driver.name === name) {
            return driver
        }
    })
    return matchedName
}