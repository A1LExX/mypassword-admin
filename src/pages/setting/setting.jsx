import React from "react";
import styles from './setting.module.scss'
import { CheckboxGroup, Checkbox, RadioGroup, Radio } from '@douyinfe/semi-ui';
const Setting = () => {
    return (
        <div className={styles.rootSettings}>
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.item}>Settings</p>
          <div className={styles.content}>
            <div className={styles.frame1312316546}>
              <div className={styles.frame1312316543}>
                <p className={styles.label}>Email notifications</p>
                <p className={styles.label1}>
                  Get emails to find out what's going on when you're not online.
                </p>
              </div>
              <CheckboxGroup defaultValue={[1, 2]}>
                <Checkbox
                  extra="Get emails to find out what's going on when you're not online. 
    You can turn them off anytime."
                  value={1}
                  className={styles.checkbox}
                >
                  Email notifications
                </Checkbox>
                <Checkbox
                  extra="Tips on getting more out of Untitled."
                  value={2}
                >
                  Tips and tutorials
                </Checkbox>
                <Checkbox
                  extra="Receive the latest news, updates and
    industry tutorials from us."
                  value={3}
                  className={styles.checkbox1}
                >
                  News and updates
                </Checkbox>
              </CheckboxGroup>
            </div>
            <img
              src="https://lf3-static.semi.design/obj/semi-tos/template/eaecb51d-a2f9-4ea1-bc80-78c9e5f43698.svg"
              className={styles.line2}
            />
            <div className={styles.frame1312316547}>
              <div className={styles.frame1312316544}>
                <p className={styles.label}>Comments</p>
                <p className={styles.label1}>
                  These are notifications for comments on
                  <br />
                  your posts and replies to your comments.
                </p>
              </div>
              <RadioGroup defaultValue={1} direction="vertical">
                <Radio value={1}>Do not notifiy me</Radio>
                <Radio
                  extra="Only notify me if I'm mentioned in a comment."
                  value={2}
                >
                  Mentions only
                </Radio>
                <Radio
                  extra="Notify me for all comments on my posts."
                  value={3}
                  className={styles.radio}
                >
                  All comments
                </Radio>
              </RadioGroup>
            </div>
            <img
              src="https://lf3-static.semi.design/obj/semi-tos/template/eaecb51d-a2f9-4ea1-bc80-78c9e5f43698.svg"
              className={styles.line3}
            />
            <div className={styles.frame1312316548}>
              <div className={styles.frame1312316545}>
                <p className={styles.label}>Reminders</p>
                <p className={styles.label1}>
                  These are notifications for posts on your
                  <br />
                  profile, likes and other reactions to your
                </p>
              </div>
              <RadioGroup defaultValue={1} direction="vertical">
                <Radio value={1}>Do not notifiy me</Radio>
                <Radio
                  extra="Only notify me if the reminder is tagged as important."
                  value={2}
                >
                  Important reminders only
                </Radio>
                <Radio
                  extra="Notify me for all reminders."
                  value={3}
                  className={styles.radio}
                >
                  All reminders
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Setting;