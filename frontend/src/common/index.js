const backendDomin = "http://localhost:5000"
const  SummaryApi = {

    signUp :{
        url:`${backendDomin}/api/signup`,
        method:"post"
    },
    signIn:{
       url:`${backendDomin}/api/signin`,
        method:"post"
    },
    current_user :{
        url:`${backendDomin}/api/user-details`,
        credentials: 'include', // This ensures cookies are sent with the request
        method:"GET"
    },
    logout_user:{
        url:`${backendDomin}/api/userLogout`,
        method:"GET"
    }
}

export default SummaryApi