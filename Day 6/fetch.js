const fetchdata = async () =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response =>{
            if(!response.ok){
                throw new Error(`error : ${response.status}`);
            }
            return response.json();
        })
        .then(data =>{
            console.log(`user data:`,data);
            
        })
        .catch(error =>{
            console.error(error);
            
        })
}
fetchdata();