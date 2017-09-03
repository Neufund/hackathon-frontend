import * as React from "react";
import { connect } from "react-redux";

import config from "../config";
import web3 from "../web3/web3Provider";
import Crowdsale from "../web3/contracts/Crowdsale";
import "./CommitDescription.scss";

interface CommitDescriptionComponentProps {
  address: string;
  data: string;
  gas: string;
  gasPrice: string;
}

const CommitDescriptionComponent = ({ address, data, gas, gasPrice }: CommitDescriptionComponentProps) =>
  <div className="commit-description">
    <p>
      We didn’t detect any web3 library (Metamask, Mist, Parity) in your system so we can only give you instruction how
      you can make transfer.
    </p>
    <p>
      You will need to send transaction to following address: <b>{address}</b>
    </p>
    <p>
      You have to include following string in your transaction: <b>{data}</b>
    </p>
    <p>
      Gas ammount: <b>{gas}</b>
    </p>
    <p>
      Gas price: <b>{gasPrice}</b>
    </p>
  </div>;

// eslint-disable-next-line no-unused-vars
const MapStateToProps = (state: any) => ({
  //@todo fix state
  address: config.icoContractAddress,
  data: new Crowdsale(web3, config.icoContractAddress).rawWeb3Contract.commit.getData(),
  gas: "387766",
  gasPrice: web3.toWei("20", "gwei"),
});

export default connect(MapStateToProps)(CommitDescriptionComponent);
