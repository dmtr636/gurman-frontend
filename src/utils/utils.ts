export const isNight = () => {
    let hours = new Date().getHours()
    return false
    return hours >= 22 || hours <= 3;
}

export const isWorkingTime = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();

    // 0 — воскресенье
    if (day === 0) {
        return false;
    }

    return hours >= 11 || hours < 2;
};
