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
    static sanitizePassword(password) {
        // Remove any leading or trailing whitespace
        const sanitizedPassword = password.trim();

        // Remove any non-alphanumeric characters (except for some special characters)
        const regex = /[^a-zA-Z0-9@$!%*?&-_]/g;
        return sanitizedPassword.replace(regex, '');
    }

    static sanitizeEmail(email) {
        // Remove any leading or trailing whitespace
        const sanitizedEmail = email.trim();

        // Remove any non-alphanumeric characters (except for some special characters)
        const regex = /[^a-zA-Z0-9@._-]/g;
        return sanitizedEmail.replace(regex, '');
    }

    static validatePassword = (pass) => {
        const missingRequirements = [];
        let isPassValid = true;

        // Check if given requirement is fulfilled
        const chackSingleRequirement = (reg, msg) => {
            if (!pass.match(reg)) {
                missingRequirements.push(msg);
                isPassValid = false;
            }
        }
        // Run chackSingleRequirement() with all password requirments
        chackSingleRequirement(/[a-z]/, { id: 1, msg: 'Use at leat one lowercase letter' });
        chackSingleRequirement(/[A-Z]/, { id: 2, msg: 'Use at leat one capital letters' });
        chackSingleRequirement(/\d/, { id: 3, msg: 'Use at leat one digit' });
        chackSingleRequirement(/[@$!%*?&]/, { id: 4, msg: 'Use at leat one special character' });

        // Check for lenght
        if (pass.length < 10) {
            missingRequirements.push({ id: 5, msg: 'Pasword is to short, password has to be at least 10 characters long' })
            isPassValid = false;
        }

        const result = Outcome.buildOutcome(isPassValid, 'validation password', missingRequirements)
        return result;
    }
}
export default Validate;