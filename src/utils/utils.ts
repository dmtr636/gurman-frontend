export const isNight = () => {
    let hours = new Date().getHours()

    return hours >= 22 || hours < 8;
}