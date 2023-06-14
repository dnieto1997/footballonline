import React,{useEffect,useState} from 'react'

const Goleadores = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
  
      try {
        const response = await fetch('https://liga-football-production.up.railway.app/api/estadisticas');
        const newData = await response.json();
        const sortedData = newData.goleadores.sort((a, b) => parseInt(b.goles) - parseInt(a.goles))
        const limitedData = sortedData.slice(0, 10);
          setData(limitedData)
      } catch (error) {
        console.log(error)
      }
    }
  
  
    useEffect(()=>{
  fetchData()
    },[])
   
   
      return (
          <>
          <div className="content">
        
     
   <div style={{marginTop:'8%'}} >
   <h2 style={{textAlign:'center',fontFamily:'cursive'}}>Maximos Goleadores</h2>
      <table id="dtOrderExample" className="table table-striped table-bordered table-sm"  width="100%" >
    <thead style={{textAlign:'center'}}>
      <tr>
      <th class="th-sm">Nombre del Jugador</th>
        <th class="th-sm">Equipo</th>
        <th class="th-sm-4">Goles</th>

      </tr>
    </thead>
    <tbody style={{textAlign: 'center'}}>
    {data && data.map((item) => (
      <tr >
        <td>{item.jugador}</td>
        <td>{item.equipo}</td>
        <td>{item.goles}</td>
       
        
      </tr>
    ))}
  </tbody>
   
   
   
   
   
   
   
    
   </table>
   
   </div>
      
        </div>   
   
   
        
       </>
    )
  }
export default Goleadores