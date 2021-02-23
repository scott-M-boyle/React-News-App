import moment from 'moment';
import API_KEY from './ApiKeys';

const parseActiveDate = {
  "Last 24h": moment().subtract(1, 'days').format("YYYY-MM-DD"),
  "Past Week":  moment().subtract(7, 'days').format("YYYY-MM-DD"),
  "Past Month":  moment().subtract(1, 'months').format("YYYY-MM-DD"),
  "Past Year": moment().subtract(1, 'years').format("YYYY-MM-DD"),
}

  export const onRequestData = function(){
  let queryEndpoint = "";
  if (this.state.searchTerm === null) {

    queryEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  }
  else {

      if (this.state.activeDate === "All Time"){
        queryEndpoint = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}&sortBy=${this.state.activeSort}&apiKey=${API_KEY}`
      }
      else {
        queryEndpoint = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}&sortBy=${this.state.activeSort}&from=${parseActiveDate[this.state.activeDate]}&apiKey=${API_KEY}`
      }
  }
  console.log(queryEndpoint)
 fetch(queryEndpoint)
 .then((response) =>{
   if (response.status !== 200){
     return
   }
   response.json().then((data)=>{
     let articlesWithId = data.articles.map((article, index) =>{
       article["id"] = index+1
       return article
     })
     this.setState({articles: articlesWithId})
   })
 })
}
