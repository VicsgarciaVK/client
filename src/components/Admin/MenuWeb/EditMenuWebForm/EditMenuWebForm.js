import React, {useState, useEffect} from 'react';
import {Form, Button, Input, notification} from 'antd';
import {FontSizeOutlined, LinkOutlined} from '@ant-design/icons';

import {updateMenuApi} from '../../../../api/menu';
import {getAccessTokenApi} from '../../../../api/auth';

import './EditMenuWebForm.scss';

export default function EditMenuWebForm(props){
    const {setIsVisibleModal, setReloadMenuWeb, menu } = props;

    return(
        <div className="edit-menu-web-form">
            <h1><EditForm/></h1>
        </div>
    )
};

function EditForm(props){
    //const {menuWebData, setMenuWebData, menu, editMenu} = props


    return(
        <Form className="form-edit">
            <Form.Item>
                <Input
                    prefix={<FontSizeOutlined/>}
                    placeholder="Titulo"
                    //value
                    //onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="URL"
                    //value
                    //onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar Menu
                </Button>
            </Form.Item>
            
        </Form>
    )
}