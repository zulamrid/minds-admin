import React from 'react';
import './page2.css';
import Header from '../../../Components/Header/Header';
import Card from '../../../Components/Card/Card';
import { receptionist_body, form_label } from '../../../Helper';
import Upload from '../../../Components/Inputgroup/Upload/Upload';
import Input from '../../../Components/Inputgroup/Input/Input';

export default function Index() {
    return (
        <div>
            <Header />
            <div className="page2-container">
                <div className="section1">
                    <Card
                        title={receptionist_body.page2.basic}
                    >
                        <div className="body">
                            <Upload
                                label={form_label.logo}
                            />
                            <Input
                                label={form_label.pin}
                                placeholder=""
                            />
                        </div>
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
                <div className="section2">
                aaa
                </div>
            </div>
        </div>
    )
}
