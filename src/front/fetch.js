export const login = async(email,password,dispatch) => {
    const options= {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/token`,options)

    if (!response.ok){
        const data = await response.json();
        console.log(data.msg);
        return {
            error:{
                status: response.status,
                statusText: response.statusText,
            }
        }
    }

    const data = await response.json();
    console.log(data.access_token)
    //add sessionStorage
    //add the dispatch to save token and isLoginSuccessful
    //
    return data;
}


//finish the login function to save token to the store
//and update isLoginSuccessfull to true
//create Pritave page 
//create a useEffect in /Login.jsx that will take the navigate to the user to /privateUser
//Create a /signup page
