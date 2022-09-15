class Outcome{
    static buildOutcome(result=false,  message='outcome not createt properly', rest = {}){
       
        return {
            result: result,
            msg: message,
            rest: rest
        };
    }
}
export default Outcome;