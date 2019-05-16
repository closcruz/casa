import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const EditEventPicker = props => {
  const [selectVal, setSelectVal] = useState("");

  // Make the options for dropdown
  const opts = Object.keys(props.events).map(key => ({
    key: key,
    value: key,
    text: props.events[key].title
  }));

  const handleChange = e => {
    const newEvent = {
      ...props.member,
      [e.currentTarget.name]: e.currentTarget.value
    };
    props.updateEvent(selectVal, newEvent);
  };

  return (
    <div>
      <Form>
        <Form.Select
          fluid
          selection
          placeholder="Events"
          value={selectVal}
          options={opts}
          onChange={(e, { value }) => setSelectVal(value)}
        />
        {selectVal ? (
          <Form>
            <Form.Group>
              <Form.Input
                name="title"
                onChange={handleChange}
                value={props.events[selectVal].title}
              />
              <Form.Input
                name="date"
                onChange={handleChange}
                value={props.events[selectVal].date}
              />
              <Form.Input
                name="desc"
                onChange={handleChange}
                value={props.events[selectVal].description}
              />
              <Button
                color="red"
                icon="close"
                onClick={() => {
                  props.deleteEvent(selectVal);
                  setSelectVal("");
                }}
              />
            </Form.Group>
          </Form>
        ) : (
          <p style={{ fontSize: 20 }}>Select event to edit</p>
        )}
      </Form>
    </div>
  );
};

export default EditEventPicker;
