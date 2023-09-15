import React, { useState } from 'react'
import { Button, Col, Divider, Row,  Typography} from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Navigate, useNavigate } from 'react-router-dom';

const {Title, Text}= Typography;

export const Escritorio = () => {

  const navigate = useNavigate();
  useHideMenu(false);
  const [usuario] = useState(getUsuarioStorage());
  const salir =()=>{
    //console.log('salir')
    localStorage.clear()
    navigate('/ingresar')
    // return <Navigate to="/ingresar" replace={true} />
  }
  const siguienteTicket = () => {
    console.log('Siguiente')
  }

  if( !usuario.agente || !usuario.escritorio){
    return <Navigate to= '/ingresar'  />
  }

  return (

    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>usted está trabajando en el escritorio: </Text>
          <Text type='success'> {usuario.escritorio} </Text>
        </Col>
        <Col span={4} aling="right">
          <Button 
            shape='round'
            type='primary' danger 
            onClick={ salir }
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>Está atendiendo el ticket número</Text>
          <Text style={{fontSize: 30}} type='danger' > 55 </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} aling="right">
          <Button
            shape='round' 
            onClick={siguienteTicket}
            type='primary'
          >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
      
    </>
  )
}
