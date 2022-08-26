
let data = {
    players: 
    [
        {
            "id": "1",
            "name": "Gonzo"
        },
        {
            "id": "2",
            "name": "Fernando"
        }
    ],
    info: 
    [
        {
            "info": "info1"
        },
       
    ]
}
class server{
    constructor(){
        this.data = {
            players: data.players,
            other: data.info
        }
    }
    getData(data){
        return this.data
    }
}
export default server;
