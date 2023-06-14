import React,{useEffect,useState} from 'react'

const Posiciones = () => {
 
  const [data, setData] = useState([]);
  const fetchData = async () => {

    try {
      const response = await fetch('https://liga-football-production.up.railway.app/api/estadisticas/tabla');
      const newData = await response.json();
      const sortedData = newData.tabla.sort((a, b) => parseInt(b.pt) - parseInt(a.pt))
       
      
      setData(sortedData)
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
 <h2 style={{textAlign:'center',fontFamily:'cursive'}}>Tabla de posiciones</h2>
    <table id="dtOrderExample" className="table table-striped table-bordered table-sm"  width="100%" >
  <thead style={{textAlign:'center'}}>
    <tr>
    <th class="th-sm">Club</th>
      <th class="th-sm">PJ</th>
      <th class="th-sm-4">PG</th>
 <th class="th-sm-4">PE</th>
<th class="th-sm-4">PP</th>
<th class="th-sm-4">GF</th>
<th class="th-sm-4">GC</th>
<th class="th-sm-4">Pts</th>
    </tr>
  </thead>
  <tbody style={{textAlign: 'center'}}>
  {data && data.map((item) => (
    <tr >
      <td>{item.nombre}</td>
      <td>{item.pj}</td>
      <td>{item.pg}</td>
      <td>{item.pe}</td>
      <td>{item.pp}</td>
      <td>{item.gf}</td>
      <td>{item.gc}</td>
      <td>{item.pt}</td>
      
    </tr>
  ))}
</tbody>
 
 
 
 
 
 
 
  
 </table>
 
 </div>
    
      </div>   
 
 
      
     </>
  )
}

export default Posiciones