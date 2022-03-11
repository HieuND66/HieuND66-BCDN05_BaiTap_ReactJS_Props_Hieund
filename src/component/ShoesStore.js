import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  productList = [
    {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "./image/shoes/shoes01.png"
    },
    {
      "id": 2,
      "name": "Adidas Prophere Black White",
      "alias": "adidas-prophere-black-white",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 990,
      "image": "./image/shoes/shoes02.png"
    },
    {
      "id": 3,
      "name": "Adidas Prophere Customize",
      "alias": "adidas-prophere-customize",
      "price": 375,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 415,
      "image": "./image/shoes/shoes03.png"
    },
    {
      "id": 4,
      "name": "Adidas Super Star Red",
      "alias": "adidas-super-star-red",
      "price": 465,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 542,
      "image": "./image/shoes/shoes04.png"
    },
    {
      "id": 5,
      "name": "Adidas Swift Run",
      "alias": "adidas-swift-run",
      "price": 550,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 674,
      "image": "./image/shoes/shoes05.png"
    },
    {
      "id": 6,
      "name": "Adidas Tenisky Super Star",
      "alias": "adidas-tenisky-super-star",
      "price": 250,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 456,
      "image": "./image/shoes/shoes06.png"
    },
    {
      "id": 7,
      "name": "Adidas Ultraboost 4",
      "alias": "adidas-ultraboost-4",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 854,
      "image": "./image/shoes/shoes07.png"
    },
    {
      "id": 8,
      "name": "Adidas Yeezy 350",
      "alias": "adidas-yeezy-350",
      "price": 750,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 524,
      "image": "./image/shoes/shoes08.png"
    },
    {
      "id": 9,
      "name": "Nike Adapt BB",
      "alias": "nike-adapt-bb",
      "price": 630,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 599,
      "image": "./image/shoes/shoes09.png"
    },
    {
      "id": 10,
      "name": "Nike Air Max 97",
      "alias": "nike-air-max-97",
      "price": 650,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 984,
      "image": "./image/shoes/shoes10.png"
    },
    {
      "id": 11,
      "name": "Nike Air Max 97 Blue",
      "alias": "nike-air-max-97-blue",
      "price": 450,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 875,
      "image": "./image/shoes/shoes11.png"
    },
    {
      "id": 12,
      "name": "Nike Air Max 270 React",
      "alias": "nike-air-max-270-react",
      "price": 750,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 445,
      "image": "./image/shoes/shoes12.png"
    }
  ]
 
  state = {
    shoes : {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "./image/shoes/shoes01.png"
    }
  }
  showModal = (newshoes) => {
    this.setState({shoes: newshoes})
  }
  render() {
    return (
      <div className='container'>
        <ProductList productList = {this.productList} xemChiTiet = {this.showModal}/>
        <Modal shoesState = {this.state.shoes}/>
      </div>
    )
  }
}
