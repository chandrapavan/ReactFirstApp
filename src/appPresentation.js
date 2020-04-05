import React,{Component} from 'react';
import FeaturedHouse from './featuredHouse/featured-house';
import SearchResults from './search-results/search-results';
import Header from './header/header';
import HouseFilter from './filters/house-filter';
const AppPresentation =(props) => {
        let activeComponent = null;
        if(props.country){
            activeComponent = <SearchResults country ={props.country} filteredHouses ={props.filteredHouses} setActiveHouse ={props.setActiveHouse}/>
          }
          if(props.activeHouse){
            activeComponent= <FeaturedHouse house ={props.activeHouse}/>
          }
          if(!activeComponent){
            activeComponent =<FeaturedHouse house ={props.featuredHouse}/>
          }
        return ( 
            <div className="Container spacer">
            <Header subtitle = "Providing House world wide"/>
            <HouseFilter countries ={props.countries} filterHouses ={props.filterHouses}/>
            {activeComponent}
            </div>
          
         );
}
 
export default AppPresentation;