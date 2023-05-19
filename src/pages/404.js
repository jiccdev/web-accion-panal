import React from 'react'
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import NotFoundError from '@/components/NotFound404';

const NotFound = () => {
    return (
        <>
            <HeadPage>
                <title>Acción Panal | 404</title>
            </HeadPage>

            <LayoutPage>
                <NotFoundError/>
            </LayoutPage>
        </>
    )
}

export default NotFound
