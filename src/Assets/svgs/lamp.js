const Lamp = props => {
    return(
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2_275)">
            <circle cx="80" cy="80" r="32" fill="#F0FE55"/>
            </g>
            <defs>
            <filter id="filter0_f_2_275" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="24" result="effect1_foregroundBlur_2_275"/>
            </filter>
            </defs>
        </svg>

    )
}

export default Lamp;