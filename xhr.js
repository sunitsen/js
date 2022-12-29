console.clear();

// const makeRequest = (method, url, data) => {

//     return new Promise((resolve, reject) =>{
        

//     const xhr = new XMLHttpRequest;
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-Type', 'application/json');


//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(xhr.statusText)
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = () => {
//         console.log("error is here");
//     }
//     xhr.send(JSON.stringify(data));

//     });

// }



// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     .then((res) => console.log(res));
// }

// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/todos/', {
//         title: 'foo',
//         body: 'bar',
//         userId:1,
//     });
// }



// const editData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/todos/1', {
//         title: 'THIS IS TITLE',
//         body: 'baknr',
//         userId:1,
//     });
// }




// const deletData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/todos/1', {
//     });
// }



// const makeRequest = (method, url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-Type', 'application/json');
    
//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }

//     xhr.onerror = () => {
//         console.log("error is here...");
//     }

//     xhr.send(JSON.stringify(data));
// }


// const getData = () => {
//     makeRequest("GET", "https://jsonplaceholder.typicode.com/todos/");
// }

// const sendData = () => {
//     makeRequest("POST", "https://jsonplaceholder.typicode.com/todos/", {
//         title: 'foo',
//         body: 'boo',
//         userId:1,
//     });
// }


// sendData();




const makeRequest = (method, url, data) => {

return new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest();
    // console.log(xhr.status);
    xhr.open(method, url);
 
    xhr.setRequestHeader('content-Type', 'application/json');

    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.onerror = () => {
        console.log('error is here...');
    }
    xhr.send(JSON.stringify(data));
  

});


}




const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/todos/')
    .then((res) => console.log(res))
}

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/todos/',{
        title: 'its title...',
        body:'its body..',
        id: 'its my id'
    });
}

// FOR MULTIPUL DATA EDIT
const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/todos/1',{
        title: 'its title two...',
        body:'its body two..', 
        id: 'its my id two',
        userId:1,
    });
}

//FOR SINGLE DATA EDIT
const updatingeData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/todos/1',{
        title: 'its title two...',
        body:'its body two UPDATED..', 
      
    });
}


//FOR SINGLE DATA EDIT
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/todos/1',{
        title: 'its title two...',
        body:'its body two UPDATED..', 
      
    });
}

getData();