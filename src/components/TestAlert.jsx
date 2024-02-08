import React, { Fragment } from 'react';
import { useAlert } from "react-alert";

export default function TestAlert() {
    const alert = useAlert();
  return (
    <div>
    <Fragment>
      <button
        onClick={() => {
          alert.show("Oh look, an alert!");
        }}
      >
        Show Alert
      </button>
      <button
        onClick={() => {
          alert.error("You just broke something!");
        }}
      >
        Oops, an error
      </button>
      <button
        onClick={() => {
          alert.success("It's ok now!");
        }}
      >
        Success!
      </button>
    </Fragment>
    </div>
  )
}
