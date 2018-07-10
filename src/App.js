import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Router, Link } from "@reach/router";
import Home from './componentes/Home';
import Transferencia from './componentes/Transferencia';
import Deposito from './componentes/Deposito';
import Consulta from './componentes/Consulta';
import Retiro from './componentes/Retiro';
import RetiroSinTarjeta from './componentes/RetiroSinTarjeta';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(){
    super();
    this.state = {
      usuario: {
        id: 1,
        nombre: 'Guillermo',
        paterno: 'Ortiz',
        materno: 'Rebolledo',
        saldo: 1570666.00
      }
    }
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">Cajero</Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Sider width={300} style={{ background: '#fff' }}>
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>              
                <Menu.Item key="1"><Link to="/"><Icon type="home" /> Inicio</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/deposito"><Icon type="login" /> Depósito</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/consulta"><Icon type="search" /> Consulta</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/retiro"><Icon type="credit-card" /> Retiro</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/sintarjeta"><Icon type="logout" /> Retiro sin Tarjeta</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/transferencia"><Icon type="calculator" /> Transferencia Electrónica</Link></Menu.Item>
              </Menu>
            </Sider>


            <Layout style={{ padding: '0 24px 24px' }}>
                <Content style={{ background: '#fff', padding: 25, margin: 0, minHeight: 280 }}>
                    <Router>
                      <Home path="/" nombre={`${this.state.usuario.nombre} ${this.state.usuario.paterno} ${this.state.usuario.materno}`} saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id} />
                      <Transferencia path="/transferencia" saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id}/>
                      <Deposito path="/deposito" saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id}/>
                      <Consulta path="/consulta" saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id}/>
                      <Retiro path="/retiro" saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id}/>
                      <RetiroSinTarjeta path="/sintarjeta" saldo={this.state.usuario.saldo} idusuario={this.state.usuario.id}/>
                    </Router>
                </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
