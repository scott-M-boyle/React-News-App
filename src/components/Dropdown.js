import React,{useState} from 'react';
import '../styles/Dropdown.css';

const Dropdown = (props) =>{
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () =>{
      setDropdownOpen(!dropdownOpen)
    }

    let renderList = props.listItems.map((listItem, index) =>{
      return <li className = "dropdown-item" key={index}> {listItem} </li>
    })

    const handleListClick = (e) => {
      console.log("blah")
      props.setActiveState(e.target.innerText)
      toggleDropdown()
    }



  return (
    <div>
    <ul className = "main-dropdown-container">
 <li> <button onClick = {toggleDropdown} className = "toggle-active"> {props.buttonValue} </button></li>
   <li>
     <ul onClick={handleListClick} className={dropdownOpen ? "dropdown-show" : "dropdown-hidden"}>
     {renderList}
     </ul>
   </li>
</ul>
    </div>
  )
}

export default Dropdown;
