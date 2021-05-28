import React from 'react'
import { Card, CardBody, CardImg, CardText } from 'reactstrap'
import { DataServicePage2 } from '../../Data/DataServicePage2'
import './Services.css'

export const ServicePage2 = () => {
    const minService = DataServicePage2.map( ( { src, header, title }, idx ) => {
        return (
            <div className='col-lg-3 col-md-2' key={ idx } >
                <Card className='post' >
                    <CardImg width='100%' top src={ src } alt='' />
                    <CardBody>
                        <CardText tag='h5'> { header } </CardText>
                        <CardText> { title } </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <div className="service-page-2 text-center">
            <h4> Our Experts Chief </h4>
            <div className='underline'></div>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod </p>
            <div className='underline'></div>
            <section className='background' >
                <div className='container text-center'>
                    <diiv className='row'>
                        { minService }
                    </diiv>    
                </div>
            </section>
        </div>
    )
}
