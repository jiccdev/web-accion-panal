import HeadPage from '@/components/HeadPage/HeadPage'
import LayoutPage from '@/components/LayoutPage/LayoutPage'
import AboutComponent from '@/components/PageSections/About/index.jsx';
import React from 'react'

const nosotros = () => {
    return (
        <>
            <HeadPage>
                <title>Acción Panal | Nosotros</title>
            </HeadPage>
            <LayoutPage>
                <AboutComponent />
            </LayoutPage>
        </>
    )
}

export default nosotros
