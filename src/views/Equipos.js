import React,{useState,useEffect} from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";
const Equipos = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState('');
  const [selectedCiudad, setSelectedCiudad] = useState('');
  const [selectedCiudadId, setSelectedCiudadId] = useState('');
  const [nombre, setNombre] = useState('');
  const [nombreComp, setNombreComp] = useState('');
  const [anio, setAnio] = useState('');
 
    const fetchData = async () => {
  
      try {
        const response = await fetch('https://liga-football-production.up.railway.app/api/departamentos/ciudades');
        const data = await response.json();
        setDepartamentos(data.departamentos)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchData2 = async () => {
  

      
      try {
        const res = await fetch('https://toppaylatam.com/Apireact/public/api/prueba/utilidadesAdm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: `${nombre}`,
          nombreCompleto: `${nombreComp}`,
          idCiudad: `${selectedCiudadId}`,
          fundacion: `${anio}`


    
          
        }),
      });

        const data = await res.json();
        
      } catch (error) {
        console.log(error)
      }
    }
  
  useEffect(()=>{
fetchData2()
  },[])
  
    useEffect(()=>{
  fetchData()
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();
      // Crea un objeto con los datos del formulario
      const formData = {
        nombre: nombre,
        nombreComp: nombreComp,
        anio:anio,
        selectedCiudadId:selectedCiudadId
      }
    }
      
       
   
   

    const handleDepartamentoChange = (event) => {
      setSelectedDepartamento(event.target.value);
      setSelectedCiudad('');
      setSelectedCiudadId('');
    };
  
    const handleCiudadChange = (event) => {
      setSelectedCiudad(event.target.value);
      const selectedCity = departamentos
        .find((departamento) => departamento.nombre === selectedDepartamento)
        ?.ciudades.find((ciudad) => ciudad.nombre === event.target.value);
  
      setSelectedCiudadId(selectedCity ? selectedCity.id : '');
    };
  
    const departamentosOptions = departamentos.map((departamento) => (
      <option key={departamento.id} value={departamento.nombre}>
        {departamento.nombre}
      </option>
    ));
  
    console.log(selectedCiudadId)
    const ciudadesOptions = departamentos
      .find((departamento) => departamento.nombre === selectedDepartamento)
      ?.ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.nombre}>
          {ciudad.nombre}
        </option>
      ));
  




  
  
  
    return (
    <>
  <div style={{margin:'8%'}}>
  <Form onSubmit={handleSubmit}>
                  <Row>
                 
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                         value={nombre}
                         onChange={(e) => setNombre(e.target.value)}
                         
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Nombre completo del equipo
                        </label>
                        <Input
                         value={nombreComp}
                         onChange={(e) => setNombreComp(e.target.value)}
                         type="text"
                       />
                      </FormGroup>
                    </Col>

                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Año de fundacion
                        </label>
                        <Input
                         value={anio}
                         onChange={(e) => setAnio(e.target.value)}
                         type="text"
                       />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                      <label htmlFor="departamento">Departamento:</label>
                      <select
        id="departamento"
        value={selectedDepartamento}
        onChange={handleDepartamentoChange}
      >
        <option value="">Seleccionar departamento</option>
        {departamentosOptions}
      </select>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                      <label htmlFor="ciudad">Ciudad:</label>
                      <select id="ciudad" value={selectedCiudad} onChange={handleCiudadChange}>
        <option value="">Seleccionar ciudad</option>
        {ciudadesOptions}
      </select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                
                    <Col className="pl-1" md="6">
                      <FormGroup>
                      <Button type="submit">Guardar</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                  
                    
                
                </Form>

  </div>
    
    </>
  )
}

export default Equipos