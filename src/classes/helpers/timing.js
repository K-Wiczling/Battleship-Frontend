class Timing {
    // Get the current time in the format [HH:MM]
    static getCurrentTime = () => {
        const currentdate = new Date();
        let h = currentdate.getHours();
        let m = currentdate.getMinutes();
        m = m <= 9 ? (`0${m}`) : m;
        const datetime = `${h}:${m}`

        return datetime
    }
}
export default Timing