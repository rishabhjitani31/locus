import { useState }from 'react'
import KeyPress from './KeyPress'
import '../App.css'

const ToggleComponent3 = () => {

    const [backgroundColor, setBackgroundColor] = useState('yellow');
    
    const onBackgroundChange = color => {
        setBackgroundColor(color)
    }

    return (
        <KeyPress
            callBackBackground={onBackgroundChange}
            changeColor='orange'
            resetColor='yellow'
            currentColor={backgroundColor}
            combo='c'
            description='Turns the background color to orange and vice versa'
        >
            <div 
                className='card'
                style= {{ backgroundColor: backgroundColor }}
            >
               Press c to toggle the background color
            </div>
        </KeyPress>
        
    )
}

export default ToggleComponent3;