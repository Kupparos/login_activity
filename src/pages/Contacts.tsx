import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  TextInput,
  Button,
  Container,
  ScrollArea,
} from "@mantine/core";
import { Pencil, Trash, Search } from "tabler-icons-react";
import CreateContactModal from "../components/CreateContactModal";
import { IContact } from "../models/IContact";
import { contactAPI } from "../services/ContactsService";

export default function Contacts() {
  const [opened, setOpened] = useState<boolean>(false);

  const {
    data: contacts,
    error,
    isLoading,
  } = contactAPI.useFetchAllContactsQuery("");
  const [createContact, {}] = contactAPI.useCreateContactMutation()
  const [updateContact, {}] = contactAPI.useUpdateContactMutation()
  const [deleteContact, {}] = contactAPI.useDeleteContactMutation()

  const handleCreate = async () => {
    // const title = prompt()
    // await createContact({title, body: title} as IContact)
}

const handleRemove = (contact: IContact) => {
    deleteContact(contact)
}

const handleUpdate = (contact: IContact) => {
    updateContact(contact)
}

  const rows = contacts && contacts.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={35} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge color="indigo" variant="outline">
          {item.job}
        </Badge>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.phone}
        </Text>
      </td>
      <td>
        <Group spacing={10} position="right">
          <ActionIcon>
            <Pencil size={16} strokeWidth={1.5} />
          </ActionIcon>
          <ActionIcon color="red" onClick={() => handleRemove(item)}>
            <Trash size={16} strokeWidth={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  console.log(error)

  return (
    <Container my={70} size={1100}>
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <Group position="apart" my={10}>
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        >
          Log out
        </Button>
      </Group>
      <Group position="apart" my={40}>
        <TextInput placeholder="Search" rightSection={<Search size={20} />} />
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={() => setOpened(true)}
        >
          Add new contact
        </Button>
      </Group>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job title</th>
              <th>Email</th>
              <th>Phone</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <CreateContactModal opened={opened} setOpened={setOpened} />
    </Container>
  );
}
