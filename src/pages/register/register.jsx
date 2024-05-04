import React, { useCallback } from "react";
import { Form, Checkbox, Button, Banner } from '@douyinfe/semi-ui';
import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';
import { LoginNotification } from "../../notif/LoginMessage";
import { open } from "@tauri-apps/api/shell";

const Register = () => {
    const navigate = useNavigate();
    function handleOnClickPresetting() {
        //LoginNotification();
        return navigate('/Main', { replace: true }), [navigate];
    }

    function handleOnClickBackLogin() {
        //LoginNotification();
        return navigate('/Login', { replace: true }), [navigate];
    }
    function copyrightLink(){
        open("https://alextec.icu")
    }
    return (
        <div className={styles.rootSignupLogins}>
            <div className={styles.main}>
                <div className={styles.login}>
                    <div className={styles.component66}>
                        <img
                            src="https://lf9-static.semi.design/obj/semi-tos/template/caee33dd-322d-4e91-a4ed-eea1b94605bb.png"
                            className={styles.logo}
                        />
                        <div className={styles.header}>
                            <p className={styles.title}>用户注册</p>
                            <p className={styles.text}>
                                <span className={styles.text1}> AlextecPasswordManager </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <Form className={styles.inputs}>
                            <Form.Input
                                label={{ text: "用户名" }}
                                field="input"
                                placeholder="输入用户名"
                                style={{ width: "100%" }}
                                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                            />
                            <Form.Input
                                label={{ text: "邮箱" }}
                                field="input"
                                placeholder="输入邮箱"
                                style={{ width: "100%" }}
                                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                            />
                            <Form.Input
                                label={{ text: "密码" }}
                                field="field1"
                                placeholder="输入密码"
                                style={{ width: "100%" }}
                                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                            />
                            <Form.Input
                                label={{ text: "确认密码" }}
                                field="field1"
                                placeholder="确认密码"
                                style={{ width: "100%" }}
                                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                            />
                        </Form>

                        <Button theme="solid" className={styles.button} >
                            注册
                        </Button>
                        <Button theme="solid" className={styles.button} onClick={() => handleOnClickBackLogin()}>
                            返回登录
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.copyright} onClick={() => copyrightLink()}>©2024 Alextec.icu</div>
            <br />
        </div>
    );

}

export default Register;
