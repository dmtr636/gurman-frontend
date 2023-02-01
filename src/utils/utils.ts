export const isNight = () => {
    let hours = new Date().getHours()
    return false
    return hours >= 22 || hours <= 3;
}

export const isWorkingTime = () => {
    let hours = new Date().getHours()

    return hours >= 10 || hours < 3;
}
