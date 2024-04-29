import React from "react";
import { Nav, Avatar, Tag, Descriptions, Select, TextArea, Button, Table } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell, IconMapPin, IconTiktokLogo, IconMail, IconUserCircle } from '@douyinfe/semi-icons';
import styles from './subhome.module.scss';

const Subhome = () => {
    return (
        <div className={styles.rootProfile}>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.banner}>
            <div className={styles.frame4159}>
              <Avatar
                size="large"
                src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
                color="blue"
                className={styles.avatar}
              >
                示例
              </Avatar>
            </div>
            <div className={styles.name}>
              <p className={styles.richardHendricks}>Richard Hendricks</p>
              <p className={styles.aRichardHendricks}>@RichardHendricks</p>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.descriptions}>
              <div className={styles.frame4152}>
                <IconMapPin className={styles.semiIconsMapPin} />
                <p className={styles.value}>中国 北京</p>
              </div>
              <div className={styles.frame4153}>
                <IconTiktokLogo className={styles.semiIconsTiktokLogo} />
                <p className={styles.value}>抖音认证</p>
              </div>
              <div className={styles.frame4154}>
                <IconMail className={styles.semiIconsMail} />
                <p className={styles.value}>richard@gmail.com</p>
              </div>
              <div className={styles.frame4155}>
                <IconUserCircle className={styles.semiIconsUserCircle} />
                <p className={styles.value}>
                  首席吃货，擅长算法，特别是
                  <br />
                  视频压缩算法
                </p>
              </div>
            </div>
            <div className={styles.tags}>
              <Tag size="large" color="blue" className={styles.tag}>
                官方话题
              </Tag>
              <Tag size="large" color="blue" className={styles.tag1}>
                商业化
              </Tag>
              <Tag size="large" color="orange" className={styles.tag2}>
                大 V
              </Tag>
            </div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.frame}>
            <p className={styles.text}>私信管理</p>
            <div className={styles.frame4160}>
              <Descriptions
                data={[
                  { key: "Apple 账号", value: "richard@icloud.com" },
                  { key: "Google 账号", value: "richard@gmail.com" },
                ]}
                align="justify"
                className={styles.descriptions}
              />
              <Descriptions
                data={[
                  { key: "Instagram", value: "richard_aaa" },
                  { key: "Facebook", value: "Richard Hendricks" },
                ]}
                align="justify"
                className={styles.descriptions1}
              />
            </div>
          </div>
          <div className={styles.components}>
            <div className={styles.inputs}>
              <Select
                placeholder="抖音小助手"
                maxTagCount={3}
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
              <TextArea
                maxCount={100}
                placeholder="占位文本"
                validateStatus="default"
                className={styles.textArea}
              />
              <Button
                theme="solid"
                icon={<IconFeishuLogo />}
                className={styles.button}
              >
                发送
              </Button>
            </div>
            <Table
              rowSelection={false}
              columns={[
                {
                  render: (text, record, index) => {
                    return (
                      <div className={styles.column0}>
                        <img
                          src="https://lf6-static.semi.design/obj/semi-tos/template/0c74b16d-0f9d-4bd4-892b-b6eb30dcb6f0.png"
                          className={styles.group1}
                        />
                        <p className={styles.text}>系统通知</p>
                      </div>
                    );
                  },
                  title: "发信人",
                  hasSorter: false,
                  hasFilter: false,
                  width: 147,
                },
                {
                  render: (text, record, index) => {
                    return (
                      <div className={styles.column1}>
                        <p className={styles.text}>
                          #哪吒之魔童降世# 话题活动开讲啦！根据活动规则，恭喜 13
                          位...
                        </p>
                      </div>
                    );
                  },
                  title: "私信内容",
                  width: 180,
                  hasSorter: false,
                  hasFilter: false,
                },
                {
                  render: (text, record, index) => {
                    return (
                      <div className={styles.column2}>
                        <p className={styles.text}>2020-02-02 05:13</p>
                      </div>
                    );
                  },
                  title: "发信时间",
                  width: 192,
                  hasSorter: false,
                  hasFilter: false,
                },
              ]}
              dataSource={[{ key: "0" }, { key: "1" }, { key: "2" }]}
              size="default"
              bordered={false}
              pagination={{ showSizeChanger: true, pageSize: 10 }}
              className={styles.table}
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Subhome;