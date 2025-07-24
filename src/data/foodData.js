import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';
import item5 from '../assets/item5.png';
import item6 from '../assets/item6.png';
import item7 from '../assets/item7.png';
import item8 from '../assets/item8.png';
import item9 from '../assets/item9.png';
import item10 from '../assets/item10.png';
import item11 from '../assets/item11.png';
import item12 from '../assets/item12.png';

const foodData = [
    {
      id: 1,
      name: "Hyderabadi Dum Biryani",
      description: "Aromatic basmati rice layered with tender spiced meat, slow-cooked to perfection in the traditional Hyderabadi style.",
      price: 299,
      category: "biryani",
      image: item1,
      popular: true
    },
    {
      id: 2,
      name: "Butter Chicken Pizza",
      description: "The perfect fusion pizza topped with creamy butter chicken, mozzarella cheese, and fresh cilantro.",
      price: 349,
      category: "pizza",
      image: item2,
      popular: true
    },
    {
      id: 3,
      name: "Classic Cheese Burger",
      description: "Juicy beef patty with melted cheddar cheese, fresh lettuce, tomato, and our secret sauce.",
      price: 199,
      category: "burger",
      image: item3,
      popular: false
    },
    {
      id: 4,
      name: "Masala Fries",
      description: "Crispy golden fries tossed in our special Hyderabadi spice blend.",
      price: 149,
      category: "sides",
      image: item4,
      popular: false
    },
    {
      id: 5,
      name: "Mango Lassi Shake",
      description: "Refreshing mango yogurt shake with a hint of cardamom.",
      price: 129,
      category: "beverages",
      image: item5,
      popular: true
    },
    {
      id: 6,
      name: "Paneer Tikka Pizza",
      description: "Tandoori paneer chunks, bell peppers, and onions on a cheesy pizza base.",
      price: 299,
      category: "pizza",
      image: item6,
      popular: false
    },
    {
      id: 7,
      name: "Peri-Peri Chicken Burger",
      description: "Spicy grilled chicken breast with peri-peri sauce, crisp lettuce, and cheese.",
      price: 229,
      category: "burger",
      image: item7,
      popular: true
    },
    {
      id: 8,
      name: "Creamy Mushroom Pasta",
      description: "Fettuccine pasta in a rich garlic and mushroom cream sauce.",
      price: 269,
      category: "pasta",
      image: item8,
      popular: false
    },
    {
      id: 9,
      name: "Spicy Arrabbiata Pasta",
      description: "Penne pasta in a fiery tomato sauce with garlic, chili flakes, and fresh basil.",
      price: 249,
      category: "pasta",
      image: item9,
      popular: false
    },
    {
      id: 10,
      name: "Chocolate Oreo Shake",
      description: "Decadent chocolate milkshake blended with Oreo cookies and topped with whipped cream.",
      price: 159,
      category: "beverages",
      image: item10,
      popular: true
    },
    {
      id: 11,
      name: "Tandoori Chicken Pizza",
      description: "Classic pizza topped with marinated tandoori chicken, bell peppers, and onions.",
      price: 329,
      category: "pizza",
      image: item11,
      popular: true
    },
    {
      id: 12,
      name: "Veg Supreme Burger",
      description: "Plant-based patty with fresh vegetables, cheese, and our special sauce.",
      price: 189,
      category: "burger",
      image: item12,
      popular: false
    }
  ];
  
  export default foodData;