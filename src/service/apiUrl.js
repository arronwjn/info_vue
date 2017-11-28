import { env,developer } from '../config/apiConfig';

const domain = env.domain

// const ROOT_URL = `${domain}`;
const ROOT_URL = `${domain}/`;


export const API_URL = {
    GETFACADELIST : {
      domain : ROOT_URL,
      apiUrl : 'wap.php/car/getFacadeList',
      author : '王超',
      fetchUrl : ROOT_URL+'wap.php/car/getFacadeList',
      remark : '门店列表',
      method : 'POST',
      // tableName : 'ez_store',
    },
    GETCARLIST : {
        domain : ROOT_URL,
        apiUrl : 'wap.php/car/getCarList',
        author : '王超',
        fetchUrl : ROOT_URL+'wap.php/car/getCarList',
        remark : '汽车列表',
        method : 'POST',
        // tableName : 'ez_store',
    },
    GETFACADELIST : {
        domain : ROOT_URL,
        apiUrl : 'wap.php/car/getFacadeList',
        author : '王超',
        fetchUrl : ROOT_URL+'wap.php/car/getFacadeList',
        remark : '获取门店列表',
        method : 'POST',
        // tableName : 'ez_store',
    },
    GETCARCATEGORY : {
        domain : ROOT_URL,
        apiUrl : 'wap.php/car/getCarCategory',
        author : '王超',
        fetchUrl : ROOT_URL+'wap.php/car/getCarCategory',
        remark : '获取车辆分类',
        method : 'POST',
        // tableName : 'ez_store',
    },
    SEARCHACTIVITY: {
        domain: ROOT_URL,
        apiUrl: '/public/api/search/searchActivity',
        author: '王超',
        fetchUrl: ROOT_URL + '/public/api/search/searchActivity',
        remark: '标签列表',
        method: 'POST',
        // tableName : 'ez_store',
    },
}
