//Validating 
export const validateGridInput = (p) => {
    if(p.x >= 0 && p.x <= 9 && p.y >= 0 && p.y <= 9){
        if(p.player === "own" || p.player === "enemy"){
            return true;
        }
        return false
    }
}