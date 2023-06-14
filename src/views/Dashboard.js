/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useEffect,useState} from "react";
 

function Dashboard() {
  const [data, setData] = useState([]);
  const [select,setSelect]=useState('')

  const fetchData=async()=>{
    try {
     
      const res = await fetch('https://liga-football-production.up.railway.app/api/estadisticas/fecha', {
        method: 'POST',
        headers: {

          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fecha: `${select}`,
          
          
        }),
      });
      const data = await res.json();
      setData(data.calendario)
     
    } catch (error) {
      console.log(error)
    }
   }
  
   useEffect(()=>{

fetchData()

},[select])
   
    console.log(data)
    console.log(select)
  return (
    <>
       <div className="content">
     
    <div style={{marginTop:'8%',flexDirection:'row'}}>

    <div>
    <h2 style={{ fontFamily:'cursive'}}>Elija fecha</h2>
    </div>
      <div>
       <select value={select} onChange={(e) => setSelect(e.target.value)} className="selectpicker" >
  <option selected>Escoger Fecha</option>
  <option value="1">Fecha 1</option>
  <option value="2">Fecha 2</option>
  <option value="3">Fecha 3</option>
  <option value="4">Fecha 4</option>
  <option value="5">Fecha 5</option>
  <option value="6">Fecha 6</option>
  <option value="7">Fecha 7</option>
  <option value="8">Fecha 8</option>
  <option value="9">Fecha 9</option>
  <option value="10">Fecha 10</option>
  <option value="11">Fecha 11</option>
  <option value="12">Fecha 12</option>
  <option value="13">Fecha 13</option>
  <option value="14">Fecha 14</option>
  <option value="15">Fecha 15</option>
  <option value="16">Fecha 16</option>
  <option value="17">Fecha 17</option>
  <option value="18">Fecha 18</option>
  <option value="19">Fecha 19</option>





</select>
</div>
</div>
<div >
<h2 style={{fontFamily:'cursive',fontWeight:'bold'}}>Calendario</h2>
   <table id="dtOrderExample" className="table table-striped table-bordered table-sm"  width="100%" >
 <thead style={{textAlign:'center'}}>
   <tr>
   <th class="th-sm">Local

      </th>
     <th class="th-sm">

     </th>
     <th class="th-sm-4">Visitante
</th>
<th class="th-sm-4">Fecha del partido
</th>
<th class="th-sm-4">Hora
</th>
     
   </tr>
 </thead>
 <tbody style={{textAlign: 'center'}}>
  {data && data.map((item) => (
    <tr >
      <td>{item.equipoLocal.nombre}</td>
      <td>Vs</td>
      <td>{item.equipoVisitante.nombre}</td>
      <td>{item.fechaPartido}</td>
      <td>{item.hora}</td>
      
    </tr>
  ))}
</tbody>







 
</table>

</div>
   
     </div>   


     
    </>
  );
}

export default Dashboard;
