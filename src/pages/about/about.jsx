import React from "react";
import { Nav, Avatar, Timeline } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import styles from './about.module.scss';

const About =()=>{
    return (
        <div className={styles.rootActivities}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.meegoSharedWebMainDy}>Article</p>
            <div className={styles.frame1321317591}>
              <p className={styles.meegoSharedWebMainDy}>Article</p>
              <p className={styles.rollbackToNodeUNREVI}>
                Quantum mechanics is like a magic trick that happens on a really,
                really small scale. Imagine you have a toy car that you can take
                apart into tiny pieces. When you look at those tiny pieces, they
                don't behave like you'd expect. Sometimes they act like particles,
                which are like tiny balls that bounce around, and sometimes they act
                like waves, which are like ripples in water.
                <br />
                <br />
                Scientists have figured out some rules for how those tiny pieces
                behave, but they're really different from the rules we're used to in
                our everyday life. For example, sometimes a tiny piece can be in two
                different places at the same time! It's like if you could be both in
                your bedroom and in the kitchen at the same time! Scientists are
                still learning about quantum mechanics and trying to figure out all
                the strange things that can happen on that tiny scale.
              </p>
            </div>
            <div className={styles.frame1321317590}>
              <p className={styles.meegoSharedWebMainDy}>Article</p>
              <p className={styles.rollbackToNodeUNREVI}>
                "In the system of dowry, woman is the passive commodity; man is the
                active subject. The former is the possession, the latter the
                possessor. The former is the object, the latter the subject. The
                former is the thing, the latter the person. The woman is de-realized
                into a thing; the man reifies himself by the act of appropriation."
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.frame18250}>
              <div className={styles.frame18246}>
                <div className={styles.frame}>
                  <div className={styles.group2860}>
                    <div className={styles.buttonOnlyIconSecond} />
                  </div>
                  <img
                    src="https://lf3-static.semi.design/obj/semi-tos/template/624dc3e1-884f-45c4-ae3e-70b86e6ac232.png"
                    className={styles.iconAnnounceFilled}
                  />
                </div>
                <p className={styles.meegoSharedWebMainDy}>Updates</p>
              </div>
            </div>
            <Timeline>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem1}
              >
                <div className={styles.frame1321315776}>
                  <div className={styles.frame1321315760}>
                    <div className={styles.frame1321315759}>
                      <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                      <p className={styles.iUrgedYouPleaseCompl}>
                        please complete the request as soon as possible
                      </p>
                    </div>
                  </div>
                  <div className={styles.frame1321315761}>
                    <div className={styles.frame1321315759}>
                      <p className={styles.designAcceptanceUNRE}>
                        Design acceptance
                      </p>
                    </div>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem2}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem3}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem4}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem5}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item
                time="2021-07-05 10:00"
                className={styles.timelineItem6}
              >
                <div className={styles.frame1321315760}>
                  <div className={styles.frame1321315759}>
                    <p className={styles.zhangFanUNREVISED}>Zhang Fan</p>
                    <p className={styles.rollbackToNodeUNREVI}>rollback to node</p>
                    <p className={styles.inTheDesignUNREVISED}>in the design</p>
                  </div>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
    );
}

export default About;