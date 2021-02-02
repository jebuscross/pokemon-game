import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import PokemonCard from './Components/PokemonCard';
import data from './Components/pokemoncards.json';
import './index.css';

export default function App() {
  return (
    <React.Fragment>
      <Header title='header title' descr='Header description' />

      <Layout
        title='Layout 1'
        id='024sgawef'
        urlBg='url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T155641Z&X-Amz-Expires=86400&X-Amz-Signature=57f5b440ebf258101dfdf770ef8928d3195a9dab0a1ad5c5c3fd259c896bd248&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22)'
        descr="Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue. To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead."
      />
      <Layout
        title='Layout 2'
        id='024sgaweg'
        colorBg='#aaa'
        descr='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      />
      <div className='flex'>
        {Object.values(data).map((item) => {
          return (
            <PokemonCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
            />
          );
        })}
      </div>
      <Layout
        title='Layout 3'
        urlBg='url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b52e4b6-1d4e-4a16-8859-0147b1f4ec81/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T155734Z&X-Amz-Expires=86400&X-Amz-Signature=5e0e5952ffd29451ba8443683662113b8f9cfff30670bda621aa33cf4c8f4a5d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg2.jpg%22)'
        id='024sgawes'
        descr='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      />
      <Footer />
    </React.Fragment>
  );
}
