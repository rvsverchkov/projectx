import React from "react";
import "./CollapseAnswers.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const CollapseAnswers = () => {
    return (
        <div className="collapse">
            <Collapse className="collapse-container" defaultActiveKey={['1']} ghost>
                <Panel header="What network?" key="1">
                    <p>Smartcontract built on the network<br></br>Binance Smart Chain (BSC)</p>
                </Panel>
                <Panel header="How much profit will I get from the investment?" key="2">
                    <p>The daily income from staking is 1% per day</p>
                </Panel>
                <Panel header="What days are the profits accrued?" key="3">
                    <p>Income is accrued every day</p>
                </Panel>
                <Panel header="How long does the investment work?" key="4">
                    <p>For 250 days</p>
                </Panel>
                <Panel header="What is the minimum investment amount?" key="5">
                    <p>Minimum investment amount: $2</p>
                </Panel>
                <Panel header="How long does it take to withdraw profit?" key="6">
                    <p>Withdrawal is automatic and takes ∽1 min.</p>
                </Panel>
                <Panel header="What is the minimum withdrawal?" key="7">
                    <p>Minimum withdrawal $10</p>
                </Panel>
                <Panel header="Can I return my investment early?" key="8">
                    <p>Yes, you can cancel your investment at any time.<br></br>
                        There is a 15% penalty for canceling an investment and the profit already withdrawn from that investment will be deducted.</p>
                </Panel>
                <Panel header="What is the withdrawal fee?" key="9">
                    <p>Withdrawal fee 2%</p>
                </Panel>
                <Panel header="Can I make multiple accounts?" key="10">
                    <p>NO. If you make multiple accounts, they will be blocked.<br></br>
                        This is not allowed and we will make sure that those who will try and exploit our system will be blacklisted.</p>
                </Panel>
                <Panel header="Does xStrategy have an affiliate program?" key="11">
                    <p>Yes. The affiliate program gives you the opportunity to earn extra. It consists of 4 levels 6%, 2%, 1%, and 1%</p>
                </Panel>
                <Panel header="Any extra binuses for leaders?" key="12">
                    <p>Yes. There are additional bonuses for leaders. You can read about them in the PDF presentation</p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default CollapseAnswers;
