import React, { Component } from 'react'

class ListFavoriteMovies extends Component{	
  	render(){
      return (
      	<ol className='users-list'>
        {this.props.favoriteMovies.map((favorite) => (
      		<li key={favorite}>
				{favorite}
        	</li>
      	))}        
        </ol>      
      )
    }
}

export default ListFavoriteMovies
  