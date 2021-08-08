import React from 'react'
import NavigationBar from '../component/NavigationBar'
import Axios from 'axios'
import {
    Card,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:2000/products')
            .then(res => {
                this.setState({ products: res.data })
            })
    }

    showProduct = () => {
        return(
            this.state.products.map((item, index) => {
                return (
                    <Card style={styles.card} key={index}>
                        <div style={styles.cardImg}>
                            <Card.Img variant="top" src={item.img} />
                        </div>
                        <Card.Body style={styles.cardBody}>
                            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
                            <Card.Text><strong>IDR {item.price.toLocaleString()},00</strong>,stock {item.stock}</Card.Text>
                            <div style={styles.contButton}>
                                <Button variant="outline-light">
                                    <i className="far fa-bookmark"></i>
                                </Button>
                                <Button variant="outline-light" as={Link} to={`/cart?${item.id}`}>
                                    <i className="fas fa-cart-plus"></i> Buy Now
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div style={styles.contProducts}>
                    {this.showProduct()}
                </div>
            </div>
        )
    }
}

const styles = {
    cardImg: {
        padding: '15px'
    },
    card: {
        borderRadius: '15px 15px 15px 15px',
        width: '18rem',
        marginBottom: '15px',
        marginTop: '15px'
    },
    cardBody: {
        backgroundColor: '#2D4059',
        borderRadius: '15px 15px 15px 15px',
        color: '#f8f9fa'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    contProducts: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderRadius: "10px"
    },
}

export default HomePage