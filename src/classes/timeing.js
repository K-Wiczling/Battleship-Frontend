class Timeing {
    constructor(){
        this.currentdate = new Date();
        let h = this.currentdate.getHours();
        let m = this.currentdate.getMinutes();
        m = m <= 9 ? (`0${m}`) : m;
        this.datetime = `${h}:${m}`
    }
    getCurrentTime = () =>{
        return this.datetime
    }
}
export default Timeing