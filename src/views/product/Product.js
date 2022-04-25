import React, { useEffect, useState } from "react";
import axios from "axios";
import numeral from "numeral";
import './Product.sass'


const Product = () =>{

    const [product, setProduct] = useState()
    const [size, setSize] = useState(null)
    const [count, setCount] = useState(1)


    useEffect(()=>{
        getProduct()
    },[])

    const getProduct = async() =>{
        
        const response = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js', {
        }).catch((error)=>{
            console.log(error.response)
           
        })
        console.log(response.data)
        setProduct(response.data)
        console.log(product)

    }
    const increment = () =>{
        console.log("i")
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count-1)
    }

    const fnSize = event =>{
        console.log(event.target.value)
    }

    return (
        <div>
            {
                product !== undefined ? 
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blBreadcrumb pt-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Catalog</li>
                                        <li className="breadcrumb-item">Sneakers</li>
                                        <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-lg-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                               
                                <div className="carousel-inner">
                                    {product.media.map((item, index)=>(
                                        <div className={`carousel-item  ${ index === 0 ? 'active' : ''} `} key={item.id}>
                                            <img src={item.src} className="d-block w-100" alt={item.alt} />
                                        </div>
                                    ))}
                                </div>
                                <div className="row mt-3">
                                    {product.media.slice(0,3).map((item, index)=>(
                                        <div className="col-4 " key={item.id} >
                                        
                                            <div  data-bs-target="#carouselExampleIndicators"  data-bs-slide-to={index} className={`${index === 0 ? 'active' : ''}`} aria-current="true" aria-label="Slide 1">
                                                <img src={item.preview_image.src} width="100%" alt="" />
                                            </div>
                                        </div>

                                    ))}
                                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">

                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="blProduct_c">
                                <div className="blProduct__cat">
                                    by Nike x ALYX
                                </div>
                                <div className="blProduct__tittle">
                                    {product.title}
                                </div>
                                <div className="blProduct__price">
                                    <span className="blProduct__price--min"> {numeral(product.price).format("$ 0,0")} </span> <span className="blProduct__price--max"> { numeral(product.compare_at_price).format("$ 0,0")}</span>
                                </div>
                                <div className="blProduct__color">
                                    {/* <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlhtmlFor="inlineRadio1">1</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlhtmlFor="inlineRadio1">1</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlhtmlFor="inlineRadio1">1</label>
                                    </div> */}
                                    
                                </div>
                                <div className="blProduct__size">
                                    <div className="form-check form-check-inline">
                                       <p>Size: </p>
                                    </div>
                                    {product.options[1].values.map((item, index)=>(
                                        <div className="form-check form-check-inline" key={index}>
                                            <input type="radio" className="btn-check" name="options" id={"option"+index} value={item} autoComplete="off" onChange={fnSize} />
                                            <label className="btn btn-secondary" htmlFor={"option"+index}>{item}</label>
                                        </div>
                                    ))}
                                    
                                    {/* <div className="form-check form-check-inline">
                                        <input type="radio" className="btn-check" name="options" id="option1" value={1} autoComplete="off" onChange={fnSize} />
                                        <label className="btn btn-secondary" htmlFor="option1">Checked</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="btn-check" name="options" id="option2" value={2} autoComplete="off" onChange={fnSize} />
                                        <label className="btn btn-secondary" htmlFor="option2">Checked1</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="btn-check" name="options" id="option3" value={3} autoComplete="off" onChange={fnSize} />
                                        <label className="btn btn-secondary" htmlFor="option3">Checked</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" htmlhtmlFor="inlineCheckbox2">2</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" htmlhtmlFor="inlineCheckbox2">2</label>
                                    </div> */}
                                </div>
                                <div className="blProduct__buy">
                                    <div className="blProduct__buy--count d-flex justify-content-between">
                                        <div className="blProduct__buy--count__value">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" onClick={decrement}>-</span>
                                                <input type="number" className="form-control" value={count} aria-label="" />
                                                <span className="input-group-text" onClick={increment}>+</span>
                                            </div>
                                        </div>
                                        
                                        <div className="blProduct__buy--count__total">
                                            <span className="pe-2">
                                                Total price: 
                                            </span>
                                            <span className="blProduct__buy--count__total--val">
                                                {numeral(product.price*count).format("$0,0")}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="blProduct__buy--action">
                                        <div className="btn btn-favorite">
                                            <span className="">Add to favorite</span>
                                        </div>
                                        <div className="btn btn-addCart">
                                            <span>Add to cart</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blProduct__description">
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }

            
        </div>
    )
}
export default Product