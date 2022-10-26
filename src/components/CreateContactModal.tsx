import React from "react";
import { Button, Modal, TextInput } from "@mantine/core";

type Props = {opened: boolean, setOpened: (opened: boolean) => void};

export default function CreateContactModal({opened, setOpened}: Props) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create a new contact"
    >
         <TextInput
        label="Name"
        required
        my={20}
      //   value={value}
      //   onChange={(event) => setValue(event.currentTarget.value)}
      />
      <TextInput
        label="Job"
        my={20}
      //   value={value}
      //   onChange={(event) => setValue(event.currentTarget.value)}
      />
      <TextInput
        label="Email"
        my={20}
      //   value={value}
      //   onChange={(event) => setValue(event.currentTarget.value)}
      />
      <TextInput
        label="Phone"
        required
        my={20}
      //   value={value}
      //   onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button fullWidth mt={30} onClick={() => {setOpened(false)}}>Create</Button>
    </Modal>
  );
}
