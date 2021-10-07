import React from 'react';
import Header from '../../../Components/Header/Header';
import Card from '../../../Components/Card/Card';
import { receptionist_body } from '../../../Helper';

export default function Index() {
    return (
        <div>
            <Header />
            <Card
                title={receptionist_body.page2.basic}
            >
                aaaa
            </Card>

            <Card
                title={receptionist_body.page2.screen}
            >
                aaaa
            </Card>

            <Card
                title={receptionist_body.page2.staff}
            >
                aaaa
            </Card>
        </div>
    )
}
