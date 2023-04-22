import Outcome from "./helpers/outcome";
import server from "./server";

// Frontend Validation 
class Validate {
    params = server.Params;
    constructor() {
        this.range = this.params.clasicBoard.length - 1;
        this.player = this.params.players;
    }

    // GAME VALIDATORS

    // Valide if click is inside the boudries of the Clasic board
    validateBoardClick = (whichBoard, position, boardSize) => {
        if (whichBoard === this.player.enemy || this.player.player) {
            if (position.x >= 1 && position.x <= boardSize) {
                if (position.y >= 1 && position.y <= boardSize)
                    return true;
            }
        }
        return false;
    }

    // WEBSITE FORM VALIDATORS & SANITIZERS
    
    static validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }

    static validateName = (name) => {
        const missingRequirements = [];
        let isNameValid = true;

        // Allow only Letters and Numbers
        const regex = /^[a-zA-Z\d]*$/;
        
        // Check name for regex
        if(!regex.test(name)){
            isNameValid = false;
            missingRequirements.push({
                id: 8, 
                msg: 'Name: name can onaly contain Leters and numbers'
            });
        }
        
        // Check if name is proper lenght 
        if(name.length < 6){
            isNameValid = false;
            missingRequirements.push({
                id: 9, 
                msg: 'Name: has to be at least 6 characters'
            });
        }
        
        // Retrun Outcom object 
        const result = Outcome.buildOutcome(isNameValid, 'validation name', missingRequirements)
        return result;
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
        chackSingleRequirement(/[a-z]/, { id: 1, msg: 'Password: Use at leat one lowercase letter' });
        chackSingleRequirement(/[A-Z]/, { id: 2, msg: 'Password: Use at leat one capital letters' });
        chackSingleRequirement(/\d/, { id: 3, msg: 'Password: Use at leat one digit' });
        chackSingleRequirement(/[@$!%*?&]/, { id: 4, msg: 'Password: Use at leat one special character' });

        // Check for lenght
        if (pass.length < 10) {
            missingRequirements.push({ id: 5, msg: 'Password: is to short, password has to be at least 10 characters long' })
            isPassValid = false;
        }

        // Return outcome object
        const result = Outcome.buildOutcome(isPassValid, 'validation password', missingRequirements)
        return result;
    }
}
export default Validate;