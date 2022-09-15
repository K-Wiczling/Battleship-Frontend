class Outcome {
    //Force every methods in the classes to return Outcome as a result 
    //Uniform way of returning results for methods
    static buildOutcome (result=false,  message='outcome not createt properly', rest = {}) {
        return {
            result: result,
            msg: message,
            rest: rest
        };
    }
}
export default Outcome;