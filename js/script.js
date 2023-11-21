const userList = document.getElementById('listaUsuarios');

const getUsers = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (response =>{
            if (!response.ok){
                throw new Error ('La solicitud no tuvo éxito')
            }
            return response.json();
        })
        .then (datas =>{
            const usersData = [];
            const newData2 = newData(); //metemos en un array los datos nuevos generados.
            datas.forEach((data, i)=>{          //recorremos el array recogido de la apli y metemos los nuevos datos generados
                const datos ={
                    ...datas[i],
                    age: newData2[i].age,
                    image: newData2[i].image
                }               
                usersData.push(datos); //metemos en el array todo incluido
            })
            console.log(usersData);
            for (let data of usersData){
                const {street, suite, city} = data.address; 
                const template = `
                    <li class="contenedor"> 
                        <div class="cabecera">                   
                        <div class="datosPersonales">
                            <p><span>Nombre:</span> ${data.name}</p>
                            <p><span>Edad:</span> ${data.age}</p>
                            <p><span>Username:</span> ${data.username}</p>
                            <p><span>Teléfono:</span> ${data.phone}</p>
                            <p><span>Email:</span> ${data.email}</p>
                        </div> 
                        <img src="${data.image}" alt="${data.name}" /></div>
                        <p><span>Compañia:</span> ${data.company.name}</p>
                        <p><span>Dirección:</span> ${street}, ${suite}, ${city}</p>
                    </li>
                `
                userList.innerHTML += template

            }
           
        })
        .catch (error =>{
            userList.innerHTML = 'Error en la solicitud';
        })
}

getUsers();


const newData =() =>{
    const data2 =[];
    for (let i = 1; i<=10; i++){
        const objData ={
            age: Math.floor(Math.random()* (66-18)+18),     // para la edad un numero aleatori entre 18 y 65
            image: `./assets/img/${i}.jpeg`
        }
        data2.push(objData);    }
   

    return (data2);
}
