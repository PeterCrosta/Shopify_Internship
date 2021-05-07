import {useState} from 'react'

const Dropdown = props => {
    const {nominations, setNominations} = props
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <div 
            id='dropdownWrapper' 
            // onClick={toggle}
            >
            <h3 id='dropdownText' onClick={toggle}>Your nominations</h3>
            {open ? (
                <div id="dropdownItemWrapper">
                    <ul>
                        {nominations.map((mov, idx) => (
                            <div>
                                <li key={idx}>{mov.Title}</li>
                                <button 
                                    type='button'
                                    onClick={() => {
                                        setNominations([...nominations.slice(0,idx),...nominations.slice(idx+1)])
                                    }}
                                >Remove</button>
                            </div>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}


export default Dropdown