import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './dropdown.css'


const Dropzao = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const sendTitle = (titulo) => props.getTitle(titulo);

    
        return (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    {props.grupo}
                </DropdownToggle>
                <DropdownMenu >
                    {props.titulos.map( (titulo) => 
                        <div>
                            <DropdownItem key={titulo} onClick={sendTitle(titulo)}>{titulo}</DropdownItem>
                        </div>
                    )};
                </DropdownMenu>
            </Dropdown>
        )
    
}

export default Dropzao;