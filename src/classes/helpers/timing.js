class Timing {
    constructor(){
        this.currentdate = new Date();
        let h = this.currentdate.getHours();
        let m = this.currentdate.getMinutes();
        m = m <= 9 ? (`0${m}`) : m;
        this.datetime = `${h}:${m}`
    }
    static getCurrentTime = () =>{
        const currentdate = new Date();
        let h = currentdate.getHours();
        let m = currentdate.getMinutes();
        m = m <= 9 ? (`0${m}`) : m;
        const datetime = `${h}:${m}`

        return datetime
    }
}
export default Timing