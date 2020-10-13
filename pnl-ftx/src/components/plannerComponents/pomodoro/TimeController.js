import React, {useContext} from 'react'
import {TimeContext} from "./TimerProvider"
import "./TimeController.css"
import {Button} from "./Button"

export function TimeController(props) {
    const [timer,setTimer] = useContext(TimeContext);
    // update session time / break time onClick
    const changeTimer = operator => {
        let mode = timer.mode;
        console.log(mode);
        if (timer.mode === props.type) {
            console.log('same mode');
            if (operator === 'decrement' && timer[props.type] > 60) {
                //if the current mode && the type are equal change the currentTime & startingTime
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] - 60, // change session / break time
                    time: {
                        currentTime: timer[timer.mode] - 60,
                        startingTime: timer[timer.mode] - 60
                    }
                });
            }
            if (operator === 'increment' && timer[props.type] < 3600) {
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] + 60,
                    time: {
                        currentTime: timer[timer.mode] + 60,
                        startingTime: timer[timer.mode] + 60
                    }
                });
            }
        } else {
            let time = timer.time;
            if (operator === 'decrement' && timer[props.type] > 60) {
                //if the current mode && the type are equal change the currentTime & startingTime
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] - 60, // change session / break time
                    time: time
                });
            }
            if (operator === 'increment' && timer[props.type] < 3600) {
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] + 60,
                    time: time
                });
            }
        }
    };
    return (
        <div className="TimeController">
            <div className="TimeController-button">
                <Button
                actionClick={() => changeTimer('decrement')}
                className="controlButton"
                buttonId={`${props.type}-decrement`}
            >
                -
            </Button>
            <Button
                actionClick={() => changeTimer('increment')}
                className="controlButton"
                buttonId={`${props.type}-increment`}
            >
                +
            </Button>
            
            </div>
            
            <div className="wrapperDisplay">
                <span id={props.labelId} className="label">
                    {props.label}
                </span>
                <span id={props.lengthId} className="time">
                    {timer[props.type] / 60}
                </span>
            </div>
            
        </div>
    );
  }
