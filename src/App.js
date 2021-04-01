import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List } from 'antd';
import { ShoppingCartOutlined, NotificationOutlined, SkinTwoTone } from '@ant-design/icons';
import data from './App.json';
import BigBazaar from './image/Bigbazaar.png'
import Cart from './../src/image/basket.png';


function App() {
  // const { Search } = Input;
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [num, setNum] = useState(0);
  const [form, setForm] = useState(true);
 
  return (
    <Layout>
      <Header className="header">
        <div className="pic">
          <img src={BigBazaar} className="bigbazar" height="46px" alt="Bigbazaar Logo" />
          <span className="border">
            <span className="menu">
              <img src={"https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg"} className="menu" height="36px" alt="menu" />
              <span className="shop">shopby</span>
            </span>
          </span>
          <div>
          
              
           
   
             <input type="text" placeholder="What would you like to buy today?" autocomplete="off" className="search" /></div>
             <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lsdjHdWzbgDz4krzRbq5zyWZULldpum19Q&usqp=CAU"} className="open" alt="open"/>
             <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowNFw2cFlg3pyVM8hwi97MWt5iwnwTTyJKg&usqp=CAU"} className="close" alt="close"/>
          
          <div className="basketborder">
            <img src={Cart} className="basket" left="112px" alt="Cart" />
            <span className="zero">0</span>
          </div>
          <img src={"https://cflare.shop.bigbazaar.com/assets/desktop/images/customer/default-user-image.jpg"} className="man" height="43px" class="right" alt="login" />
          <span className="login">Log In</span>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {/* <Menu.Item key="1">Dresses</Menu.Item>
            <Menu.Item key="2">Fruits &amp; Vegatables</Menu.Item>
            <Menu.Item key="3">Cakes</Menu.Item> */}
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1','sub2','sub3','sub4','sub5','sub6']}
            style={{ height: '100%', borderRight: 0 }}
          >
             <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
               <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
               <Menu.Item key="2">skirts &amp; shirts</Menu.Item>
               <Menu.Item key="3">Jackets &amp; Shrugs</Menu.Item>
               <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
             </SubMenu>
            <SubMenu key="sub2" title="snacks &amp; packaged foods">
              <Menu.Item key="5">OREO Cream Biscuits</Menu.Item>
              <Menu.Item key="6">Little Hearts</Menu.Item>
              <Menu.Item key="7">Pringles Potato Chips </Menu.Item>
              <Menu.Item key="8">Lay's Waffer</Menu.Item>
           </SubMenu>
            <SubMenu key="sub3" title="Beverages">
             <Menu.Item key="9">Minute Maid</Menu.Item>
              <Menu.Item key="10">Tropicana</Menu.Item>
              <Menu.Item key="11">paper boat</Menu.Item>
              <Menu.Item key="12">appy FIZZ</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Beverages">
             <Menu.Item key="9">Minute Maid</Menu.Item>
              <Menu.Item key="10">Tropicana</Menu.Item>
              <Menu.Item key="11">paper boat</Menu.Item>
              <Menu.Item key="12">appy FIZZ</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Beverages">
             <Menu.Item key="9">Minute Maid</Menu.Item>
              <Menu.Item key="10">Tropicana</Menu.Item>
              <Menu.Item key="11">paper boat</Menu.Item>
              <Menu.Item key="12">appy FIZZ</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title="Beverages">
             <Menu.Item key="9">Minute Maid</Menu.Item>
              <Menu.Item key="10">Tropicana</Menu.Item>
              <Menu.Item key="11">paper boat</Menu.Item>
              <Menu.Item key="12">appy FIZZ</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '76px -16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 320,
            }}
          >
            <List
              grid={{
                gutter: 0,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 3,
                xxl: 3,
              }}
              dataSource={data.Array}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={item.title}>
                    <img src={item.image} className="image-container" alt="shopping cart" />
                    <p className="img" text align="left">{item.name}</p>
                    <p className="pic" text align="center">{item.price}</p>
                    <div className="discount">
                      <span title="10% Off">10% Off</span>
                    </div>
                    <span className="small">1pc</span>
                    <button className="appbutton">Add</button>
                  </Card>
                </List.Item>
              )}
            />,
  </Content>
        </Layout>
      </Layout>
    </Layout >
  );
}
export default App;
