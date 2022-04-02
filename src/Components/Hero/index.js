import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { HeroSectionContainer } from './heroElements';

const { Meta } = Card;

const data = [
  {
    title: 'Apple Bananas',
    Price: '2.3751 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Fresh Cassava',
    Price: '2.0916 $ (per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
  },
  {
    title: 'Cavendish ( Bogoya )',
    Price: '3.0838 $ (per KG)',
    img1:require('../../Images/cavendish.jpeg'),
  },
  {
    title: 'Cow Peas',
    Price: '2.80035 $ (per KG)',
    img1:require('../../Images/cow-peas.jpg'),
  },{
    title: 'Soya Beans',
    Price: '2.9421 $ (per KG)',
    img1:require('../../Images/soyaBeans.jpeg'),
  },
  {
    title: 'Irish Potatoes',
    Price: '2.4013 $ (per KG)',
    img1:require('../../Images/irishPotatoes.jpeg'),
  },
  {
    title: 'Matooke ( Fingers )',
    Price: '2.0842 $ (per KG)',
    img1:require('../../Images/matookeFingers.jpeg'),
    
  },
  {
    title: 'Matooke ( 1 bunch )',
    Price: '10.4286 $ (per KG)',
    img1:require('../../Images/matookeBunch.jpeg'),
  },
  {
    title: 'Pineapples ( Whole )',
    Price: '2.9421 $ (per KG)',
    img1:require('../../Images/pineapples.jpeg'),
  },
  {
    title: 'Tilapia ( Whole )',
    Price: '5.2101 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },{
    title: 'Turkey ( Whole )',
    Price: '24.4356 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Sweet potatoes',
    Price: '7.4781 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Apple Bananas',
    Price: '2.3751 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Fresh Cassava',
    Price: '2.0916 $ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Cavendish ( Bogoya )',
    Price: '3.08385$ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Cavendish ( Bogoya )',
    Price: '3.08385$ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },{
    title: 'Cavendish ( Bogoya )',
    Price: '3.08385$ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Cavendish ( Bogoya )',
    Price: '3.08385$ (per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  }
];



const HeroSection = () => {
  return (
    <HeroSectionContainer>

<List
    grid={{
      gutter: 8,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
      <Card
    style={{ width: 250 }}
    cover={
      <img
        alt="example"
        src={item.img1}
      />
    }
    actions={[
      <SettingOutlined key="buy" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={item.title}
      description={item.Price}
    />
  </Card>
        {/* <Card title={item.title} description={item.description}>Card content</Card> */}
        
      </List.Item>
    )}
  />,


    </HeroSectionContainer>
  )
}

export default HeroSection