import React, { useCallback } from "react";
import { Form, Checkbox, Button, Banner } from '@douyinfe/semi-ui';
import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';
import { LoginNotification } from "../../notif/LoginMessage";

const Register = () => {
    const navigate = useNavigate();
    function handleOnClickPresetting() {
        //LoginNotification();
        return navigate('/Main', { replace: true }), [navigate];
    }

    function handleOnClickRegister() {
        //LoginNotification();
        return navigate('/Register', { replace: true }), [navigate];
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
                            <p className={styles.title}>欢迎回来</p>
                            <p className={styles.text}>
                                <span className={styles.text}>登录11111111111111111111</span>
                                <span className={styles.text1}> AlextecPasswordManager </span>
                                <span className={styles.text2}>账户</span>
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
                                label={{ text: "密码" }}
                                field="field1"
                                placeholder="输入密码"
                                style={{ width: "100%" }}
                                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
                            />
                        </Form>
                        <div className={styles.check11}>
                            <Checkbox type="default">记住密码</Checkbox>
                            <a className={styles.a} onClick={()=> handleOnClickRegister()}>没有账号?点我注册!</a>
                        </div>

                        <Button theme="solid" className={styles.button} onClick={() => handleOnClickPresetting()}>
                            登录
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Register;
