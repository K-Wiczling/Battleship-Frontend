import Outcome from "./helpers/outcome";
import server from "./server";

//Main validator for the GameMenager
class Validate {
    params = server.Params;
    constructor() {
        this.range = this.params.clasicBoard.length - 1;
        this.player = this.params.players;
    }

    //Valide if click is inside the boudries of the Clasic board
    validateBoardClick = (whichBoard, position, boardSize) => {
        if (whichBoard === this.player.enemy || this.player.player) {
            if (position.x >= 1 && position.x <= boardSize) {
                if (position.y >= 1 && position.y <= boardSize)
                    return true;
            }
        }
        return false;
    }

    static validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    static validatePassword = (pass) => {
        const missingRequirements = [];
        let isPassValid = true;

        const chackSingleRequirement = (reg, msg) => {
            if (!pass.match(reg)) {
                missingRequirements.push(msg);
                isPassValid = false;
            }
        }
        // Check for pass requirements
        chackSingleRequirement(/[a-z]/, 'lowercase letter');
        chackSingleRequirement(/[A-Z]/, 'capital letters');
        chackSingleRequirement(/\d/, 'digits');
        chackSingleRequirement(/[@$!%*?&]/, 'special character');
        
        // Check for lenght
        if (pass.length < 10) {
            missingRequirements.push('Pasword is to short')
            isPassValid = false;

        }

        const result = Outcome.buildOutcome(isPassValid, 'validation password', missingRequirements)
        return result;
    }
}
export default Validate;