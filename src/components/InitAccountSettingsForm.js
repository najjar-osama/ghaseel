import React from "react";
//import { auth } "../firebase/firebase";

class InitAccountSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      erroMessage: "",
      formSubmitted: false
    };
  }
  _resetForm() {
    const nextState = {
      hasError: false,
      erroMessage: "",
      formSubmitted: false
    };
    this.setState(() => nextState);
  }
  render() {
    return this.state.formSubmitted ? (
      <div>submitting..</div>
    ) : (
      <form>
        <div> I am form</div>
      </form>
    );
  }
}

export default InitAccountSettingsForm;
