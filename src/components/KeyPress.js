import KeyboardEventHandler from 'react-keyboard-event-handler';
import '../App.css'
const KeyPress = (props) => {

    const handleKeyPress = (key) => {
        if (key === props?.combo) {
            if (props?.currentColor === props?.resetColor) {
                props.callBackBackground(props?.changeColor)
            } else {
                props.callBackBackground(props?.resetColor) 
            }
        }
    }

    return (
        <div className='key-press'>
             <div
                className='description'
             >
                 {props?.description}
            </div>
            <KeyboardEventHandler 
                handleKeys={['all']} 
                onKeyEvent={(key) => handleKeyPress(key)} 
            />
            <div>
                {props?.children}
            </div>
        </div>
    )
}

export default KeyPress;