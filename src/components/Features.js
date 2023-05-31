import React, { useEffect } from 'react'
import '../styles/Features.scss'

let curr = 1
let timer
const elements = 7

function change() {
    const dotHandle = document.querySelector('.dot--active')
    if(dotHandle)dotHandle.classList.remove('dot--active')

    const featureHandle = document.querySelector('.feature--active')
    if(featureHandle)featureHandle.classList.remove('feature--active')

    document.querySelectorAll('.feature').forEach((el, i) => {
        if(i === curr - 1) el.classList.add('feature--active')
    })
    document.querySelectorAll('.dot').forEach((el, i) => {
        if(i === curr - 1) el.classList.add('dot--active')
    })
}

function handleClick(event) {
    for(const attr of event.target.attributes) {
        if(attr.name === 'data-feature') {
            curr = attr.value
            clearTimeout(timer)
            change()
            timer = setTimeout(autoChange, 5000)
            break
        }
    }

}
function autoChange() {
    if(curr < elements) curr++;
    else curr = 1;
    change()
    timer = setTimeout(autoChange, 5000)
}
const Features = () => {
    useEffect(() => {
        timer = setTimeout(autoChange, 5000)
    }, [])

    return (
        <section id='features'>
            <header>Learn about the features</header>
            <article className='feature feature--active'>
                <header>Mood tracking</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <article className='feature'>
                <header>Diet</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <article className='feature'>
                <header>Hydration monitor</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <article className='feature'>
                <header>To do list</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <article className='feature'>
                <header>Challenges</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <article className='feature'>
                <header>Meditation</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                  orem ipsum dolor sit amet
                </p>
            </article>
            <article className='feature'>
                <header>To do list</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc sed est vehicula facilisis et in erat.
                </p>
            </article>
            <div id="dots">
                <button data-feature='1' className='dot dot--active' onClick={handleClick}> </button>
                <button data-feature='2' className='dot' onClick={handleClick}> </button>
                <button data-feature='3' className='dot' onClick={handleClick}> </button>
                <button data-feature='4' className='dot' onClick={handleClick}> </button>
                <button data-feature='5' className='dot' onClick={handleClick}> </button>
                <button data-feature='6' className='dot' onClick={handleClick}> </button>
                <button data-feature='7' className='dot' onClick={handleClick}> </button>
            </div>
        </section>
    )
}

export default Features