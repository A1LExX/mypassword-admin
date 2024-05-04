import React, { useCallback } from "react";
import { Form, Tooltip,useFieldApi, Row, Col, Checkbox, Button, Banner, useFormState } from '@douyinfe/semi-ui';
import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';
import { LoginNotification } from "../../notif/LoginMessage";
import { open } from "@tauri-apps/api/shell";
import { IconLoading,IconHelpCircle } from '@douyinfe/semi-icons';
import { Spin } from '@douyinfe/semi-ui';
import { useState } from 'react';
import axios from "axios";
import apiConfig from "../../api/api.config";
import { RegisterMessages } from "../../notif/registermessages";

const Register = () => {

    const navigate = useNavigate();

    function handleOnClickBackLogin() {
        //LoginNotification();
        return navigate('/Login', { replace: true }), [navigate];
    }
    function copyrightLink() {
        open("https://alextec.icu")
    }

    const registeraxios = async (a, b, c, d) => {
        const regUsername = /^[a-zA-Z0-9_-]{4,16}$/; //用户名正则
        const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //email验证正则表达式
        const regPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (a == null || b == null || c == null || d == null) {
            RegisterMessages("请确认所有字段已填写！", "error");
        } else if (!regEmail.test(b)) {
            RegisterMessages("邮箱格式错误！", "error");
        } else if (!regUsername.test(a)) {
            RegisterMessages("用户名格式错误！", "error");
        } else if (c !== d) {
            RegisterMessages("两次输入密码不一致！", "error");
        } else if (!regPassword.test(c)) {
            RegisterMessages("密码格式错误！", "error");
        } else {
            var options = {
                method: 'POST',
                url: apiConfig.apilocation + apiConfig.register,
                headers: { 'content-type': 'application/json' },
                data: {
                    username: a,
                    email: b,
                    password: c
                }
            };

            axios.request(options).then(function (response) {
                //console.log(response.data);
                if (response.data.code == 400) {
                    console.log(response.data.message);
                    RegisterMessages("用户名已被注册！", "error");
                }
                if (response.data.code == 401) {
                    console.log(response.data.message);
                    RegisterMessages("邮箱已被注册！", "error");
                } if (response.data.code == 200) {
                    console.log(response.data.message);
                    RegisterMessages("注册成功！", "ok");
                    setTimeout(() => {
                        navigate('/Login', { replace: true }), [navigate];
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
                            <p className={styles.title}>用户注册</p>
                            <p className={styles.text}>
                                <span className={styles.text1}> AlextecPasswordManager </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <Form className={styles.inputs} render={({ formState, formApi, values }) => (
                            <>
                                <Form.Input
                                    label={{
                                        text: "用户名",
                                        extra: <Tooltip content='4到16位（字母，数字，下划线，减号）'><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }} /></Tooltip>
                                    }}
                                    field="username"
                                    placeholder="输入用户名"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                />
                                <Form.Input
                                    label={{ text: "邮箱",
                                    extra: <Tooltip content='请输入正确的邮箱！错误的邮箱会导致您无法重置密码'><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }} /></Tooltip>
                                }}
                                    field="email"
                                    placeholder="输入邮箱"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                />
                                <Form.Input
                                    label={{ text: "密码",
                                    extra: <Tooltip content='最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }} /></Tooltip>
                                }}
                                    field="password1"
                                    placeholder="输入密码"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                    mode="password"
                                />
                                <Form.Input
                                    label={{ text: "确认密码" }}
                                    field="password2"
                                    placeholder="确认密码"
                                    style={{ width: "100%" }}
                                    fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                                    mode="password"
                                />
                                <Button theme="solid" className={styles.button} onClick={() => registeraxios(formState.values.username, formState.values.email, formState.values.password1, formState.values.password2)}>
                                    注册
                                </Button>
                                <Button theme="solid" className={styles.button} onClick={() => handleOnClickBackLogin()}>
                                    返回登录
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

export default Register;


