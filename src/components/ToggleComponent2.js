import { useState }from 'react'
import KeyPress from './KeyPress'
import '../App.css'

const ToggleComponent2 = () => {

    const [backgroundColor, setBackgroundColor] = useState('green');
    
    const onBackgroundChange = color => {
        setBackgroundColor(color)
    }

    return (
        <KeyPress
            callBackBackground={onBackgroundChange}
            changeColor='brown'
            resetColor='green'
            currentColor={backgroundColor}
            combo='b'
            description='Turns the background color to brown and vice versa'
        >
            <div 
                className='card'
                style= {{ backgroundColor: backgroundColor }}
            >
               Press b to toggle the background color
            </div>
        </KeyPress>
        
    )
}

export default ToggleComponent2;