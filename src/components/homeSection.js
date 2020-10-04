import React from 'react'
import ComunityDescription from './comunityDescription'
import SocialNetworks from './socialNetworks'
import pathSVG from '../../public/static/iconos/path.svg'

export default function homeSection() {
    return (
        <div className="ec-container home-section-container">
            <ComunityDescription />
            <SocialNetworks />
        </div>
    )
}