import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined , PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { HeroSectionContainer } from './heroElements';

const { Meta } = Card;

const data = [
  {
    title: 'Apple Bananas',
    // Price: '2.3751 (£ per KG)',
    Price1:'3.1668 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Fresh Cassava',
    // Price: '2.0916 (£ per KG)',
    Price1:'2.7888 ( $ per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
  },
  {
    title: 'Cavendish ( Bogoya )',
    // Price: '3.0838 (£ per KG)',
    Price1:'4.1118 ( $ per KG)',
    img1:require('../../Images/cavendish.jpeg'),
  },
  {
    title: 'Cow Peas',
    // Price: '2.80035 (£ per KG)',
    Price1:'3.7338 ( $ per KG)',
    img1:require('../../Images/cow-peas.jpg'),
  },{
    title: 'Soya Beans',
    // Price: '2.9421 (£ per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:require('../../Images/soyaBeans.jpeg'),
  },
  {
    title: 'Irish Potatoes',
    // Price: '2.4013 (£ per KG)',
    Price1:'3.2018 ( $ per KG)',
    img1:require('../../Images/irishPotatoes.jpeg'),
  },
  {
    title: 'Matooke ( Fingers )',
    // Price: '2.0842 (£ per KG)',
    Price1:'2.7790 ( $ per KG)',
    img1:require('../../Images/matookeFingers.jpeg'),
    
  },
  {
    title: 'Matooke ( 1 bunch )',
    // Price: '10.4286 (£ per KG)',
    Price1:'13.9048 ( $ per KG)',
    img1:require('../../Images/matookeBunch.jpeg'),
  },
  {
    title: 'Pineapples ( Whole )',
    // Price: '2.9421 (£ per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:require('../../Images/pineapples.jpeg'),
  },
  {
    title: 'Tilapia ( Whole )',
    // Price: '5.2101 (£ per KG)',
    Price1:'6.9468 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },{
    title: 'Turkey ( Whole )',
    // Price: '24.4356 $ (per KG)',
    Price1:'32.5808 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Sweet potatoes',
    // Price: '7.4781 (£ per KG)',
    Price1:'9.9708 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: '  Tomatoes',
    // Price: '2.9841 (£ per KG)',
    Price1:'3.9788 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Fresh Oranges ( HS Code )',
    // Price: '2.0916 (£ per KG)',
    Price1:'4.6208 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Apples',
    // Price: '4.8699 (£ per KG)',
    Price1:'6.4932 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Onions',
    // Price: '2.8413 (£ per KG)',
    Price1:'3.7884 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },{
    title: ' Lettuce ',
    // Price: '2.8197 (£ per KG)',
    Price1:'3.7596 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Guavas',
    // Price: '3.7926 (£ per KG)',
    Price1:'5.0568 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },

  //second batch
  {
    title: 'Jack fruit',
    // Price: '5.2101 $ (per KG)',
    Price1:'6.9468 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Mangoes',
    // Price: '4.6788 $ (per KG)',
    Price1:'4.6788 ( $ per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
  },
  {
    title: 'Passion Fruit',
    // Price: ' $ (per KG)',
    Price1:'5.0568 ( $ per KG)',
    img1:require('../../Images/cavendish.jpeg'),
  },
  {
    title: 'Pawpaw',
    // Price: '4.0761 $ (per KG)',
    Price1:'5.4348 ( $ per KG)',
    img1:require('../../Images/cow-peas.jpg'),
  },
  
  {
    title: 'Small Bananas',
    // Price: '2.2019 $ (per KG)',
    Price1:'2.29358 ( $ per KG)',
    img1:require('../../Images/soyaBeans.jpeg'),
  },
  {
    title: 'Watermelon ( Black )',
    // Price: '4.0761 $ (per KG)',
    Price1:'5.4348 ( $ per KG)',
    img1:require('../../Images/irishPotatoes.jpeg'),
  },
  {
    title: 'Watermelon ( Zebra )',
    // Price: '4.0026 $ (per KG)',
    Price1:'5.3368 ( $ per KG)',
    img1:require('../../Images/matookeFingers.jpeg'),
    
  },
  {
    title: 'Spinach',
    // Price: '4.6431 $ (per KG)',
    Price1:'6.1908 ( $ per KG)',
    img1:require('../../Images/matookeBunch.jpeg'),
  },
  {
    title: ' Beetroot',
    // Price: '3.2256 $ (per KG)',
    Price1:'4.3008 ( $ per KG)',
    img1:require('../../Images/pineapples.jpeg'),
  },
  {
    title: 'Egg plant',
    // Price: '2.9421 $ (per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  
  {
    title: 'Bittet Gourd',
    // Price: '3.3674 $ (per KG)',
    Price1:'4.4898 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Bottle Gourd',
    // Price: '3.0839 $ (per KG)',
    Price1:'4.1118 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: '  Broccoli',
    // Price: '4.0761 $ (per KG)',
    Price1:'5.4348 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },
  {
    title: 'Butter nuts',
    // Price: '3.1101 $ (per KG)',
    Price1:'4.1468 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Cauli Flower',
    // Price: '3.1101 $ (per KG)',
    Price1:'4.1468 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Celery',
    // Price: '4.0761 $ (per KG)',
    Price1:'5.4348 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  
  {
    title: ' Cherry Tomatoes ',
    // Price: '2.8197 $ (per KG)',
    Price1:'8.0808 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },
  {
    title: 'Cluster Beans',
    // Price: '4.6788 $ (per KG)',
    Price1:'4.6788 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
  },

  //

  {
    title: 'Colored pepper',
    // Price: '5.2101 $ (per KG)',
    Price1:'6.9468 ( $ per KG)',
    img1:require('../../Images/latundanBanana.jpeg'),
    
  },


 {
   title: 'Cucumbers',
  //  Price: '2.6586 ( $ per KG)',
   Price1: '3.5448 ( $ per KG)',
  img1:require('../../Images/freshCassava.jpeg'),
   },

{
   title: 'Fresh Yam',
  //  Price: '3.2256 ( $ per KG)',
   Price1: '4.3008 ( $ per KG)',
   img1:require('../../Images/freshCassava.jpeg'),
  },
  {
   title: 'Garlic',
  //  Price: '6.0606 ( $ per KG)',
   Price1: '8.0808 ( $ per KG)',
   img1:require('../../Images/freshCassava.jpeg'),
  },
  {
     title: 'Green Amaranth',
    //  Price: '2.6586 ( $ per KG)',
     Price1: '3.5448 ( $ per KG)',
     img1:require('../../Images/freshCassava.jpeg'),
    },
    
  {
    title: 'Green Chillies',
    // Price: '3.5091 ( $ per KG)',
    Price1: '4.6788 ( $ per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
   },

   {
    title: 'Green peppers',
    Price: '2.9421 ( $ per KG)',
    Price1: '3.9228 ( $ per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
     },

   {
     title: 'Mushroom Loose',
     Price: '5.2101 ( $ per KG)',
     Price1: '6.9468 ( $ per KG)',
     img1:require('../../Images/freshCassava.jpeg'),
    },
     {
     title: 'Okra',
    //  Price: '2.9421 ( $ per KG)',
     Price1: '3.9228 ( $ per KG)',
     img1:require('../../Images/freshCassava.jpeg'),
    },
    
   {
     title: 'Plantain',
    // Price: '3.7926 ( $ per KG)',
    Price1: '5.0568 ( $ per KG)',
    img1:require('../../Images/freshCassava.jpeg'),
    },
    {
     title: 'Pok Choy',
    //  Price: '2.9421 ( $ per KG)',
     Price1: '3.9228 ( $ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Pumpkin',
        Price: '4.6788 ( $ per KG)',
        Price1: '3.5091 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Radish',
        Price: '3.2256 ( $ per KG)',
        Price1: '4.3008 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
    
      {
        title: 'Red Amaranth',
        Price: '2.9001 ( $ per KG)',
        Price1: '3.8668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Spring Onions',
        Price: '4.0761 ( $ per KG)',
        Price1: '5.4348 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Taro Roots',
        Price: '3.7926 ( $ per KG)',
        Price1: '5.0568 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Kibite Onions',
        Price: '4.0761 ( $ per KG)',
        Price1: '5.4348 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
      {
        title: 'Zucchini',
        Price: '3.2256( $ per KG)',
        Price1: '4.3008 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
     title: 'Bitter Berries',
        Price: '3.7926 ( $ per KG)',
        Price1: '5.0568 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Black Sunflower seeds',
        Price: '3.7926 ( $ per KG)',
        Price1: '5.0568 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Chick Peas',
        Price: '5.2101 ( $ per KG)',
        Price1: '6.9468 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
      {
        title: 'Cinammon',
        Price: '11.7306 ( $ per KG)',
        Price1: '15.6408 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Cinammon Sticks',
        Price: '12.4656 ( $ per KG)',
        Price1: '16.6208 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Cloves',
        Price: '16.3519 ( $ per KG)',
        Price1: '21.8025 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Corriander',
        Price: '8.8956 ( $ per KG)',
        Price1: '11.8608 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
    //
    
      {
        title: 'Dried Ginger',
        Price: '11.7306 ( $ per KG)',
        Price1: '15.6408 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Dried Turmeric',
        Price: '10.8801 ( $ per KG)',
        Price1: '14.5068 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Hibiscus',
        Price: '10.3131 ( $ per KG)',
        Price1: '13.7508 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Lentil',
        Price: '5.4936 ( $ per KG)',
        Price1: '7.3248 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
      {
        title: 'Moringa Oleifera seeds',
        Price: '8.0451 ( $ per KG)',
        Price1: '10.7268 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Cinnamon leaves / Bay Leaves',
        Price: '2.5169 ( $ per KG)',
        Price1: '3.3558 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
      {
        title: 'Basil',
        Price: '2.8004 ( $ per KG)',
        Price1: '3.7338 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Chives',
        Price: '3.2256 ( $ per KG)',
        Price1: '4.3008 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
      {
        title: 'Coriander',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Curry Leaves',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Dill',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Fenugreek leaves',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    {
        title: 'Ginger',
        Price: '3.5091 ( $ per KG)',
        Price1: '4.6788 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Mint Leaves',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    {
        title: 'Mondia Whitei',
        Price: '4.6431 ( $ per KG)',
        Price1: '6.1908 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Persley',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    {
        title: 'Rosemars',
        Price: '2.3751 ( $ per KG)',
        Price1: '3.1668 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
      {
        title: 'Thyme',
        Price: '2.6586 ( $ per KG)',
        Price1: '3.5448 (£ per KG)',
        img1:require('../../Images/freshCassava.jpeg'),
      },
    
    
    
    
    
    
    
    
    
    
    

  
  
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
      <ShoppingCartOutlined />,
      <PhoneOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={item.title}
      // description={item.Price}
    
      
    />
    <br/>
    <p>
      {item.Price}
    </p>
    <br/>
    <p>
      {item.Price1}
    </p>
  </Card>
        {/* <Card title={item.title} description={item.description}>Card content</Card> */}
        
      </List.Item>
    )}
  />,


    </HeroSectionContainer>
  )
}

export default HeroSection