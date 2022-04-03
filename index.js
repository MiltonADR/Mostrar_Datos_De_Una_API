fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => res.json())
.then(data => mostrarDatos(data))
.catch(err => console.log(err))

const mostrarDatos = (data) => {

    console.log(data);

    let body = '';

    for (let i = 0; i < data.length; i++) {

        body += `<tr><th>${data[i].id}</th><th>${data[i].name}</th><th>${data[i].email}</th></tr>`;
        
    }

    document.getElementById('tbody').innerHTML = body;
}


