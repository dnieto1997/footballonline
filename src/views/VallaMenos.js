import React,{useState,useEffect}from 'react'

const VallaMenos = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
  
      try {
        const response = await fetch('https://liga-football-production.up.railway.app/api/estadisticas/valla-menos-vencida');
        const newData = await response.json();
        const sortedData = newData.vallaMenosVencida.sort((a, b) => a.goles_en_contra - b.goles_en_contra)
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
   <h2 style={{textAlign:'center',fontFamily:'cursive'}}>Valla menos Vencida</h2>
      <table id="dtOrderExample" className="table table-striped table-bordered table-sm"  width="100%" >
    <thead style={{textAlign:'center'}}>
      <tr>
      <th class="th-sm">Club</th>
        <th class="th-sm">goles En Contra</th>
    

      </tr>
    </thead>
    <tbody style={{textAlign: 'center'}}>
    {data && data.map((item) => (
      <tr >
        <td>{item.nombre}</td>
        <td>{item.golesEnContra}</td>
        
       
        
      </tr>
    ))}
  </tbody>
   
   
   
   
   
   
   
    
   </table>
   
   </div>
      
        </div>   
   
   
        
       </>
    )
  }

export default VallaMenos