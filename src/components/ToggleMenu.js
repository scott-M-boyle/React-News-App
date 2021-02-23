import React from 'react';
import Dropdown from './Dropdown';
import '../styles/ToggleMenu.css'

const ToggleMenu = (props) =>{



  return (
    <div className ="search-toggle-container">
    <p className = "sort-by-text"> sort by </p>
      <Dropdown buttonValue = {props.activeSort} listItems = {["popularity", "publishedAt", "relevance" ]} setActiveState = {props.setActiveSort}/>
      <p className = "from-text"> for </p>
      <Dropdown buttonValue = {props.activeDate} listItems = {["Last 24h", "Past Week", "Past Month", "Past Year", "All Time" ]} setActiveState = {props.setActiveDate}/>

     </div>
  )
}

export default ToggleMenu;
