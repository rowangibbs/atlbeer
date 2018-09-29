import React, { Component } from 'react';
import './style.css';
import { 
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('test-qyvdd');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('prototype');


export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

    db.collection('prototype-name').find({}).asArray()
    .then(docs => {
      console.log('hey')
      Stitch.defaultAppClient.callFunction("function0").then( res => console.log(res));
    }).catch(err => {
      console.error(err)
    });

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="grid">
          <div className="item item--full">
            <div className="item__details">
              jujubes cheesecake
            </div>
          </div>
          <div className="item item--full">
            <div className="item__details">
              jujubes cheesecake
            </div>
          </div>
          <div className="item item--full">
            <div className="item__details">
              jujubes cheesecake
            </div>
          </div>
          <div className="item item--full">
            <div className="item__details">
              jujubes cheesecake
            </div>
          </div>
          <div className="item item--full">
            <div className="item__details">
              jujubes cheesecake
            </div>
          </div>
        </div>
    );
  }
}