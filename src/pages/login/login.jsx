import React, { useCallback } from "react";
import { Form, Checkbox, Button, Banner } from '@douyinfe/semi-ui';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { LoginNotification } from "../../notif/LoginMessage";
import { open } from "@tauri-apps/api/shell";
import { Notused } from "../../notif/notused";
import { RegisterMessages } from "../../notif/registermessages";
import axios from "axios";
import apiConfig from "../../api/api.config";
import { json } from "react-router-dom";

const Component = () => {
    const navigate = useNavigate();

    function handleOnClickRegister() {
        //LoginNotification();
        return navigate('/Register', { replace: true }), [navigate];
    }

    function copyrightLink() {
        open("https://alextec.icu")
    }

    function notused() {
        Notused();
    }


    const loginaxios = async (a, b) => {
        if (a == null || b == null) {
            RegisterMessages("请确认所有字段已填写！", "error");
        } else {
            var options = {
                method: 'POST',
                url: apiConfig.apilocation + apiConfig.login,
                headers: { 'content-type': 'application/json' },
                data: {
                    username: a,
                    password: b,
                }
            };

            axios.request(options).then(function (response) {
                //console.log(response.data);
                if (response.data.code == 404) {
                    console.log(response.data.message);
                    RegisterMessages(response.data.message, "error");
                }if (response.data.code == 500) {
                    console.log(response.data);
                    RegisterMessages("服务器内部错误！", "error");
                }
                if (response.data.code == 401) {
                    console.log(response.data.message);
                    RegisterMessages(response.data.message, "error");
                } if (response.data.code == 200) {
                    console.log(response.data.data);
                    RegisterMessages(response.data.message, "ok");
                    localStorage.setItem("id",response.data.data.id);
                    localStorage.setItem("username",response.data.data.username);
                    localStorage.setItem("email",response.data.data.email);
                    localStorage.setItem("accessToken",response.data.data.accessToken);
                    console.log(localStorage);
                    setTimeout(() => {
                        navigate('/Main', { replace: true }), [navigate];
                    }, 500);
                }

            }).catch(function (error) {
                console.error(error);
            });
        }

    };

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
                            <p className={styles.title}>欢迎回来</p>
                            <p className={styles.text}>
                                <span className={styles.text}>登录</span>
                                <span className={styles.text1}> AlextecPasswordManager </span>
                                <span className={styles.text2}>账户</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <Form className={styles.inputs} render={({ formState, formApi, values }) => (
                            <>
                                <Form.Input
                                    label={{ text: "用户名" }}
                                    field="username"
                                    placeholder="输入用户名"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                />
                                <Form.Input
                                    label={{ text: "密码" }}
                                    field="password"
                                    placeholder="输入密码"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                    mode="password"
                                />

                                <div className={styles.check11}>
                                    <Checkbox type="default" onChange={() => notused()}>记住我</Checkbox>
                                    <div className={styles.b} onClick={() => notused()}>忘记密码</div>
                                    <div className={styles.a} onClick={() => handleOnClickRegister()}>没有账号?点我注册!</div>
                                </div>

                                <Button theme="solid" className={styles.button} onClick={() => loginaxios(formState.values.username, formState.values.password)}>
                                    登录
                                </Button>
                            </>
                        )}>
                        </Form>
                    </div>
                </div>
            </div>
            <div className={styles.copyright} onClick={() => copyrightLink()}>©2024 Alextec.icu</div>
            <br />
        </div>
    );

}

export default Component;
