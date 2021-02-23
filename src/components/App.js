import React from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {onRequestData} from '../onRequestData'
import SearchForm from './SearchForm';
import '../styles/App.css';
import ArticleList from './ArticleList'
import ToggleMenu from './ToggleMenu';
import FullArticle from './FullArticle';



class App extends React.Component {
  constructor(props){
    super(props);
    this.onRequestData = onRequestData.bind(this);
    this.state = {articles: [], activeSort: "Popularity", activeDate: "All Time", searchTerm: null, toggleError: false}
  }

  onSearchSubmit = (searchTerm) =>{
    this.setState({searchTerm}, ()=>{
        this.onRequestData()
    })
}
 setActiveSort = (clickedSortButton) =>{

   this.setState({activeSort: clickedSortButton}, () =>{
     this.onRequestData()
   })
 }
 setActiveDate = async (clickedDateButton) => {

  await this.setState({activeDate: clickedDateButton})
    console.log(this.state.activeDate)
    this.onRequestData()
 }
 componentDidMount(){
   this.onRequestData()
 }
  render(){
    return <div className="main-container">

         <SearchForm onSubmit={this.onSearchSubmit} />
         <ToggleMenu setActiveSort={this.setActiveSort} activeSort = {this.state.activeSort}
          setActiveDate = {this.setActiveDate} activeDate={this.state.activeDate} />
         <ArticleList  articles={this.state.articles}/>
     </div>
  }
}

export default App;
