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
    // Price: '2.3751 ( $ per KG)',
    Price1:'3.1668 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/latundanBanana.jpeg',
    
  },
  {
    title: 'Fresh Cassava',
    // Price: '2.0916 ( $ per KG)',
    Price1:'2.7888 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/freshCassava.jpeg',
  },
  {
    title: 'Cavendish ( Bogoya )',
    // Price: '3.0838 ( $ per KG)',
    Price1:'4.1118 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cavendish.jpeg',
  },
  {
    title: 'Cow Peas',
    // Price: '2.80035 ( $ per KG)',
    Price1:'3.7338 ( $ per KG)',
    img1:require('../../Images/cow-peas.jpg'),
  },{
    title: 'Soya Beans',
    // Price: '2.9421 ( $ per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/soyaBeans.jpeg',
  },
  {
    title: 'Irish Potatoes',
    // Price: '2.4013 ( $ per KG)',
    Price1:'3.2018 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/irishPotatoes.jpeg',
  },
  {
    title: 'Matooke ( Fingers )',
    // Price: '2.0842 ( $ per KG)',
    Price1:'2.7790 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/matookeFingers.jpeg',
    
  },
  {
    title: 'Matooke ( 1 bunch )',
    // Price: '10.4286 ( $ per KG)',
    Price1:'13.9048 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/matookeBunch.jpeg',
  },
  {
    title: 'Pineapples ( Whole )',
    // Price: '2.9421 ( $ per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/pineapples.jpeg',
  },
  {
    title: 'Tilapia ( Whole )',
    // Price: '5.2101 ( $ per KG)',
    Price1:'6.9468 ( $ per KG)',
    img1: 'https://d322abd807wvow.cloudfront.net/suwik-photos/tilapia.jpg',
  },{
    title: 'Turkey ( Whole )',
    // Price: '24.4356 $ (per KG)',
    Price1:'32.5808 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/turkey.jpeg',
  },

  //last edit

  


   {
    title: 'Sweet potatoes',
    // Price: '7.4781 ( $ per KG)',
    Price1:'9.9708 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/sweetPotatoes.jpeg',
  },

    {
    title: 'Tomatoes',
    // Price: '2.9841 ( $ per KG)',
    Price1:'3.9788 ( $ per KG)',
    img1: 'https://d322abd807wvow.cloudfront.net/suwik-photos/tomatoes.jpeg',
   },

    {
    title: 'Fresh Oranges ( HS Code )',
    // Price: '2.0916 ( $ per KG)',
    Price1:'4.6208 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/oranges.jpeg',
    },

    {
     title: 'Apples',
        // Price: '4.8699 ( $ per KG)',
     Price1:'6.4932 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/apples.jpeg',
  },

    {
    title: 'Onions',
    // Price: '2.8413 ( $ per KG)',
    Price1:'3.7884 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/onions.jpeg',
    },
    {
     title: ' Lettuce ',
     // Price: '2.8197 ( $ per KG)',
     Price1:'3.7596 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/lettuce.jpeg',
   },

  {
    title: 'Guavas',
    // Price: '3.7926 ( $ per KG)',
    Price1:'5.0568 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/guavas.jpeg',
    },
    
    
      //second batch
   {
     title: 'Jack fruit',
     // Price: '5.2101 $ (per KG)',
     Price1:'6.9468 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/jackFruit.jpeg',
    
   },

     {
     title: 'Mangoes',
     // Price: '4.6788 $ (per KG)',
     Price1:'4.6788 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/mangoes.jpeg',
    },

    {
    title: 'Passion Fruit',
    // Price: ' $ (per KG)',
    Price1:'5.0568 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/passionFruit.jpeg',
    },

    {
     title: 'Pawpaw',
     // Price: '4.0761 $ (per KG)',
     Price1:'5.4348 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/pawpaw.jpeg',
    },
    
    {
    title: 'Small Bananas',
    // Price: '2.2019 $ (per KG)',
    Price1:'2.29358 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/smallBananas.jpeg',
  },

  {
     title: 'Watermelon ( Black )',
     // Price: '4.0761 $ (per KG)',
     Price1:'5.4348 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/watermelonBlack.jpeg',
  },

   {
     title: 'Watermelon ( Zebra )',
     // Price: '4.0026 $ (per KG)',
     Price1:'5.3368 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/watermelonZebra.jpeg',
    },

   {
    title: 'Spinach',
    // Price: '4.6431 $ (per KG)',
    Price1:'6.1908 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/spinach.jpeg',
    },

    {
    title: ' Beetroot',
    // Price: '3.2256 $ (per KG)',
    Price1:'4.3008 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/beetroot.jpeg',
    },
    

    //third batch
    {
    title: 'Egg plant',
    // Price: '2.9421 $ (per KG)',
    Price1:'3.9228 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/eggPlant.jpeg',
  },
     
    {
    title: 'Bitter Gourd',
    // Price: '3.3674 $ (per KG)',
    Price1:'4.4898 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/bitterGourd.jpeg',
    },


    {
     title: 'Bottle Gourd',
     // Price: '3.0839 $ (per KG)',
     Price1:'4.1118 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/bottleGourd.jpeg',
     },

    {
     title: 'Broccoli',
     // Price: '4.0761 $ (per KG)',
     Price1:'5.4348 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/broccoli.jpeg',
     
    },
    {
     title: 'Butter nuts',
        // Price: '3.1101 $ (per KG)',
    Price1:'4.1468 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/butternuts.jpeg',
      },
      {
        title: 'Cauli Flower',
        // Price: '3.1101 $ (per KG)',
        Price1:'4.1468 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cauliFlower.jpeg',
      },
      {
        title: 'Celery',
        // Price: '4.0761 $ (per KG)',
        Price1:'5.4348 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/celery.jpeg',
      },
      
      {
        title: ' Cherry Tomatoes ',
        // Price: '2.8197 $ (per KG)',
        Price1:'8.0808 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cherryTomatoes.jpeg',
      },

      {
    title: 'Cluster Beans',
        // Price: '4.6788 $ (per KG)',
    Price1:'4.6788 ( $ per KG)',
    img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/clusterBeans.jpeg',
     },
    
    
      //
    
    
      {
        title: 'Colored pepper',
        // Price: '5.2101 $ (per KG)',
        Price1:'6.9468 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/coloredPeppers.jpeg',
        
      },
    
    
    
     {
       title: 'Cucumbers',
      //  Price: '2.6586 ( $ per KG)',
       Price1: '3.5448 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cucumbers.jpeg',
       },
    
    
    {
       title: 'Fresh Yam',
      //  Price: '3.2256 ( $ per KG)',
       Price1: '4.3008 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/yams.jpeg',
      },


      {
       title: 'Garlic',
      //  Price: '6.0606 ( $ per KG)',
       Price1: '8.0808 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/garlic.jpeg',
      },
      {
         title: 'Green Amaranth',
        //  Price: '2.6586 ( $ per KG)',
         Price1: '3.5448 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/greenAmaranth.jpeg',
        },
        
      {
        title: 'Green Chillies',
        // Price: '3.5091 ( $ per KG)',
        Price1: '4.6788 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/greenChillies.jpeg',
       },
    
    
       {
        title: 'Green peppers',
        // Price: '2.9421 ( $ per KG)',
        Price1: '3.9228 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/greenPeppers.jpeg',
         },
    
    
       {
         title: 'Mushroom Loose',
        //  Price: '5.2101 ( $ per KG)',
         Price1: '6.9468 ( $ per KG)',
        img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/mushroomLoose.jpeg',
        },


    {
      title: 'Okra',
      // Price: '2.9421 $ (per KG)',
      Price1:'3.9228 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/okra.jpeg',
    },

    {
      title: 'Plantain',
      // Price: '2.0916 ( $ per KG)',
      Price1:'5.0568 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/plantain.jpeg',
    },
    {
      title: 'Pok Choy',
      // Price: '3.0838 ( $ per KG)',
      Price1:'3.9228 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/pokChoy.jpeg',
    },
    {
      title: 'Pumpkin',
      // Price: '2.80035 ( $ per KG)',
      Price1:'4.6788 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/soyaBeans.jpeg',
    },{
      title: 'Radish',
      // Price: '2.9421 ( $ per KG)',
      Price1:'4.3008 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/radish.jpeg',
    },
    {
      title: 'Red Amaranth',
      // Price: '2.4013 ( $ per KG)',
      Price1:'3.8668 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/redAmaranth.jpeg',
    },
    {
      title: 'Spring Onions',
      // Price: '2.0842 ( $ per KG)',
      Price1:'5.4348 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/springOnions.jpeg',
      
    },
    {
      title: 'Taro Roots',
      // Price: '10.4286 ( $ per KG)',
      Price1:'5.0568 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/taroRoots.jpeg',
    },
    {
      title: 'Kibite Onions',
      // Price: '2.9421 ( $ per KG)',
      Price1:'5.4348 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/kibiteOnions.jpeg',
    },
    {
      title: 'Zucchini',
      // Price: '5.2101 ( $ per KG)',
      Price1:'4.3008 ( $ per KG)',
      img1: 'https://d322abd807wvow.cloudfront.net/suwik-photos/zucchini.jpeg',
    },{
      title: 'Bitter Berries',
      // Price: '24.4356 $ (per KG)',
      Price1:'5.0568 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/bitterBerries.jpeg',
    },
  
    //last edit
  
     {
      title: 'Black Sunflower Seeds',
      // Price: '7.4781 ( $ per KG)',
      Price1:'5.0568 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/blackSunflowerSeeds.jpeg',
    },
  
      {
      title: 'Chick Peas',
      // Price: '2.9841 ( $ per KG)',
      Price1:'6.9468 ( $ per KG)',
      img1: 'https://d322abd807wvow.cloudfront.net/suwik-photos/chickPeas.jpeg',
     },
  
      {
      title: 'Cinnamon',
      // Price: '2.0916 ( $ per KG)',
      Price1:'15.6408 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cinnamon.jpeg',
      },
  
      {
       title: 'Cinnamon Sticks',
          // Price: '4.8699 ( $ per KG)',
       Price1:'16.6208 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cinnamonSticks.jpeg',
    },
  
      {
      title: 'Cloves',
      // Price: '2.8413 ( $ per KG)',
      Price1:'21.8025 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cloves.jpeg',
      },
      {
       title: ' Corriander ',
       // Price: '2.8197 ( $ per KG)',
       Price1:'11.8608 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/corriander.jpeg',
     },
  
    {
      title: 'Dried Ginger',
      // Price: '3.7926 ( $ per KG)',
      Price1:'15.6408 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/driedGinger.jpeg',
      },
      
      
        //second batch
     {
       title: ' Dried Turmeric',
       // Price: '5.2101 $ (per KG)',
       Price1:'14.5068 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/driedTurmeric.jpeg',
      
     },
  
       {
       title: 'Hibiscus',
       // Price: '4.6788 $ (per KG)',
       Price1:'13.7508 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/Hibiscus.jpeg',
      },
  
      {
      title: 'Lentil',
      // Price: ' $ (per KG)',
      Price1:'7.3248 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/lentil.jpeg',
      },
  
      {
       title: 'Moringa Oleifera Seeds',
       // Price: '4.0761 $ (per KG)',
       Price1:'10.7268 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/moringaSeeds.jpeg',
      },
      
      {
      title: 'Wheat seeds',
      // Price: '2.2019 $ (per KG)',
      Price1:'4.1118 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/wheatSeeds.jpeg',
    },
  
    {
       title: 'Cinnamon/Bay leaves',
       // Price: '4.0761 $ (per KG)',
       Price1:'3.3558 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/cinnamonLeaves.jpeg',
    },
  
     {
       title: 'Basil',
       // Price: '4.0026 $ (per KG)',
       Price1:'3.7338 ( $ per KG)',
       img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/basil.jpeg',
      },
  
     {
      title: 'Chives',
      // Price: '4.6431 $ (per KG)',
      Price1:'4.3008 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/chives.jpeg',
      },
  
      {
      title: 'Coriander',
      // Price: '3.2256 $ (per KG)',
      Price1:'3.1668 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/beetroot.jpeg',
      },
      
      {
      title: 'Curry Leaves',
      // Price: '2.9421 $ (per KG)',
      Price1:'3.1668 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/eggPlant.jpeg',
    },

    {
      title: 'Dill',
      // Price: '4.0026 $ (per KG)',
      Price1:'3.1668 ( $ per KG)',
      img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/dill.jpeg',
     },
 
    {
     title: 'Fenugreek leaves',
     // Price: '4.6431 $ (per KG)',
     Price1:'3.1668 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/fenugreekLeaves.jpeg',
     },
 
     {
     title: 'Ginger',
     // Price: '3.2256 $ (per KG)',
     Price1:'4.6788 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/ginger.jpeg',
     },
     
 
     {
     title: 'Mint Leaves',
     // Price: '2.9421 $ (per KG)',
     Price1:'3.1668 ( $ per KG)',
     img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/eggPlant.jpeg',
   },
  
   {
    title: 'Mondia Whitei',
    // Price: '4.0026 $ (per KG)',
    Price1:'6.1908 ( $ per KG)',
    img1:require('../../Images/mondiaWhitei.jpg'),
   },

  {
   title: 'Persley',
   // Price: '4.6431 $ (per KG)',
   Price1:'3.1668 ( $ per KG)',
   img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/persley.jpeg',
   },

   {
   title: 'Rosemars',
   // Price: '3.2256 $ (per KG)',
   Price1:'3.1668 ( $ per KG)',
   img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/beetroot.jpeg',
   },
   

   {
   title: 'Thyme',
   // Price: '2.9421 $ (per KG)',
   Price1:'3.5448 ( $ per KG)',
   img1:'https://d322abd807wvow.cloudfront.net/suwik-photos/thyme.jpeg',
 },
];



const HeroSection = () => {
  return (
    <HeroSectionContainer>

<List
    grid={{
      gutter: 2,
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