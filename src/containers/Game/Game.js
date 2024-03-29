// Css
import "./Game.css"

// React stuff
import React, { Component } from 'react';

// Redux
import { connect } from "react-redux"
import { fillBothBoards } from "./redux/actions";

// Components
import Draw from '../../components/GameParts/Draw/Draw';
import GameConsole from "../../components/GameParts/GameConsole/GameConsole"
import Head from "../../components/Atoms/Head/Head";
import InGameMenu from "../../components/GameParts/InGameMenu/InGameMenu";

// Classes
import gm from "../../classes/GameMenager/gameMenager"

const mapStateToProps = (state) => {
    return {
        menuVisibility: state.inGameMenu.menuVisibility,
        consoleText: state.changeGameConsole.consoleText,
        consoleTime: state.changeGameConsole.consoleTime,
        playerBoard: state.changeBoard.playerBoard,
        enemyBoard: state.changeBoard.enemyBoard,
        setup: state.setupGame
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setupBoards: () => dispatch(fillBothBoards(gm.player.board, gm.enemy.board))
    }
}

// Enetry point of the game in the view side
class Game extends Component {
    constructor(props) {
        super(props)
        gm.setupTheGame(this.props.setup);

    }
    componentDidMount() {
        this.props.setupBoards(gm);
    }
    render() {
        return (
            <>
                <Head />
                <div className="game">
                    <InGameMenu
                        menuVisibility={this.props.menuVisibility}
                    />

                    <div className='player-board' >
                        <Draw
                            whichBoard={gm.player.name}
                        />
                    </div>
                    <div className='enemy-board'>
                        <Draw
                            whichBoard={gm.enemy.name}
                        />
                    </div>
                </div>
                <GameConsole />
            </>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);
