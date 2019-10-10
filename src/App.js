import React from 'react';
import './App.css';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import todoData from './todoData'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import jokesData from './jokesData'
import Product from './components/Product'
import productsData from './vschoolProducts'





function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )
    const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)




    return (
        <div className="App">
          <div className="App-header">
            <Header />
            <div className="todo-list">
                {todoItems}
              
                
          
            </div>
           
          
          </div>
          <div className="contacts">
                <ContactCard 
                    name="Mr. Whiskerson" 
                    imgUrl="http://placekitten.com/300/200" 
                    phone="(212) 555-1234" 
                    email="mr.whiskaz@catnap.meow"
                />
                
                <ContactCard 
                    name="Fluffykins" 
                    imgUrl="http://placekitten.com/400/200" 
                    phone="(212) 555-2345" 
                    email="fluff@me.com"
                />
                
                <ContactCard 
                    name="Destroyer" 
                    imgUrl="http://placekitten.com/400/300" 
                    phone="(212) 555-3456" 
                    email="ofworlds@yahoo.com"
                />
                
                <ContactCard 
                    name="Felix" 
                    imgUrl="http://placekitten.com/200/100" 
                    phone="(212) 555-4567" 
                    email="thecat@hotmail.com"
                />  

          </div>
          <div className="jokes">
                  <p>{jokeComponents}</p>
          </div>
          <div className="products">
                {productComponents}
          </div>
          <footer className="App-footer">
           
          </footer>
        </div>
  );
}

export default App;
