export const isNight = () => {
    let hours = new Date().getHours()

    return hours >= 1 && hours < 8;
}