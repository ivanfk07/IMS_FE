import CONFIG from "./.conf";

const API_PATHS = {
    GET: {
        ASSETS_LIST : `${CONFIG.API}/get/assets/getall` 
    },
    POST: {
        LOGIN: `${CONFIG.API}/post/login`,
        ADD_ASSETS: `${CONFIG.API}/post/assets/add`,
        DELETE_ASSETS: `${CONFIG.API}/post/assets/delete`,
    }
}

export default API_PATHS ;