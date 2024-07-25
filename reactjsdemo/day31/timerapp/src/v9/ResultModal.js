import React, { useRef, forwardRef, useImperativeHandle } from 'react'

//forwarding refs
const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    const dialog = useRef();
    //now TimerChallenge and ResultModal are de-coupled, if the dialog implementation of ResultModal
    //changes, then TimerChallenge will not affected by it
    useImperativeHandle(
        ref, () => {
            return {
                hello() {
                    alert('called from TimerChallenge, executed from ResultModal');
                },
                open() {
                    dialog.current.showModal();
                }
            }
        }
    );
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Your {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal