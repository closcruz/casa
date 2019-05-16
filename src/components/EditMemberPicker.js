import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const EditMemberPicker = props => {
  const [selectVal, setSelectVal] = useState("");

  // Make the options for dropdown
  const opts = Object.keys(props.members).map(key => ({
    key: key,
    value: key,
    text: props.members[key].name
  }));

  const handleChange = e => {
    const newMember = {
      ...props.member,
      [e.currentTarget.name]: e.currentTarget.value
    };
    props.updateMember(selectVal, newMember);
  };

  return (
    <div>
      <Form>
        <Form.Select
          fluid
          selection
          placeholder="Members"
          value={selectVal}
          options={opts}
          onChange={(e, { value }) => setSelectVal(value)}
        />
        {selectVal ? (
          <Form>
            <Form.Group>
              <Form.Input
                name="name"
                onChange={handleChange}
                value={props.members[selectVal].name}
              />
              <Form.Input
                name="position"
                onChange={handleChange}
                value={props.members[selectVal].position}
              />
              <Form.Input
                name="email"
                onChange={handleChange}
                value={props.members[selectVal].email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                name="major"
                onChange={handleChange}
                value={props.members[selectVal].major}
              />
              <Form.Input
                name="memSince"
                onChange={handleChange}
                value={props.members[selectVal].memSince}
              />
              <Button
                color="red"
                icon="close"
                onClick={() => {
                  props.deleteMember(selectVal);
                  setSelectVal("");
                }}
              />
            </Form.Group>
          </Form>
        ) : (
          <p style={{ fontSize: 20 }}>Select member to edit</p>
        )}
      </Form>
    </div>
  );
};

export default EditMemberPicker;
