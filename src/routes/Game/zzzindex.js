// import { useState, useEffect } from "react";
// import MenuHeader from "../../Components/MenuHeader";
// import Layout from "../../Components/Layout";
// import PokemonCard from "../../Components/PokemonCard";
// import data from "../../shared/data/pokemoncards.json";
// import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

// data.forEach((elem) => {
//   elem.showBack = false;
// });

// const GamePage = () => {
//   // const [state, setState] = useState(data);
//   // сейчас данные приходят из json,  дальше будет также, но они будут идти с бэка соответственно дальше будет работать такая структура
//   // данные по карточкам
//   const [cardsData, setCardsData] = useState(data);
//   // состояния по карточкам
//   const [cardsState, setCardsState] = useState({});

//   useEffect(() => {
//     // переменная отвечающая за то, смонтирован ли компонент (существует ли)
//     let mounted = true;
//     // асинхронщина с запросом к бэку (НУ ТИПА)
//     setTimeout(() => {
//       // если компонент не размонтирован меняем состояние - в асинхрощине всегда это делай, иначе могут быть утечки
//       if (mounted) {
//         // записываем просто данные карты
//         setCardsData(data);
//         // создаем под них состояние
//         const cardsNewState = {};
//         data.map((card) => {
//           cardsNewState[card.id] = { isActive: false };
//         });
//         setCardsState(cardsNewState);
//       }
//     }, 1000);

//     return () => {
//       // при удалении компонента вызовется эта функция
//       mounted = false;
//     };
//   }, []);
//   // тут в зависимостях хука не указал ничего, чтобы запрос шел 1 раз при рендере компонента

//   return (
//     <>
//       {/* <MenuHeader /> */}
//       <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
//         <div className="flex">
//           {cardsData.map(({ id, name, type, values, img }) => (
//             <PokemonCard
//               key={id}
//               id={id}
//               name={name}
//               type={type}
//               values={values}
//               img={img}
//               showBack={cardsState[id].isActive}
//               onClick={() => {
//                 const newCardsState = {
//                   ...cardsState,
//                 };
//                 newCardsState[id].isActive = !newCardsState[id].isActive;
//                 setCardsState(newCardsState);
//               }}
//             />
//           ))}
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default GamePage;
