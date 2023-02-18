import React from 'react'
import '../Style.css'
import { FaHome } from 'react-icons/fa';

function Place() {
    return (
        <>
            <section className='container mt-5 mb-5 py-5 h-auto'>
                <div className='row'>

                    <div className='P1 col-lg-4'>
                        <h1 className='fs-4 text-center pt-5'>تقع رأس الخليج علي ضفه نهر النيل فرع دمياط (داخل دلتا مصر)</h1>

                        <div className='container mt-5 py-5'>
                            <div className='row'>

                                <div className='col-lg-6'>
                                    <a href='/'>رأس الخليج البلد</a>
                                </div>

                                <div className='col-lg-6'>
                                    <h1>+3400 فدان <FaHome /></h1>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='P2 col-lg-8'>
                        <h1>  الموقع الجغرافي : </h1>
                        <p className='text-white fs-5'>  تقع رأس الخليج علي ضفه نهر النيل فرع دمياط فيما بين مركزي شربين - محافظة الدقهلية جنوبيا ومركز كفر سعد شمالا ومركز فارسكور في الشمال الشرقي التابعين لمحافظة دمياط وتبعد جغرافيا عن شربين 17كم وعن عاصمة الدقهلية 38كم وتعد رأٍ الخليج اخر قرية في محافظة الدقهلية وأول قرية بالنسبة لمحافظة دمياط   (داخل دلتا مصر)</p>
                          <h1> المساحة : </h1>
                          <p className='text-white fs-5'>تبلغ مساحة رأس الخليج حوالي 3400 فدان وتبلغ المساحة التي تعيش عليها الكتلة السكانية  الحالية تقريبا ما يعادل 400 فدان تتركز في وسط المساحات الزراعية ويتبقي مساحة 3000 فدان كمساحة مزروعة مقسمة مابين المناطق الشمالية في البلدة والجنوبية والغربية والشرقية والتي تضم مناطق الجزيرة والمناطق المحاذية لفرع دمياط... الخ</p>

                    </div>
                </div>










            </section >


        </>
    )
}

export default Place