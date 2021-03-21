import { useState }from 'react'
import KeyPress from './KeyPress'
import '../App.css'

const ToggleComponent1 = () => {

    const [backgroundColor, setBackgroundColor] = useState('red');
    
    const onBackgroundChange = color => {
        setBackgroundColor(color)
    }

    return (
        <KeyPress
            callBackBackground={onBackgroundChange}
            changeColor='blue'
            resetColor='red'
            currentColor={backgroundColor}
            combo='a'
            description='Turns the background color to blue and vice versa'
        >
            <div 
                className='card'
                style= {{ backgroundColor: backgroundColor }}
            >
               Press a to toggle the background color
            </div>
        </KeyPress>
        
    )
}

export default ToggleComponent1;