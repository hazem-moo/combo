import React from 'react'
import { LogoMenu } from '../Mune_Page/LogoMenu'
import './About.css'
import Logo from '../../Images/+1.jpg'

export const AboutPageAr = () => {
    return (
        <>
         <LogoMenu />
         <section className='container about'>
            <div className='row'>
                <div className='col-lg-6'>
                    <article className='post'>
                        <h4 > about معلومات عن مطعمنا </h4>
                        <p> 
                            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.
                        </p>
                    </article>
                </div>

                <div  className='col-lg-6'>
                    <div className='post-img overflow-hidden mb-5'>
                        <img src={ Logo } alt='' className='w-100 ' />                
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
