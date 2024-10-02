import React from "react";
const list = ["yamaha", "honda", "toyota"];
const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list);
    }, 1000);
  });
};
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
      list: [],
      mode: false,
    };
    this.date = "22/12/2024";
  }
  getTime() {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
    this.setState(newState);
  }
  toggleMode() {
    this.setState((prev) => ({
      ...prev,
      mode: !prev.mode,
    }));
  }
  componentDidMount() {
    fetchApi().then((res) =>
      this.setState((prev) => ({
        ...prev,
        list: res,
      }))
    );
  }

  componentDidUpdate() {
    if (this.state.mode) {
      console.log("update");
    }
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.state.time.created}</h2>
        <h2 id="second">{this.state.seconds.created}</h2>
        <h2>{this.date}</h2>
        <button
          onClick={() => {
            this.getTime();
          }}
        >
          Button
        </button>
        <button
          onClick={() => {
            this.toggleMode();
          }}
        >
          Toggle
        </button>
        {this.state.mode && <button>hello</button>}
      </div>
    );
  }
}
