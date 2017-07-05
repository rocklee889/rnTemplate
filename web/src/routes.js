// import EvaList from '../../containers/evaList.react';
// import ListContainer from '../../containers/List/listContainer.react';
// import DetailContainer from '../../containers/Detail/detailContainer.react';

// const routes = [{
//     name: ListContainer.name,
//     component: ListContainer,
//     path: '/'
// },{
//     name: DetailContainer.name,
//     component: DetailContainer,
//     path: '/detail/:id'
// },{
//     name: EvaList.name,
//     component: EvaList,
//     path: '/eva(/:id)',
// }];

import MainContainer from '../../containers/mainContainer.react';


const routes = [{
    name: MainContainer.name,
    component: MainContainer,
    path: '/'
}];

export default routes;
