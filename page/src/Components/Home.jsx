import React from "react";
import "./../css/Home.css";
import phone from "./../Images/phone.png";
import phone2 from "./../Images/phone2.png";
import phoneCharge from "./../Images/phoneCharge.gif";
import transaction from "./../Images/transaction.gif";
import lock from "./../Images/lock.gif";
import calci from "./../Images/calci.gif";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="section1">
          <div className="wrap_content">
            <h1 className="tag-line">
              Safest Cryptocurrency Wallet & Exchange{" "}
            </h1>
            <p>Your Key, Your Crypto.</p>
            <br />
            <br />
            <p>Evercoin is now integrated with YubiKey to</p>
            <p>provide the safest cryptocurrency wallet.</p>
            <br />
            <br />
            <p>Enter your phone number to download the app</p>
            <div className="wrap_input">
              <div>
                <input
                  type="text"
                  placeholder="phone number"
                  className="inputField"
                />
              </div>
              <div>
                <button className="btn">Get the App</button>
              </div>
            </div>{" "}
          </div>
          <div>
            <img src={phone} alt="phones" className="image" />
          </div>
        </div>
      </div>
      {/* -----------------------private keys---------------------------- */}
      <div className="w3-container">
        <div className="privateKeys">
          <div className="PrivateHr">
            <div class="box">
              <div class="green_line"></div>
            </div>
          </div>
          <h1 style={{ paddingBottom: "2%", color: " #3e4d53" }}>
            Never Lose Your Private Keys
          </h1>
          <div
            style={{
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "1.3rem",
              lineHeight: "1.8rem",
              fontWeight: 400,
            }}
          >
            <p style={{ paddingBottom: "6%" }}>
              Losing your keys can mean losing your money forever. Not so with
              Evercoin's non-custodial patent-pending wallet backup and recovery
              service, made even easier with help from our top rated in-app
              customer support.
            </p>
            <div>
              <img src={phone2} alt="tilted phone" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------Exchange Hacking ---------------------------*/}
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              src={phoneCharge}
              alt="phonecharge"
              style={{
                marginLeft: "40%",
                marginTop: "10%",
                height: "100%",
                width: "140%",
              }}
            ></img>
          </div>
          <div>
            <div className="ExchangeHr">
              <div class="box">
                <div class="green_line"></div>
              </div>
              <h2 className="Heading3">Safe from Exchange Hacking</h2>
              <p>
                Non-custodial means that Evercoin never has your private
                key--and all transactions get settled on the blockchain. So the
                user's assets are safe from exchange hacking and there are never
                withdrawal limits or fees.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------Safe Send ------------------------------ */}
      <div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div>
            <img
              src={transaction}
              alt="transaction"
              //   style={{ marginLeft: "55%" }}
            />
          </div>
          <div className="sendHr">
            <div class="box">
              <div class="green_line"></div>
            </div>{" "}
            <h2 className="Heading4">Safe Send & Receive</h2>
            <p>
              The YubiKey encrypts your private key so it can't be found on your
              phone. Once you have paired the YubiKey to the phone, no
              transactions can be signed or sent without inserting that key.
            </p>
          </div>
        </div>
      </div>
      {/* ----------------------Exchange Hacking ------------------- */}
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              src={lock}
              alt="lock"
              style={{
                marginLeft: "40%",
                marginTop: "10%",
                // height: "100%",
                width: "200%",
              }}
            ></img>
          </div>
          <div>
            <div className="ExchangeHr">
              <div class="box">
                <div class="green_line"></div>
              </div>{" "}
              <h2 className="Heading3">Safe from Exchange Hacking</h2>
              <p>
                Non-custodial means that Evercoin never has your private
                key--and all transactions get settled on the blockchain. So the
                user's assets are safe from exchange hacking and there are never
                withdrawal limits or fees.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------Biometric Factors ------------------------ */}
      <div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div>
            <img
              src={calci}
              alt="transaction"
              style={{ width: "120%", marginLeft: "-20%" }}
            />
          </div>
          <div className="ProtectedHr">
            <div class="box">
              <div class="green_line"></div>
            </div>{" "}
            <h2 className="Heading5">Protected by Biometric Factors</h2>
            <p>
              Unlike traditional Hardware Wallets, Evercoin's mobile-first
              design enables Yubikey-powered hardware security to be combined
              with on-device biometric authentication factors like fingerprint
              and face. It also allows users to quickly and securely trade in an
              instant wherever and whenever they need.
            </p>
          </div>
        </div>
      </div>
      <div className="aboveFooter">
        <div className="container1">
          <h1 className="Heading6">Get on board.</h1>
          <p>
            Take control of your digital assets and enjoy the integrated
            exchange experience.
          </p>
          <div className="wrap_input_below">
            <div>
              <input
                type="text"
                placeholder="phone number"
                className="inputField1"
              />
            </div>
            <div>
              <button className="btn1">Get the App</button>
            </div>
            {/* <div className="coin_list">
              <div className="coin-icon">
                <span className="btc">hi</span>
              </div>
            </div> */}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
