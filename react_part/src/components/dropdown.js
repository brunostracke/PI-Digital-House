import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './dropdown.css'


const Dropzao = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);



    {
        return (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    {this.props.grupo}
                </DropdownToggle>
                <DropdownMenu >
                    {this.props.titulos.map( (titulo) => 
                        <div>
                            <DropdownItem>{titulo}</DropdownItem>
                        </div>
                    )};
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default Dropzao;