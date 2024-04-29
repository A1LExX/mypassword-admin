import React from "react";
import { Nav, Avatar, Select, DatePicker, Table, Button } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell, IconClear, IconMore } from '@douyinfe/semi-icons';
import styles from './mainpassword.module.scss';

const MainPassword = () => {
    return (
        <div className={styles.rootDataRecords}>
            <div className={styles.main}>
                <div className={styles.content}>
                    <p className={styles.item}>File Management</p>
                    <div className={styles.banner}>
                        <img
                            src="https://lf9-static.semi.design/obj/semi-tos/template/d4c95cd0-79ee-4d3d-8b04-c0f7a9afb00b.png"
                            className={styles.bGBottom}
                        />
                        <div className={styles.frame1321317451}>
                            <div className={styles.frame1321315742}>
                                <p className={styles.text}>Panorama View</p>
                                <p className={styles.text1}>
                                    Collaborate with teams across multiple lark project space using
                                    panorama view.
                                    <br />
                                    Integrate Features, Issues, and any other custom work item
                                    together.
                                </p>
                            </div>
                            <div className={styles.frame1321317450}>
                                <div className={styles.button}>
                                    <p className={styles.text}>Learn More</p>
                                </div>
                            </div>
                        </div>
                        <IconClear className={styles.semiIconsClear} />
                    </div>
                    <div className={styles.filter}>
                        <Select
                            placeholder="请选择"
                            maxTagCount={3}
                            prefix="Format"
                            insetLabel="Format"
                            className={styles.selectTrigger}
                        >
                            <Select.Option value="hotsoon">火山</Select.Option>
                            <Select.Option value="douyin">抖音</Select.Option>
                            <Select.Option value="pipixia">皮皮虾</Select.Option>
                            <Select.Option value="douyinlite">抖音极速版</Select.Option>
                            <Select.Option disabled={true} value="duoshan">
                                多闪
                            </Select.Option>
                            <Select.Option value="toutiao">今日头条</Select.Option>
                            <Select.Option value="feishuproject">飞书项目</Select.Option>
                            <Select.Option value="xigua">西瓜视频</Select.Option>
                        </Select>
                        <Select
                            placeholder="请选择"
                            maxTagCount={3}
                            prefix="Creator"
                            insetLabel="Creator"
                            className={styles.selectTrigger1}
                        >
                            <Select.Option value="hotsoon">火山</Select.Option>
                            <Select.Option value="douyin">抖音</Select.Option>
                            <Select.Option value="pipixia">皮皮虾</Select.Option>
                            <Select.Option value="douyinlite">抖音极速版</Select.Option>
                            <Select.Option disabled={true} value="duoshan">
                                多闪
                            </Select.Option>
                            <Select.Option value="toutiao">今日头条</Select.Option>
                            <Select.Option value="feishuproject">飞书项目</Select.Option>
                            <Select.Option value="xigua">西瓜视频</Select.Option>
                        </Select>
                        <DatePicker
                            type="dateRange"
                            insetLabel="Date created"
                            density="default"
                            prefix="Date created"
                            className={styles.datePickerTrigger}
                        />
                    </div>
                    <Table
                        rowSelection={false}
                        columns={[
                            {
                                render: (text, record, index) => {
                                    return (
                                        <div className={styles.column0}>
                                            <p className={styles.text}>doument_1.pdf</p>
                                        </div>
                                    );
                                },
                                title: "标题",
                                hasSorter: false,
                                hasFilter: false,
                            },
                            {
                                render: (text, record, index) => {
                                    return (
                                        <div className={styles.column1}>
                                            <p className={styles.text}>12/06/2020</p>
                                        </div>
                                    );
                                },
                                title: "创建日期",
                                width: 180,
                                hasSorter: true,
                                hasFilter: false,
                            },
                            {
                                render: (text, record, index) => {
                                    return (
                                        <div className={styles.column2}>
                                            <Avatar
                                                size="extra-extra-small"
                                                src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
                                                color="blue"
                                                className={styles.avatar}
                                            >
                                                示例
                                            </Avatar>
                                            <p className={styles.text}>Theresa Webb</p>
                                        </div>
                                    );
                                },
                                title: "创建人",
                                width: 176,
                                hasSorter: false,
                                hasFilter: false,
                            },
                            {
                                render: (text, record, index) => {
                                    return (
                                        <div className={styles.column3}>
                                            <p className={styles.text}>San Juan</p>
                                        </div>
                                    );
                                },
                                title: "描述",
                                width: 161,
                                hasSorter: false,
                                hasFilter: false,
                            },
                            {
                                render: (text, record, index) => {
                                    return (
                                        <div className={styles.column5}>
                                            <Button
                                                theme="borderless"
                                                icon={<IconMore />}
                                                className={styles.button}
                                            />
                                        </div>
                                    );
                                },
                                title: "操作",
                                width: 149,
                                hasSorter: false,
                                hasFilter: false,
                            },
                        ]}
                        dataSource={[
                            { key: "0" },
                            { key: "1" },
                            { key: "2" },
                            { key: "3" },
                            { key: "4" },
                            { key: "5" },
                            { key: "6" },
                            { key: "7" },
                            { key: "8" },
                            { key: "9" },
                            { key: "10" },
                            { key: "11" },
                        ]}
                        size="default"
                        bordered={false}
                        pagination={{ showSizeChanger: true, pageSize: 10 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPassword;