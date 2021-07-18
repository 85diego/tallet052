import Cards from './Cards'
import React,{Children,useEffect,useState} from 'react'
//import celebridades from '../../helpers/usuarios'
//import users from '../../helpers/usuarios'
    


const Listcards = () => {
    const [celebridades, setCelebridades] = useState([])
    const [error,setError] = useState(false)
    useEffect(() => {
       const getUsuarios = async() => {
           try {
               const res = await fetch("https://randomuser.me/api/?results=50")
               const data = await res.json()
               //console.log(data.results)
               setCelebridades(data.results)
               setError(false)
           } catch (err) {
               console.log(err)
               setError(true)
               
           }
          
       }
       getUsuarios()

    }, [])
    if (error){
        return    <h1 class="alert alert-success" role="alert">
                    Error al cargar el api users <a href="https://randomuser.me" class="alert-link">Verifique el link link</a>
                  </h1>
    }

    ///console.log(celebridades[0].name.last)
    return (
        <div className="container">
           <div className="row">
           { celebridades.map(user => (
               <div className="col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                    <Cards user={user}/> 
                </div>
            ))}  
            </div>
           
        </div>
    )
}

export default Listcards
